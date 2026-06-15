import { useEffect, useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';

import styles from './style';

import {
  listarAgendamentos,
  excluirAgendamento,
  atualizarStatus,
} from '../../../global/database/agendamento';

import {
  buscarClientePorCpf,
} from '../../../global/database/cliente';

export default function AgendamentosAdmin() {

  const [agendamentos, setAgendamentos] =
    useState<any[]>([]);

  function carregar() {

    const dados =
      listarAgendamentos();

    const listaCompleta =
      dados.map(
        (agendamento: any) => {

          const cliente =
            buscarClientePorCpf(
              agendamento.cpf_cliente
            );

          return {

            ...agendamento,

            nome:
              cliente?.nome || '',

            telefone:
              cliente?.telefone || '',

            email:
              cliente?.email || '',

            dataNascimento:
              cliente?.data_nascimento || '',

          };

        }
      );

    setAgendamentos(
      listaCompleta
    );

  }

  useEffect(() => {

    carregar();

  }, []);

  function cancelar(id: number) {

    excluirAgendamento(id);

    carregar();

    Alert.alert(
      'Sucesso',
      'Agendamento cancelado.'
    );

  }

  function confirmar(id: number) {

    atualizarStatus(
      id,
      'Confirmado'
    );

    carregar();

    Alert.alert(
      'Sucesso',
      'Agendamento confirmado.'
    );

  }

  function finalizar(id: number) {

    atualizarStatus(
      id,
      'Finalizado'
    );

    carregar();

    Alert.alert(
      'Sucesso',
      'Agendamento finalizado.'
    );

  }
  function abrirWhatsApp(item: any) {

  const telefone =
  (item.telefone || '').replace(/\D/g, '');

if (telefone.length < 10) {

  Alert.alert(
    'Telefone inválido',
    'O cliente não possui um telefone válido.'
  );

  return;

}

  const mensagem =
`Olá, ${item.nome}! 👋

Somos da Monique Design.

Estamos entrando em contato sobre o seu atendimento referente ao projeto de ${item.tipo || 'Interior'}, agendado para o dia ${item.data} às ${item.horario}.

Caso tenha alguma dúvida ou precise alterar alguma informação, nossa equipe está à disposição.

Será um prazer atendê-lo!`;

  const url =
    `https://wa.me/55${telefone}?text=${encodeURIComponent(mensagem)}`;

Linking.openURL(url).catch(() => {

  Alert.alert(
    'Erro',
    'Não foi possível abrir o WhatsApp.'
  );

});

}

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Gerenciar Agendamentos
      </Text>

      {agendamentos.length === 0 ? (

        <Text style={styles.value}>
          Nenhum agendamento encontrado.
        </Text>

      ) : (

        agendamentos.map((item) => (

          <View
            key={item.id}
            style={styles.card}
          >

            <Text style={styles.label}>
              Cliente
            </Text>

            <Text style={styles.value}>
              {item.nome}
            </Text>

            <Text style={styles.label}>
              CPF
            </Text>

            <Text style={styles.value}>
              {item.cpf_cliente}
            </Text>

            <Text style={styles.label}>
              Telefone
            </Text>

            <Text style={styles.value}>
              {item.telefone}
            </Text>
            <TouchableOpacity
  style={{
    backgroundColor: '#25D366',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  }}
  onPress={() => abrirWhatsApp(item)}
>

  <Text
    style={{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
    }}
  >
    💬 Abrir WhatsApp
  </Text>

</TouchableOpacity>
            <Text style={styles.label}>
              E-mail
            </Text>

            <Text style={styles.value}>
              {item.email}
            </Text>

            <Text style={styles.label}>
              Data de Nascimento
            </Text>

            <Text style={styles.value}>
              {item.dataNascimento}
            </Text>
            
             <Text style={styles.label}>
             Ambiente
            </Text>

            <Text style={styles.value}>
            {item.tipo || 'Não informado'}
            </Text>

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

            <View style={styles.actions}>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() =>
                  confirmar(item.id)
                }
              >

                <Text style={styles.actionText}>
                  Confirmar
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.finishButton}
                onPress={() =>
                  finalizar(item.id)
                }
              >

                <Text style={styles.actionText}>
                  Finalizar
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() =>
                  cancelar(item.id)
                }
              >

                <Text style={styles.actionText}>
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