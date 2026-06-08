import { db } from './conexaobd';

export const listarHorarios = () => {

  if (!db) return [];

  return db.getAllSync(`
    SELECT *
    FROM horario
    ORDER BY hora
  `);

};

export const criarHorario = (
  hora: string
) => {

  if (!db) return;

  db.runSync(
    `
    INSERT INTO horario
    (
      hora
    )
    VALUES
    (
      ?
    )
    `,
    [hora]
  );

};

export const excluirHorario = (
  id: number
) => {

  if (!db) return;

  db.runSync(
    `
    DELETE FROM horario
    WHERE id = ?
    `,
    [id]
  );

};