import * as SQLite from 'expo-sqlite';


export const db = SQLite.openDatabaseSync('design_interiores.db');

db.execSync(`
  CREATE TABLE IF NOT EXISTS cliente (
    cpf TEXT PRIMARY KEY,
    nome TEXT,
    data_nascimento TEXT,
    email TEXT,
    telefone TEXT
  );
`);

