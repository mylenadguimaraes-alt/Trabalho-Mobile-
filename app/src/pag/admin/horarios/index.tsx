import { useEffect, useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

import {
  listarHorarios,
  criarHorario,
  excluirHorario,
} from '../../../global/database/horario';

export default function HorariosAdmin() {

  const [hora, setHora] = useState('');

  const [horarios, setHorarios] = useState<any[]>([]);

  function carregar() {

    const dados = listarHorarios();

    setHorarios(dados || []);

  }

  useEffect(() => {

    carregar();

  }, []);

  function salvar() {

    if (!hora) return;

    criarHorario(hora);

    setHora('');

    carregar();

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Horários
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 09:00"
        value={hora}
        onChangeText={setHora}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >

        <Text style={styles.buttonText}>
          Adicionar Horário
        </Text>

      </TouchableOpacity>

      {horarios.map((item) => (

        <View
          key={item.id}
          style={styles.card}
        >

          <Text style={styles.nome}>
            {item.hora}
          </Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() =>
              excluirHorario(item.id)
            }
          >

            <Text style={styles.deleteText}>
              Excluir
            </Text>

          </TouchableOpacity>

        </View>

      ))}

    </ScrollView>

  );
}