import { useEffect, useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './style';

import {
  listarAgendamentosCliente,
  excluirAgendamento,
} from '../../../global/database/agendamento';

import {
  getUsuarioLogado,
} from '../../../global/session';
export default function MeusAgendamentos({ navigation }: any) {

  const [agendamentos, setAgendamentos] = useState<any[]>([]);

  const carregarAgendamentos = () => {

  const cpfCliente =
    getUsuarioLogado();

  const dados =
    listarAgendamentosCliente(
      cpfCliente
    );

  setAgendamentos(dados || []);

};

  useEffect(() => {

    carregarAgendamentos();

  }, []);

  const cancelar = (id: number) => {

    excluirAgendamento(id);

    carregarAgendamentos();

    Alert.alert(
      'Agendamento cancelado',
      'Seu agendamento foi removido.'
    );

  };

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Meus Agendamentos
      </Text>

      {agendamentos.length === 0 ? (

        <Text style={styles.empty}>
          Nenhum agendamento encontrado.
        </Text>

      ) : (

        agendamentos.map((item) => (

          <View
            key={item.id}
            style={styles.card}
          >

            <Text style={styles.label}>
               Data
            </Text>

            <Text style={styles.value}>
              {item.data}
            </Text>

            <Text style={styles.label}>
              Horário
            </Text>

            <Text style={styles.value}>
              {item.horario}
            </Text>

            <Text style={styles.label}>
               Status
            </Text>

            <Text style={styles.status}>
              {item.status}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}
            >

              <TouchableOpacity
                style={[
                  styles.cancelButton,
                  {
                    flex: 1,
                    marginRight: 8,
                    backgroundColor: '#a07e28',
                  }
                ]}
                onPress={() =>
                  navigation.navigate(
                    'ReagendarAgendamento',
                    {
                      id: item.id
                    }
                  )
                }
              >

                <Text style={styles.cancelText}>
                  Reagendar
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.cancelButton,
                  {
                    flex: 1,
                    marginLeft: 8,
                  }
                ]}
                onPress={() =>
                  cancelar(item.id)
                }
              >

                <Text style={styles.cancelText}>
                  Cancelar
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        ))

      )}

    </ScrollView>

  );
}