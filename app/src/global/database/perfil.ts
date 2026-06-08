import { db } from './conexaobd';

export const buscarCliente = (
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

export const atualizarCliente = (
  cpf: string,
  telefone: string,
  email: string
) => {

  if (!db) return;

  db.runSync(
    `
    UPDATE cliente
    SET telefone = ?,
        email = ?
    WHERE cpf = ?
    `,
    [
      telefone,
      email,
      cpf
    ]
  );

};