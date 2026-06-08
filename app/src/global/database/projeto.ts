import { db } from './conexaobd';

export const listarProjetos = () => {

  if (!db) return [];

  return db.getAllSync(`
    SELECT *
    FROM projeto
    ORDER BY id DESC
  `);

};

export const criarProjeto = (
  titulo: string,
  categoria: string,
  descricao: string,
  imagem: string
) => {

  if (!db) return;

  db.runSync(
    `
    INSERT INTO projeto
    (
      titulo,
      categoria,
      descricao,
      imagem
    )
    VALUES
    (
      ?,
      ?,
      ?,
      ?
    )
    `,
    [
      titulo,
      categoria,
      descricao,
      imagem
    ]
  );

};

export const excluirProjeto = (
  id: number
) => {

  if (!db) return;

  db.runSync(
    `
    DELETE FROM projeto
    WHERE id = ?
    `,
    [id]
  );

};