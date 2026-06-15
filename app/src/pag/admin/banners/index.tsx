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
  listarBanners,
  criarBanner,
  excluirBanner,
} from '../../../global/database/banner';

import {
  uploadImagem,
} from '../../../global/cloudinary/uploadImagem';

export default function BannersAdmin() {

  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState('');

  const [banners, setBanners] = useState<any[]>([]);

  function carregar() {

    const dados = listarBanners();

    setBanners(dados || []);

  }

  useEffect(() => {

    carregar();

  }, []);

  async function selecionarImagem() {

    const permissao =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {

      Alert.alert(
        'Permissão necessária',
        'Permita acesso à galeria.'
      );

      return;

    }

    const resultado =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,

        allowsEditing: true,

        quality: 1,

      });

    if (!resultado.canceled) {

      setImagem(
        resultado.assets[0].uri
      );

    }

  }

  async function salvar() {

    if (
      !titulo ||
      !imagem
    ) {

      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;

    }

    try {

      Alert.alert(
        'Aguarde',
        'Enviando imagem...'
      );

      const urlImagem =
        await uploadImagem(imagem);

      criarBanner(
        titulo,
        urlImagem
      );

      Alert.alert(
        'Sucesso',
        'Banner cadastrado.'
      );

      setTitulo('');
      setImagem('');

      carregar();

    } catch (error) {

      console.log(error);

      Alert.alert(
        'Erro',
        'Falha ao enviar imagem.'
      );

    }

  }

  function excluir(id: number) {

    excluirBanner(id);

    carregar();

    Alert.alert(
      'Sucesso',
      'Banner removido.'
    );

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Banners
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={selecionarImagem}
      >

        <Text style={styles.buttonText}>
          📷 Escolher Imagem
        </Text>

      </TouchableOpacity>

      {imagem !== '' && (

        <Image
          source={{
            uri: imagem,
          }}
          style={{
            width: '100%',
            height: 180,
            borderRadius: 10,
            marginBottom: 15,
          }}
        />

      )}

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >

        <Text style={styles.buttonText}>
          Salvar Banner
        </Text>

      </TouchableOpacity>

      {banners.map((item) => (

        <View
          key={item.id}
          style={styles.card}
        >

          <Text style={styles.nome}>
            {item.titulo}
          </Text>

          {item.imagem ? (

            <Image
              source={{
                uri: item.imagem,
              }}
              style={{
                width: '100%',
                height: 150,
                borderRadius: 10,
                marginTop: 10,
              }}
            />

          ) : null}

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