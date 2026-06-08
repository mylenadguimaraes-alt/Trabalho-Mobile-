import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

export default function ProjetoDetalhe({ route, navigation }: any) {

  const { projeto } = route.params;

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* IMAGEM PRINCIPAL */}
      <Image
        source={{ uri: projeto.imagem }}
        style={styles.banner}
      />

      <View style={styles.content}>

        <Text style={styles.category}>
          {projeto.categoria}
        </Text>

        <Text style={styles.title}>
          {projeto.titulo}
        </Text>

        <Text style={styles.description}>
          {projeto.descricao}
        </Text>

        <Text style={styles.sectionTitle}>
          Sobre o Projeto
        </Text>

        <Text style={styles.longDescription}>
          Este projeto foi desenvolvido para oferecer
          conforto, sofisticação e funcionalidade.
          Cada detalhe foi pensado para criar uma
          experiência elegante e acolhedora para os moradores.
        </Text>

        <Text style={styles.sectionTitle}>
          Galeria
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <Image
            source={{ uri: projeto.imagem }}
            style={styles.galleryImage}
          />

          <Image
            source={{ uri: projeto.imagem }}
            style={styles.galleryImage}
          />

          <Image
            source={{ uri: projeto.imagem }}
            style={styles.galleryImage}
          />

        </ScrollView>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >

          <Text style={styles.buttonText}>
            Agendar Atendimento
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );
}