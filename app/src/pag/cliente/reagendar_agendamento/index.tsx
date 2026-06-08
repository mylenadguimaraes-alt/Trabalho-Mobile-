import { useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { Calendar } from 'react-native-calendars';

import styles from './style';

import {
  buscarAgendamento,
  atualizarAgendamento,
} from '../../../global/database/agendamento';

import {
  listarHorarios,
} from '../../../global/database/horario';

export default function ReagendarAgendamento({
  route,
  navigation,
}: any) {

  const { id } = route.params;

  const [dataSelecionada, setDataSelecionada] =
    useState('');

  const [horarioSelecionado, setHorarioSelecionado] =
    useState('');

  const [horarios, setHorarios] =
    useState<any[]>([]);

  useEffect(() => {

    const agendamento =
      buscarAgendamento(id);

    if (agendamento) {

      setDataSelecionada(
        agendamento.data
      );

      setHorarioSelecionado(
        agendamento.horario
      );

    }

    const lista =
      listarHorarios();

    setHorarios(lista || []);

  }, []);

  function salvar() {

    if (
      !dataSelecionada ||
      !horarioSelecionado
    ) {

      Alert.alert(
        'Atenção',
        'Selecione data e horário.'
      );

      return;

    }

    atualizarAgendamento(
      id,
      dataSelecionada,
      horarioSelecionado
    );

    Alert.alert(
      'Sucesso',
      'Agendamento atualizado.'
    );

    navigation.goBack();

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Reagendar Atendimento
      </Text>

      <View style={styles.calendarContainer}>

        <Calendar

          onDayPress={(day) => {

            setDataSelecionada(
              day.dateString
            );

          }}

          markedDates={{
            [dataSelecionada]: {
              selected: true,
              selectedColor: '#a07e28',
            },
          }}

        />

      </View>

      <Text style={styles.sectionTitle}>
        Horários Disponíveis
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        {horarios.map((item) => (

          <TouchableOpacity
            key={item.id}
            style={[
              styles.hourButton,

              horarioSelecionado ===
                item.hora &&
                styles.hourButtonSelected,
            ]}
            onPress={() =>
              setHorarioSelecionado(
                item.hora
              )
            }
          >

            <Text
              style={[
                styles.hourText,

                horarioSelecionado ===
                  item.hora &&
                  styles.hourTextSelected,
              ]}
            >
              {item.hora}
            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >

        <Text style={styles.buttonText}>
          Salvar Reagendamento
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );

}