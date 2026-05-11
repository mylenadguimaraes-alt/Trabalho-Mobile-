import { db, API_URL } from "../database/conexaobd";
import { Alert } from 'react-native';

{/*
export const CpfExistente = (tabela: string, cpf: string): boolean => {
  
    try {
    const cpfLimpo = cpf.replace(/\D/g, '');
    const resultado = db.getFirstSync(
      `SELECT 1 FROM ${tabela} WHERE cpf = ?`,
      [cpfLimpo]
    );

    
    return !!resultado;

  } catch (error) {
    console.log('Erro ao verificar CPF:', error);
    throw error; 
  }

};
*/}




export const CpfExistente = async (tabela: string, cpf: string): Promise<boolean> => {
  try {
    const cpfLimpo = cpf.replace(/\D/g, '');

    const response = await fetch(
      `${API_URL}/cpf-existe?cpf=${cpfLimpo}&tabela=${tabela}`
    );

    if (!response.ok) {
      console.log('Erro HTTP:', response.status);
      return false;
    }

    const data = await response.json();

    return data.existe;

  } catch (error) {
    console.log('Erro ao verificar CPF:', error);
    return false;
  }
};


{/*
export const EmailExistente = (tabela: string, email: string): boolean =>{
  try{
    const resultado = db.getFirstSync(
      `SELECT 1 FROM ${tabela} WHERE email = ?`,
      [email]
    );
    return !!resultado;
  }catch (error) {
    console.log('Erro ao verificar e-mail:', error)
    throw error;
  }

};
*/}


export const EmailExistente = async (tabela: string, email: string): Promise<boolean> => {
  try {
    const emailNormalizado = email.trim().toLowerCase();

    const response = await fetch(
      `${API_URL}/email-existe?tabela=${tabela}&email=${encodeURIComponent(emailNormalizado)}`
    );

    // 🔥 evita erro quando não vem JSON
    if (!response.ok) {
      console.log('Erro HTTP:', response.status);
      return false;
    }

    const dados = await response.json();

    return dados.existe;

  } catch (error) {
    console.log('Erro ao verificar e-mail:', error);
    return false;
  }
};

{/*
export const cadastrar = (tabela: string, nome: string, 
  cpf: string, data: string, email: string, telefone: string): boolean =>{
    
    try{
      const cpfLimpo = cpf.replace(/\D/g, '');
      const dataLimpa = data.replace(/\D/g, '');
      const telefoneLimpo = telefone.replace(/\D/g, '');

      const resultado = db.runSync(
        `INSERT INTO ${tabela}
        (cpf, nome, data_nascimento, email, telefone)
        VALUES (?, ?, ?, ?, ?) `, [cpfLimpo, nome, dataLimpa, email, telefoneLimpo ]
      )

      return true;

    }catch(error){
      console.log('Erro ao cadastrar:', error);
      throw error;
    }
}

*/}

export const cadastrar = async (
  tabela: string,
  nome: string,
  cpf: string,
  data: string,
  email: string,
  telefone: string, 
  senha: string
): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/cadastrar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tabela, 
        nome,
        cpf,
        data,
        email,
        telefone, 
        senha
      }),
    });

    const dataResponse = await response.json();

    if (!response.ok) {
      console.log(dataResponse.erro);
      return false;
    }

    return true;

  } catch (error) {
    console.log('Erro ao cadastrar:', error);
    return false;
  }
};



let alertaAberto = false;

export const VerificarServidor = async (): Promise<boolean> => {

  try {

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 3000);

    const response = await fetch(`${API_URL}/clientes`, {
      method: 'GET',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    return response.ok;

  } catch (error) {

    console.log('Erro servidor:', error);

    if (!alertaAberto) {

      alertaAberto = true;

      Alert.alert(
        'Servidor indisponível',
        'O sistema está offline no momento. Tente novamente mais tarde.',
        [
          {
            text: 'OK',
            onPress: () => {
              alertaAberto = false;
            }
          }
        ]
      );
    }

    return false;
  }
};