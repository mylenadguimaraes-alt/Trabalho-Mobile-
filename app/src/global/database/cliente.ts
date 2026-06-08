import { db } from './conexaobd';

export const salvarCliente = (
  cpf: string,
  nome: string,
  dataNascimento: string,
  email: string,
  telefone: string,
  senha: string
) => {

  if (!db) return;

  db.runSync(
    `
    INSERT INTO cliente
    (
      cpf,
      nome,
      data_nascimento,
      email,
      telefone,
      senha
    )
    VALUES
    (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    )
    `,
    [
      cpf,
      nome,
      dataNascimento,
      email,
      telefone,
      senha
    ]
  );

};

export const buscarClientePorEmail = (
  email: string
) => {

  if (!db) return null;

  const resultado = db.getAllSync(
    `
    SELECT *
    FROM cliente
    WHERE email = ?
    `,
    [email]
  );

  return resultado[0];

};

export const buscarClientePorCpf = (
  cpf: string
) => {

  if (!db) return null;

  const resultado = db.getAllSync(
    `
    SELECT *
    FROM cliente
    WHERE cpf = ?
    `,
    [cpf]
  );

  return resultado[0];

};

export const listarClientes = () => {

  if (!db) return [];

  return db.getAllSync(
    `
    SELECT *
    FROM cliente
    ORDER BY nome
    `
  );

};

export const excluirCliente = (
  cpf: string
) => {

  if (!db) return;

  db.runSync(
    `
    DELETE FROM cliente
    WHERE cpf = ?
    `,
    [cpf]
  );

};