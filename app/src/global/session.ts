let cpfLogado = '';

export const setUsuarioLogado = (
  cpf: string
) => {

  cpfLogado = cpf;

};

export const getUsuarioLogado = () => {

  return cpfLogado;

};

export const logout = () => {

  cpfLogado = '';

};