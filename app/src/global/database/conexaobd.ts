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
      data TEXT,
      horario TEXT,
      status TEXT
    );
  `);

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

}

export { db };

export const API_URL =
  'http://192.168.31.105:3000';