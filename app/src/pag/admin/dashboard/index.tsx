import { useEffect, useState } from 'react';

import {
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './style';

import {
  obterEstatisticas,
} from '../../../global/database/dashboard';

export default function Dashboard({ navigation }: any) {

  const [dados, setDados] = useState({

    agendamentos: 0,

    clientes: 0,

    projetos: 0,

    banners: 0,

    horarios: 0,

  });

  useEffect(() => {

    const resultado =
      obterEstatisticas();

    setDados(resultado);

  }, []);

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Dashboard Administrativo
      </Text>

      {/* AGENDAMENTOS */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('AgendamentosAdmin')
        }
      >

        <Text style={styles.cardTitle}>
           Agendamentos
        </Text>

        <Text style={styles.cardNumber}>
          {dados.agendamentos}
        </Text>

      </TouchableOpacity>

      {/* CLIENTES */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('ClientesAdmin')
        }
      >

        <Text style={styles.cardTitle}>
           Clientes
        </Text>

        <Text style={styles.cardNumber}>
          {dados.clientes}
        </Text>

      </TouchableOpacity>

      {/* PROJETOS */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('ProjetosAdmin')
        }
      >

        <Text style={styles.cardTitle}>
           Projetos
        </Text>

        <Text style={styles.cardNumber}>
          {dados.projetos}
        </Text>

      </TouchableOpacity>

      {/* HORÁRIOS */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('HorariosAdmin')
        }
      >

        <Text style={styles.cardTitle}>
           Horários
        </Text>

        <Text style={styles.cardNumber}>
          {dados.horarios}
        </Text>

      </TouchableOpacity>

      {/* BANNERS */}
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('BannersAdmin')
        }
      >

        <Text style={styles.cardTitle}>
          Banners
        </Text>

        <Text style={styles.cardNumber}>
          {dados.banners}
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );
}