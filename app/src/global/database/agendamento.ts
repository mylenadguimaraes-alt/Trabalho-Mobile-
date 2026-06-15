import { db } from './conexaobd';

export const salvarAgendamento = (
  cpfCliente: string,
  tipo: string,
  data: string,
  horario: string
) => {

  if (!db) return;

  db.runSync(
    `
    INSERT INTO agendamento
    (
      cpf_cliente,
      tipo,
      data,
      horario,
      status
    )
    VALUES
    (
      ?,
      ?,
      ?,
      ?,
      ?
    )
    `,
    [
      cpfCliente,
      tipo,
      data,
      horario,
      'Confirmado'
    ]
  );

};

export const listarAgendamentos = () => {

  if (!db) return [];

  return db.getAllSync(
    `
    SELECT *
    FROM agendamento
    ORDER BY id DESC
    `
  );

};

export const excluirAgendamento = (
  id: number
) => {

  if (!db) return;

  db.runSync(
    `
    DELETE FROM agendamento
    WHERE id = ?
    `,
    [id]
  );

};

export const atualizarStatus = (
  id: number,
  status: string
) => {

  if (!db) return;

  db.runSync(
    `
    UPDATE agendamento
    SET status = ?
    WHERE id = ?
    `,
    [status, id]
  );

};

export const atualizarAgendamento = (
  id: number,
  data: string,
  horario: string
) => {

  if (!db) return;

  db.runSync(
    `
    UPDATE agendamento
    SET data = ?,
        horario = ?
    WHERE id = ?
    `,
    [
      data,
      horario,
      id
    ]
  );

};

export const buscarAgendamento = (
  id: number
) => {

  if (!db) return null;

  const resultado = db.getAllSync(
    `
    SELECT *
    FROM agendamento
    WHERE id = ?
    `,
    [id]
  );

  return resultado[0];

};

export const listarAgendamentosCliente = (
  cpfCliente: string
) => {

  if (!db) return [];

  return db.getAllSync(
    `
    SELECT *
    FROM agendamento
    WHERE cpf_cliente = ?
    ORDER BY id DESC
    `,
    [cpfCliente]
  );

};

export const verificarHorarioOcupado = (
  data: string,
  horario: string
) => {

  if (!db) return false;

  const resultado = db.getAllSync(
    `
    SELECT *
    FROM agendamento
    WHERE data = ?
      AND horario = ?
      AND status != 'Cancelado'
    `,
    [
      data,
      horario
    ]
  );

  return resultado.length > 0;

};