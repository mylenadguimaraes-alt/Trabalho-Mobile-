import { Platform } from 'react-native';

let db: any = null;

if (Platform.OS !== 'web') {

  const SQLite = require('expo-sqlite');

  db = SQLite.openDatabaseSync(
    'design_interiores.db'
  );

  // CLIENTE
  db.execSync(`
    CREATE TABLE IF NOT EXISTS cliente (
      cpf TEXT PRIMARY KEY,
      nome TEXT,
      data_nascimento TEXT,
      email TEXT,
      telefone TEXT,
      senha TEXT
    );
  `);

  // AGENDAMENTO
db.execSync(`
  CREATE TABLE IF NOT EXISTS agendamento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cpf_cliente TEXT,
    tipo TEXT,
    data TEXT,
    horario TEXT,
    status TEXT
  );
`);

// Adiciona a coluna "tipo" caso o banco já exista
try {

  db.execSync(`
    ALTER TABLE agendamento
    ADD COLUMN tipo TEXT;
  `);

} catch (error) {
  // A coluna já existe
}

  // PROJETO
  db.execSync(`
    CREATE TABLE IF NOT EXISTS projeto (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      categoria TEXT,
      descricao TEXT,
      imagem TEXT
    );
  `);

  // BANNER
  db.execSync(`
    CREATE TABLE IF NOT EXISTS banner (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      imagem TEXT
    );
  `);

  // HORÁRIO
  db.execSync(`
    CREATE TABLE IF NOT EXISTS horario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hora TEXT
    );
  `);
    // POPULA O BANCO COM DADOS DE EXEMPLO

const projetos = db.getAllSync(
  `SELECT * FROM projeto`
);

if (projetos.length === 0) {

  db.runSync(
    `INSERT INTO projeto
    (titulo,categoria,descricao,imagem)
    VALUES
    (?,?,?,?)`,
    [
      'Quarto Contemporâneo',
      'Quarto',
      'Projeto moderno com conforto e elegância.',
      'https://res.cloudinary.com/dhdwpxqjl/image/upload/v1781485602/d52e1da8-ca03-4916-a3ff-b3ff91c70d0f_quixpc.jpg'
    ]
  );

  db.runSync(
    `INSERT INTO projeto
    (titulo,categoria,descricao,imagem)
    VALUES
    (?,?,?,?)`,
    [
      'Quarto Luxo',
      'Quarto',
      'Ambiente sofisticado e acolhedor.',
      'https://res.cloudinary.com/dhdwpxqjl/image/upload/v1781485571/bfc7904b-7f96-45ee-8592-ecff5ae39a55_kqa7bj.jpg'
    ]
  );

  db.runSync(
    `INSERT INTO projeto
    (titulo,categoria,descricao,imagem)
    VALUES
    (?,?,?,?)`,
    [
      'Quarto Minimalista',
      'Quarto',
      'Projeto clean com linhas modernas.',
      'https://res.cloudinary.com/dhdwpxqjl/image/upload/v1781485527/40f507e9-6498-4db3-b527-25edcb2d79b0_eqlnbc.jpg'
    ]
  );

  db.runSync(
    `INSERT INTO projeto
    (titulo,categoria,descricao,imagem)
    VALUES
    (?,?,?,?)`,
    [
      'Cozinha Planejada',
      'Cozinha',
      'Projeto funcional e elegante.',
      'https://res.cloudinary.com/dhdwpxqjl/image/upload/v1781485518/19bd923e-8cac-46a2-b278-e7328b257650_rwueuv.jpg'
    ]
  );

  db.runSync(
    `INSERT INTO projeto
    (titulo,categoria,descricao,imagem)
    VALUES
    (?,?,?,?)`,
    [
      'Cozinha Gourmet',
      'Cozinha',
      'Espaço planejado para receber com conforto.',
      'https://res.cloudinary.com/dhdwpxqjl/image/upload/v1781485600/e0b70d63-c299-46c6-90b4-0db8ebee9355_zjm90u.jpg'
    ]
  );

}

const banners = db.getAllSync(
  `SELECT * FROM banner`
);

if (banners.length === 0) {

  db.runSync(
    `INSERT INTO banner
    (titulo,imagem)
    VALUES
    (?,?)`,
    [
      'Banner Principal',
      'https://res.cloudinary.com/dhdwpxqjl/image/upload/v1781485621/d797ba9a-2b7e-4c28-9aa7-11497656d90d_bpexdj.jpg'
    ]
  );

  db.runSync(
    `INSERT INTO banner
    (titulo,imagem)
    VALUES
    (?,?)`,
    [
      'Banner Destaque',
      'https://res.cloudinary.com/dhdwpxqjl/image/upload/v1781485592/d12aeef5-34d8-40be-9dcb-a94777184af6_xjseb7.jpg'
    ]
  );

}

const horarios = db.getAllSync(
  `SELECT * FROM horario`
);

if (horarios.length === 0) {

  [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00'
  ].forEach((hora) => {

    db.runSync(
      `INSERT INTO horario
      (hora)
      VALUES
      (?)`,
      [hora]
    );

  });

}
}

export { db };

export const API_URL =
  'http://192.168.31.105:3000'