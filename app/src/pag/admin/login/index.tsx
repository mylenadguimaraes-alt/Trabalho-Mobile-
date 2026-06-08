import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './style';

export default function AdminLogin({ navigation }: any) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {

    if (
      usuario === 'admin' &&
      senha === 'admin123'
    ) {

      navigation.navigate('Dashboard');

      return;
    }

    Alert.alert(
      'Acesso negado',
      'Usuário ou senha inválidos.'
    );

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Painel Administrativo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={entrar}
      >

        <Text style={styles.buttonText}>
          Entrar
        </Text>

      </TouchableOpacity>

    </View>

  );
}