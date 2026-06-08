import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TextInput,
  Alert,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';
import { useState } from 'react';
import {
  salvarCliente,
  buscarClientePorEmail,
} from '../../../global/database/cliente';

import {
  setUsuarioLogado,
} from '../../../global/session';

export default function Login_cadastro({ navigation }: any) {

  //LOGIN OU CADASTRO
  const [login, setlogin] = useState<boolean>(true);

  //LOGIN
  const [emaillogin, setemaillogin] = useState<string>('');
  const [senhaLogin, setsenhalogin] = useState<string>('');
  const [buttonsenhalogin, setbuttonsenhalogin] = useState<boolean>(true);

  //CADASTRO
  const [nome, setnome] = useState<string>('');
  const [cpf, setcpf] = useState<string>('');
  const [dataNascimento, setDataNascimento] = useState<string>('');
  const [emailcadastro, setemailcadastro] = useState<string>('');
  const [telefone, settelefone] = useState<string>('');
  const [senhacad, setsenhacad] = useState<string>('');
  const [senhacadCon, setsenhacadCon] = useState<string>('');
  const [buttonsenhacad, setbuttonsenhacad] = useState<boolean>(true);
  const [buttonsenhacadcon, setbuttonsenhacadcon] = useState<boolean>(true);

  //LIMPAR CAMPOS
  const LimparDadosCad = () => {

    setnome('');
    setcpf('');
    setDataNascimento('');
    setemailcadastro('');
    settelefone('');
    setsenhacad('');
    setsenhacadCon('');

  };

  //LOGIN
  const handleLogin = async () => {

  if (!emaillogin || !senhaLogin) {

    Alert.alert(
      'Campos obrigatórios',
      'Por favor, preencha e-mail e senha.'
    );

    return;

  }

  const cliente =
    buscarClientePorEmail(
      emaillogin
    );

  if (!cliente) {

    Alert.alert(
      'Erro',
      'Cliente não encontrado.'
    );

    return;

  }

  if (
    cliente.senha !== senhaLogin
  ) {

    Alert.alert(
      'Erro',
      'Senha incorreta.'
    );

    return;

  }

  setUsuarioLogado(
    cliente.cpf
  );

  navigation.navigate(
    'Agendamento'
  );

};

  //CADASTRO
 const handleCadastro = async () => {

  if (
    !nome ||
    !cpf ||
    !dataNascimento ||
    !emailcadastro ||
    !telefone ||
    !senhacad ||
    !senhacadCon
  ) {

    Alert.alert(
      'Campos obrigatórios',
      'Preencha todos os campos.'
    );

    return;

  }

  if (cpf.length < 14) {

    Alert.alert(
      'CPF inválido',
      'Digite um CPF válido.'
    );

    return;

  }

  if (telefone.length < 15) {

    Alert.alert(
      'Telefone inválido',
      'Digite um telefone válido.'
    );

    return;

  }

  if (dataNascimento.length < 10) {

    Alert.alert(
      'Data inválida',
      'Digite a data corretamente.'
    );

    return;

  }

  if (senhacad !== senhacadCon) {

    Alert.alert(
      'Erro',
      'As senhas não coincidem.'
    );

    return;

  }

  try {

    salvarCliente(
      cpf,
      nome,
      dataNascimento,
      emailcadastro,
      telefone,
      senhacad
    );

    setUsuarioLogado(
      cpf
    );

  } catch (error) {

    Alert.alert(
      'Erro',
      'Já existe um cliente cadastrado com este CPF.'
    );

    return;

  }

  Alert.alert(
    'Cadastro concluído ✨',
    'Seu cadastro foi realizado com sucesso!',
    [
      {
        text: 'Continuar',
        onPress: () => {

          LimparDadosCad();

          navigation.navigate(
            'Agendamento'
          );

        }
      }
    ]
  );

};

  //CPF
  const handleCpf = (text: string) => {

    let numeros = text.replace(/\D/g, '');

    numeros = numeros.slice(0, 11);

    let formatado = numeros
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    setcpf(formatado);

  };

  //TELEFONE
  const handleTelefone = (text: string) => {

    let numeros = text.replace(/\D/g, '');

    numeros = numeros.slice(0, 11);

    let formatado = numeros;

    if (numeros.length > 0) {
      formatado = numeros.replace(/^(\d{2})/, '($1)');
    }

    if (numeros.length > 2) {
      formatado = formatado.replace(/^(\(\d{2}\))(\d)/, '$1 $2');
    }

    if (numeros.length > 7) {
      formatado = formatado.replace(/(\d{5})(\d)/, '$1-$2');
    }

    settelefone(formatado);

  };

  //DATA
  const handleData = (text: string) => {

    const numeros = text.replace(/\D/g, '').slice(0, 8);

    const dia = numeros.slice(0, 2);
    const mes = numeros.slice(2, 4);
    const ano = numeros.slice(4, 8);

    let resultado = dia;

    if (mes) resultado += '/' + mes;
    if (ano) resultado += '/' + ano;

    setDataNascimento(resultado);

  };

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      showsVerticalScrollIndicator={false}
    >

      {login ? (

        //LOGIN
        <View style={styles.login}>

          <View style={styles.title_container}>

            <Text style={styles.title}>
              Login
            </Text>

          </View>

          <Text style={styles.text}>
            E-mail
          </Text>

          <TextInput
            value={emaillogin}
            onChangeText={setemaillogin}
            placeholder='Exemplo@gmail.com'
            style={styles.input}
          />

          <Text style={styles.text}>
            Senha
          </Text>

          <View style={styles.senha}>

            <TextInput
              value={senhaLogin}
              onChangeText={setsenhalogin}
              secureTextEntry={buttonsenhalogin}
              style={styles.input_senha}
            />

            <Pressable
              onPress={() => {
                setbuttonsenhalogin(!buttonsenhalogin)
              }}
            >

              <View style={{ marginLeft: 10 }}>

                {buttonsenhalogin ? (

                  <Image
                    style={styles.senha_imagem}
                    source={require('../../img/olhofechado.png')}
                  />

                ) : (

                  <Image
                    style={styles.senha_imagem}
                    source={require('../../img/olhoaberto.png')}
                  />

                )}

              </View>

            </Pressable>

          </View>

          <View style={styles.buttons}>

            <Pressable
              onPress={handleLogin}
              style={styles.button_item}
            >

              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 16,
                }}
              >
                Entrar
              </Text>

            </Pressable>

            <Pressable
              onPress={() => setlogin(false)}
              style={styles.button_item}
            >

              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 16,
                }}
              >
                Cadastrar
              </Text>

            </Pressable>

          </View>

        </View>

      ) : (

        //CADASTRO
        <View style={styles.cadastro}>

          <View style={styles.title_container}>

            <Text style={styles.title}>
              Cadastro
            </Text>

          </View>

          <ScrollView
            contentContainerStyle={styles.cadastro_scroll}
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.dentro_cad_scroll}>

              <Text style={styles.text}>
                Nome Completo
              </Text>

              <TextInput
                value={nome}
                onChangeText={setnome}
                style={styles.input}
              />

              <Text style={styles.text}>
                CPF
              </Text>

              <TextInput
                value={cpf}
                onChangeText={handleCpf}
                style={styles.input}
                keyboardType='numeric'
                maxLength={14}
              />

              <Text style={styles.text}>
                Data de Nascimento
              </Text>

              <TextInput
                value={dataNascimento}
                onChangeText={handleData}
                style={styles.input}
                keyboardType='numeric'
              />

              <Text style={styles.text}>
                E-mail
              </Text>

              <TextInput
                value={emailcadastro}
                onChangeText={setemailcadastro}
                style={styles.input}
              />

              <Text style={styles.text}>
                Telefone / Whatsapp
              </Text>

              <TextInput
                value={telefone}
                onChangeText={handleTelefone}
                style={styles.input}
                keyboardType='numeric'
                maxLength={15}
              />

              <Text style={styles.text}>
                Senha
              </Text>

              <View style={styles.senha}>

                <TextInput
                  value={senhacad}
                  onChangeText={setsenhacad}
                  secureTextEntry={buttonsenhacad}
                  style={styles.input_senha}
                />

                <Pressable
                  onPress={() => {
                    setbuttonsenhacad(!buttonsenhacad)
                  }}
                >

                  <Image
                    style={styles.senha_imagem}
                    source={
                      buttonsenhacad
                        ? require('../../img/olhofechado.png')
                        : require('../../img/olhoaberto.png')
                    }
                  />

                </Pressable>

              </View>

              <Text style={styles.text}>
                Confirmar Senha
              </Text>

              <View style={styles.senha}>

                <TextInput
                  value={senhacadCon}
                  onChangeText={setsenhacadCon}
                  secureTextEntry={buttonsenhacadcon}
                  style={styles.input_senha}
                />

                <Pressable
                  onPress={() => {
                    setbuttonsenhacadcon(!buttonsenhacadcon)
                  }}
                >

                  <Image
                    style={styles.senha_imagem}
                    source={
                      buttonsenhacadcon
                        ? require('../../img/olhofechado.png')
                        : require('../../img/olhoaberto.png')
                    }
                  />

                </Pressable>

              </View>

              <View style={styles.buttons}>

                <Pressable
                  onPress={() => setlogin(true)}
                  style={styles.button_item}
                >

                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: 16,
                    }}
                  >
                    Voltar
                  </Text>

                </Pressable>

                <Pressable
                  onPress={handleCadastro}
                  style={styles.button_item}
                >

                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: 16,
                    }}
                  >
                    Cadastrar
                  </Text>

                </Pressable>

              </View>

            </View>

          </ScrollView>

        </View>

      )}

      <StatusBar style="dark" />

    </ScrollView>
  );
}