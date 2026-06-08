import { useEffect, useState } from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './style';

import {
  buscarCliente,
  atualizarCliente,
} from '../../../global/database/perfil';

import {
  getUsuarioLogado,
  logout,
} from '../../../global/session';

export default function Perfil({ navigation }: any) {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] =
    useState('');

  useEffect(() => {

    const cpfCliente =
      getUsuarioLogado();

    const cliente =
      buscarCliente(cpfCliente);

    if (cliente) {

      setNome(cliente.nome);
      setCpf(cliente.cpf);
      setTelefone(cliente.telefone);
      setEmail(cliente.email);
      setDataNascimento(
        cliente.data_nascimento
      );

    }

  }, []);

  function salvar() {

    atualizarCliente(
      cpf,
      telefone,
      email
    );

    Alert.alert(
      'Sucesso',
      'Dados atualizados.'
    );

  }

  function sair() {

    logout();

    navigation.navigate(
      'Home'
    );

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Meu Perfil
      </Text>

      <Text style={styles.label}>
        Nome
      </Text>

      <TextInput
        style={styles.input}
        value={nome}
        editable={false}
      />

      <Text style={styles.label}>
        CPF
      </Text>

      <TextInput
        style={styles.input}
        value={cpf}
        editable={false}
      />

      <Text style={styles.label}>
        Data de nascimento
      </Text>

      <TextInput
        style={styles.input}
        value={dataNascimento}
        editable={false}
      />

      <Text style={styles.label}>
        Telefone
      </Text>

      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >

        <Text style={styles.buttonText}>
          Atualizar Dados
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: '#d9534f',
            marginTop: 10,
          }
        ]}
        onPress={sair}
      >

        <Text style={styles.buttonText}>
          Sair da Conta
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );

}