import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, ScrollView, Image, TouchableOpacity} from 'react-native';
import  styles  from '../style/style_login_cadastro'
import useUser from './user/user';
import { useState } from 'react';


export default function Login_cadastro() {

    const {user} = useUser();

  return (
    <View style = {styles.container}>
        
        <View style = {styles.login}>
            
            <Text style = { styles.login_text }>E-mail</Text>

            <TextInput placeholder='' style = {styles.login_input} />
            
            <Text style = {styles.login_text}>Senha</Text>
            
            <TextInput placeholder='' style = {styles.login_input} />

            <Button title='Entrar'></Button>

        </View>
      

      <StatusBar style="auto" />
    
    </View>
  );
}