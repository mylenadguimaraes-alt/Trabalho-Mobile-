import { useEffect, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import styles from './style';

import {
  listarProjetos,
  criarProjeto,
  excluirProjeto,
} from '../../../global/database/projeto';

export default function ProjetosAdmin() {

  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const [projetos, setProjetos] = useState<any[]>([]);

  async function selecionarImagem() {

    const permissao =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {

      Alert.alert(
        'Permissão necessária',
        'Permita acesso à galeria para selecionar imagens.'
      );

      return;

    }

    const resultado =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes: ['images'],

        allowsEditing: true,

        quality: 1,

      });

    if (!resultado.canceled) {

      setImagem(
        resultado.assets[0].uri
      );

    }

  }

  function carregar() {

    const dados = listarProjetos();

    setProjetos(dados || []);

  }

  useEffect(() => {

    carregar();

  }, []);

  function salvar() {

    if (
      !titulo ||
      !categoria ||
      !descricao ||
      !imagem
    ) {

      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;

    }

    criarProjeto(
      titulo,
      categoria,
      descricao,
      imagem
    );

    Alert.alert(
      'Sucesso',
      'Projeto cadastrado com sucesso.'
    );

    setTitulo('');
    setCategoria('');
    setDescricao('');
    setImagem('');

    carregar();

  }

  function excluir(id: number) {

    excluirProjeto(id);

    carregar();

    Alert.alert(
      'Sucesso',
      'Projeto removido.'
    );

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Projetos
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TouchableOpacity
        style={styles.imageButton}
        onPress={selecionarImagem}
      >

        <Text style={styles.imageButtonText}>
          📷 Escolher Imagem
        </Text>

      </TouchableOpacity>

      {imagem !== '' && (

        <Image
          source={{
            uri: imagem,
          }}
          style={styles.preview}
        />

      )}

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >

        <Text style={styles.buttonText}>
          Salvar Projeto
        </Text>

      </TouchableOpacity>

      {projetos.map((item) => (

        <View
          key={item.id}
          style={styles.card}
        >

          <Text style={styles.nome}>
            {item.titulo}
          </Text>

          <Text>
            {item.categoria}
          </Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() =>
              excluir(item.id)
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