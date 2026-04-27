const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// conecta no SEU banco do PC
const db = new sqlite3.Database('./design_interiores.db');

// teste
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// listar clientes
app.get('/clientes', (req, res) => {
  db.all('SELECT * FROM cliente', [], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});




app.get('/cpf-existe', (req, res) => {
  const { cpf, tabela } = req.query;

  if (!cpf || !tabela) {
    return res.status(400).json({ erro: 'CPF ou tabela não enviados' });
  }

  // 🔐 segurança (OBRIGATÓRIO)
  const tabelasPermitidas = ['cliente'];

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

  // 🔐 segurança (OBRIGATÓRIO)
  const tabelasPermitidas = ['cliente'];

  if (!tabelasPermitidas.includes(tabela)) {
    return res.status(400).json({ erro: 'Tabela inválida' });
  }

  const query = `SELECT 1 FROM ${tabela} WHERE email = ?`;

  db.get(query, [email], (err, row) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ erro: 'Erro no banco' });
    }

    res.json({ existe: !!row });
  });
});