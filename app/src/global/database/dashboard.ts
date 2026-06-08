import { db } from './conexaobd';

export const obterEstatisticas = () => {

  if (!db) {

    return {
      agendamentos: 0,
      clientes: 0,
      projetos: 0,
      banners: 0,
      horarios: 0,
    };

  }

  const agendamentos = db.getAllSync(
    'SELECT * FROM agendamento'
  );

  const clientes = db.getAllSync(
    'SELECT * FROM cliente'
  );

  const projetos = db.getAllSync(
    'SELECT * FROM projeto'
  );

  const banners = db.getAllSync(
    'SELECT * FROM banner'
  );

  const horarios = db.getAllSync(
    'SELECT * FROM horario'
  );

  return {

    agendamentos: agendamentos.length,

    clientes: clientes.length,

    projetos: projetos.length,

    banners: banners.length,

    horarios: horarios.length,

  };

};