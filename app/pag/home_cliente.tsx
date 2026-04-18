import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import  styles  from './style/style_home'
import useUser from './user/user';
import { useState } from 'react';


export default function Home() {

    const {user} = useUser();

  return (
    <View style = {styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>

        <Image style = {styles.logo} source={require('./img/logo.png')}/>

        <TouchableOpacity > 
          <View style = {styles.user_log}>
            <Text style = {styles.text_user_log}>{user}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <ScrollView>
        <Text style={styles.text}>Bem-vinda!</Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
