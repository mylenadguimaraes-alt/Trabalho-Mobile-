import { useState, useEffect } from 'react';

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
  listarHorarios,
} from '../../../global/database/horario';

import {
  salvarAgendamento,
  verificarHorarioOcupado,
} from '../../../global/database/agendamento';
import {
  getUsuarioLogado,
} from '../../../global/session';


export default function Agendamento() {

  const [agendado, setAgendado] = useState(false);

  const [dataSelecionada, setDataSelecionada] = useState('');
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [tipoAmbiente, setTipoAmbiente] = useState('');

  const [horarios, setHorarios] = useState<any[]>([]);

  useEffect(() => {

    const dados = listarHorarios();

    setHorarios(dados || []);

  }, []);

  const confirmarAgendamento = () => {

if (
  !tipoAmbiente ||
  !dataSelecionada ||
  !horarioSelecionado
) {

    Alert.alert(
      'Atenção',
     'Selecione o ambiente, a data e o horário.'
    );

    return;
  }

  try {

    const cpfCliente =
      getUsuarioLogado();

    if (!cpfCliente) {

      Alert.alert(
        'Erro',
        'Faça login antes de agendar.'
      );

      return;

    }
    const ocupado =
  verificarHorarioOcupado(
    dataSelecionada,
    horarioSelecionado
  );

if (ocupado) {

  Alert.alert(
    'Horário indisponível',
    'Este horário já foi reservado.'
  );

  return;

}

    salvarAgendamento(
  cpfCliente,
  tipoAmbiente,
  dataSelecionada,
  horarioSelecionado
);

    setAgendado(true);

    Alert.alert(
      '✨ Agendamento Confirmado',
      'Estamos ansiosos para transformar seu ambiente em algo único e especial 💛'
    );

  } catch (error) {

    console.log(error);

    Alert.alert(
      'Erro',
      'Não foi possível salvar o agendamento.'
    );

  }

};

  const reagendarAgendamento = () => {

    Alert.alert(
      'Reagendar',
      'Escolha uma nova data e horário.'
    );

  };
  const cancelarAgendamento = () => {

  setAgendado(false);

  setDataSelecionada('');

  setHorarioSelecionado('');

  Alert.alert(
    'Agendamento cancelado',
    'Seu horário foi cancelado com sucesso.'
  );

};

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.content}>

        <Text style={styles.title}>
          Agende seu Atendimento
        </Text>

        <Text style={styles.subtitle}>
          Escolha a melhor data e horário para iniciar
          a transformação do seu ambiente.
        </Text>

        <View style={styles.calendarContainer}>

          <Calendar

            onDayPress={(day) => {
              setDataSelecionada(day.dateString);
            }}

            markedDates={{
              [dataSelecionada]: {
                selected: true,
                selectedColor: '#a07e28',
              },
            }}

            theme={{
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',

              todayTextColor: '#a07e28',

              arrowColor: '#a07e28',

              selectedDayBackgroundColor: '#a07e28',
              selectedDayTextColor: '#fff',

              textDayFontWeight: '500',
              textMonthFontWeight: '700',
              textDayHeaderFontWeight: '600',

              monthTextColor: '#2d2d2d',
              dayTextColor: '#444',
              textDisabledColor: '#ccc',
            }}

          />

        </View>
<Text style={styles.sectionTitle}>
  Ambiente
</Text>

<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.hoursContainer}
>

  {[
    'Sala',
    'Quarto',
    'Cozinha',
    'Banheiro',
    'Escritório',
    'Área Externa',
    'Outro',
  ].map((item) => (

    <TouchableOpacity
      key={item}
      style={[
        styles.hourButton,
        tipoAmbiente === item &&
        styles.hourButtonSelected,
      ]}
      onPress={() =>
        setTipoAmbiente(item)
      }
    >

      <Text
        style={[
          styles.hourText,
          tipoAmbiente === item &&
          styles.hourTextSelected,
        ]}
      >
        {item}
      </Text>

    </TouchableOpacity>

  ))}

</ScrollView>
        <Text style={styles.sectionTitle}>
          Horários Disponíveis
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.hoursContainer}
        >

          {horarios.map((item) => (

            <TouchableOpacity
              key={item.id}

              style={[
                styles.hourButton,

                horarioSelecionado === item.hora &&
                styles.hourButtonSelected,
              ]}

              onPress={() => {
                setHorarioSelecionado(item.hora);
              }}
            >

              <Text
                style={[
                  styles.hourText,

                  horarioSelecionado === item.hora &&
                  styles.hourTextSelected,
                ]}
              >
                {item.hora}
              </Text>

            </TouchableOpacity>

          ))}

        </ScrollView>

        {(dataSelecionada || horarioSelecionado) && (

          <View style={styles.selectedInfo}>

           <Text style={styles.selectedText}>
            Ambiente: {tipoAmbiente || 'Não selecionado'}
            </Text>
            <Text style={styles.selectedText}>
               Data: {dataSelecionada || 'Não selecionada'}
            </Text>

            <Text style={styles.selectedText}>
             Horário: {horarioSelecionado || 'Não selecionado'}
            </Text>

          </View>

        )}

        <TouchableOpacity
          style={styles.button}
          onPress={confirmarAgendamento}
        >

          <Text style={styles.buttonText}>
            Confirmar Agendamento
          </Text>

        </TouchableOpacity>

        {agendado && (

          <View style={styles.appointmentCard}>

            <Text style={styles.appointmentTitle}>
              Meu Agendamento
            </Text>
            
             <Text style={styles.appointmentText}>
             Ambiente: {tipoAmbiente}
            </Text>
            <Text style={styles.appointmentText}>
               Data: {dataSelecionada}
            </Text>

            <Text style={styles.appointmentText}>
               Horário: {horarioSelecionado}
            </Text>

            <Text style={styles.appointmentText}>
              Status: Confirmado ✨
            </Text>

            <View style={styles.appointmentButtons}>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={reagendarAgendamento}
              >

                <Text style={styles.secondaryButtonText}>
                  Reagendar
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={cancelarAgendamento}
              >

                <Text style={styles.secondaryButtonText}>
                  Cancelar
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        )}

      </View>

    </ScrollView>

  );
}