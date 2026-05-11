import * as SQLite from 'expo-sqlite';
import { useState } from 'react';


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


export const API_URL = 'http://192.168.31.105:3000';
