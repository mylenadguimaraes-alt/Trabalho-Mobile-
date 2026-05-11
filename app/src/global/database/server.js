process.on('uncaughtException', (err) => {
  console.log('💥 Erro não tratado:', err);
});

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


// 🔐 segurança (OBRIGATÓRIO)
const tabelasPermitidas = ['cliente'];


const db = new sqlite3.Database('./design_interiores.db', (err) => {
  if (err) {
    console.log('❌ Erro ao conectar no banco:', err.message);
  } else {
    console.log('✅ Conectado ao banco de dados SQLite');
  }
});

app.get('/', (req, res) => {
  console.log('🔎 Rota / acessada');
  res.send('API funcionando');
});

app.get('/clientes', (req, res) => {
  console.log('📄 Buscando clientes no banco...');

  db.all('SELECT * FROM cliente', [], (err, rows) => {
    if (err) {
      console.log('❌ Erro ao buscar clientes:', err);
      return res.status(500).json(err);
    }

    console.log(`✅ ${rows.length} cliente(s) encontrado(s)`);

    res.json(rows);
  });
});



app.get('/cpf-existe', (req, res) => {
  const { cpf, tabela } = req.query;

  if (!cpf || !tabela) {
    return res.status(400).json({ erro: 'CPF ou tabela não enviados' });
  }



  if (!tabelasPermitidas.includes(tabela)) {
    return res.status(400).json({ erro: 'Tabela inválida' });
  }

  const cpfLimpo = cpf.replace(/\D/g, '');

  const query = `SELECT 1 FROM ${tabela} WHERE cpf = ?`;

  db.get(query, [cpfLimpo], (err, row) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro no banco' });
    }

    res.json({ existe: !!row });
  });
});



app.get('/email-existe', (req, res) => {
  const { email, tabela } = req.query;

  if (!email || !tabela) {
    return res.status(400).json({ erro: 'E-mail ou tabela não enviados' });
  }

  if (!tabelasPermitidas.includes(tabela)) {
    return res.status(400).json({ erro: 'Tabela inválida' });
  }

  const emailLimpo = email.trim().toLowerCase();

  console.log(`📧 Verificando e-mail: ${emailLimpo}`);

  const query = `SELECT 1 FROM ${tabela} WHERE email = ?`;

  db.get(query, [emailLimpo], (err, row) => {
    if (err) {
      console.log('❌ Erro no banco:', err);
      return res.status(500).json({ erro: 'Erro no banco' });
    }

    res.json({ existe: !!row });
  });
});


app.post('/cadastrar', (req, res) => {
  const { tabela, nome, cpf, data, email, telefone, senha } = req.body;

  if (!tabela || !nome || !cpf || !data || !email || !telefone || !senha) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  if (!tabelasPermitidas.includes(tabela)) {
    return res.status(400).json({ erro: 'Tabela inválida' });
  }

  const cpfLimpo = cpf.replace(/\D/g, '');
  const telefoneLimpo = telefone.replace(/\D/g, '');
  const dataLimpa = data.replace(/\D/g, '');
  const emailLimpo = email.trim().toLowerCase();

  console.log(`📥 Inserindo cliente em ${tabela}`);

  const query = `
    INSERT INTO ${tabela} (nome, cpf, data_nascimento, email, telefone, senha)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [nome, cpfLimpo, dataLimpa, emailLimpo, telefoneLimpo, senha], function (err) {
    if (err) {
      console.log('❌ Erro ao cadastrar:', err.message);

      // 🔥 trata duplicidade (caso frontend falhe)
      if (err.message.includes('UNIQUE')) {
        return res.status(400).json({ erro: 'CPF ou e-mail já cadastrado' });
      }

      return res.status(500).json({ erro: 'Erro ao cadastrar' });
    }

    console.log('✅ Cadastro realizado com sucesso');

    res.json({ sucesso: true });
  });
});


app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});