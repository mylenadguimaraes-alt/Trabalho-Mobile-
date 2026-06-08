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
  listarBanners,
  criarBanner,
  excluirBanner,
} from '../../../global/database/banner';

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

  function salvar() {

    criarBanner(
      titulo,
      imagem
    );

    setTitulo('');
    setImagem('');

    carregar();

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

      <TextInput
        style={styles.input}
        placeholder="URL da imagem"
        value={imagem}
        onChangeText={setImagem}
      />

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

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() =>
              excluirBanner(item.id)
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