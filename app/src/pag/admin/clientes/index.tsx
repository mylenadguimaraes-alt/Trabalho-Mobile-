import { useEffect, useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './style';

import {
  listarClientes,
  excluirCliente,
} from '../../../global/database/cliente';

export default function ClientesAdmin() {

  const [clientes, setClientes] = useState<any[]>([]);

  function carregar() {

    const dados = listarClientes();

    setClientes(dados || []);

  }

  useEffect(() => {

    carregar();

  }, []);

  function excluir(cpf: string) {

    excluirCliente(cpf);

    carregar();

    Alert.alert(
      'Sucesso',
      'Cliente removido.'
    );

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Clientes
      </Text>

      {clientes.map((cliente) => (

        <View
          key={cliente.cpf}
          style={styles.card}
        >

          <Text style={styles.nome}>
            {cliente.nome}
          </Text>

          <Text style={styles.info}>
            CPF: {cliente.cpf}
          </Text>

          <Text style={styles.info}>
            Telefone: {cliente.telefone}
          </Text>

          <Text style={styles.info}>
            Email: {cliente.email}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              excluir(cliente.cpf)
            }
          >

            <Text style={styles.buttonText}>
              Excluir
            </Text>

          </TouchableOpacity>

        </View>

      ))}

    </ScrollView>

  );
}