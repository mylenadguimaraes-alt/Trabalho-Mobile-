import { useEffect, useState } from 'react';
import {
  obterBannerPrincipal,
} from '../../../global/database/banner';
import { StatusBar } from 'expo-status-bar';

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

import {
  listarProjetos,
} from '../../../global/database/projeto';

export default function Home({ navigation }: any) {

  const [projetos, setProjetos] = useState<any[]>([]);
  const [banner, setBanner] = useState<any>(null);
  useEffect(() => {

  const dados = listarProjetos();

  setProjetos(dados || []);

  const bannerBanco =
    obterBannerPrincipal();

  setBanner(bannerBanco);

}, []);

  return (

    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <Image
          style={styles.logo}
          source={require('../../img/logo.png')}
        />

        <TouchableOpacity>

          <View style={styles.user_log}>

            <Text style={styles.text_user_log}>
              R
            </Text>

          </View>

        </TouchableOpacity>

      </View>

      {/* CONTEÚDO */}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HERO */}
        <View style={styles.heroContainer}>

          <Text style={styles.text}>
            Transformando ambientes em experiências únicas.
          </Text>

          <Text style={styles.subtitle}>
            Projetos sofisticados para transformar seu ambiente
            com elegância, conforto e personalidade.
          </Text>

          <Image
  style={styles.banner}
  source={{
    uri:
      banner?.imagem ||
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'
  }}
/>
        </View>

        {/* PROJETOS */}
        <Text style={styles.sectionTitle}>
          Destaques do Studio
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          {projetos.map((item) => (

            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate(
                  'ProjetoDetalhe',
                  {
                    projeto: item,
                  }
                )
              }
            >

              <View style={styles.card}>

                <Image
                  style={styles.cardImage}
                  source={{
                    uri: item.imagem,
                  }}
                />

                <View style={styles.cardOverlay} />

                <View style={styles.cardContent}>

                  <View style={styles.tag}>

                    <Text style={styles.tagText}>
                      {item.categoria}
                    </Text>

                  </View>

                  <Text style={styles.cardTitle}>
                    {item.titulo}
                  </Text>

                  <Text style={styles.cardDescription}>
                    {item.descricao}
                  </Text>

                </View>

              </View>

            </TouchableOpacity>

          ))}

        </ScrollView>

        {/* SEM PROJETOS */}
        {projetos.length === 0 && (

          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              color: '#777',
            }}
          >
            Nenhum projeto cadastrado.
          </Text>

        )}

        {/* EXPERIÊNCIA */}
        <View style={styles.experienceContainer}>

          <Text style={styles.experienceTitle}>
            Experiência Premium ✨
          </Text>

          <Text style={styles.experienceText}>
            Atendimento personalizado para transformar
            seu ambiente em um espaço sofisticado,
            confortável e único.
          </Text>

        </View>

        {/* AGENDAR */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >

          <Text style={styles.buttonText}>
            Agendar Atendimento
          </Text>

        </TouchableOpacity>

        {/* MEUS AGENDAMENTOS */}
        <TouchableOpacity
          style={styles.secondaryHomeButton}
          onPress={() =>
            navigation.navigate(
              'MeusAgendamentos'
            )
          }
        >

          <Text style={styles.secondaryHomeButtonText}>
             Meus Agendamentos
          </Text>

        </TouchableOpacity>

<TouchableOpacity
  style={styles.secondaryHomeButton}
  onPress={() =>
    navigation.navigate('Perfil')
  }
>
  <Text style={styles.secondaryHomeButtonText}>
    Meu Perfil
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.secondaryHomeButton}
  onPress={() =>
    navigation.navigate('AdminLogin')
  }
>

  <Text style={styles.secondaryHomeButtonText}>
    Área Administrativa
  </Text>

</TouchableOpacity>

      </ScrollView>

      <StatusBar style="dark" />

    </View>

  );
}