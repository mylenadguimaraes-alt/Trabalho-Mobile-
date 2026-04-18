import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Alert, Button, Pressable, ScrollView, Image, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import  styles  from './style/style_login_cadastro'
import { useState } from 'react';
import {db} from './bd/conexaobd'



export default function Login_cadastro() {

    const [login, setlogin] = useState<boolean>(true);

    const [emaillogin, setemaillogin] = useState<string>('');

    const [senhaLogin, setsenhalogin] = useState<string>('');

    const [buttonsenhalogin, setbuttonsenhalogin] = useState<boolean>(true);

    const [dataNascimento, setDataNascimento] = useState(new Date());

    const handleEmailLogin = (text: string) =>
    {
      setemaillogin(text);
    };

    const handleSenhaLogin = (text: string) =>
    {
      setsenhalogin(text);
    };

    const handleLogin = () =>
    {
      //Preencha os campos
      if (!emaillogin || !senhaLogin) {
        Alert.alert(
          'Campos obrigatórios',
          'Por favor, preencha e-mail e senha.',
          [ 
            {
              text: 'OK',
              onPress: () => console.log('Usuário fechou o alerta'),
            },
          ],
          { cancelable: true }
        );

        return;

      };
      
      try {
        const result = db.getFirstSync('SELECT 1 as teste');
        console.log(result);

        Alert.alert('Sucesso', 'Banco conectado!');
      } catch (error) {
        console.log(error);
        Alert.alert('Erro', 'Falha na conexão');
      }
      

      // Sucesso
      //Alert.alert(
        //'Login realizado',
        //`Bem-vindo, ${emaillogin}!`
      //);

    };

    const irparaCadastro = (): void => 
    {
      setlogin(false);

    };

    const irparaLogin = (): void =>
    {
      setlogin(true)
    };


  return (

    <View style = {styles.container}>
        
        {login ? ( 
          <View style = {styles.login} >
            
            <View style = {styles.title_container}>
              <Text style = {styles.title}>Login</Text>
            </View>

            <Text style = { styles.text }>E-mail</Text>

            <TextInput value={emaillogin} onChangeText={handleEmailLogin} placeholder='Exemplo@gmail.com' style = {styles.input} />
            
            <Text style = {styles.text}>Senha</Text>
            
            <View style = {styles.senha}>

              <TextInput value={senhaLogin} onChangeText={handleSenhaLogin} 
              secureTextEntry = {buttonsenhalogin} style = {styles.input_senha}/>

              <Pressable onPress={() => {setbuttonsenhalogin(!buttonsenhalogin)}}>
                <Text style={{ marginLeft: 10 }}>
                  {buttonsenhalogin ? (
                    <Image style = {styles.senha_imagem} source={require('./img/olhofechado.png')} />
                  ) : (
                    <Image style = {styles.senha_imagem} source={require('./img/olhoaberto.png')} />
                )}
                </Text>
              </Pressable>
            
            </View>
            

            <View style = {styles.buttons}>

              <Pressable onPress={handleLogin}
              
                style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#e972d1' : '#ffffff6c',
                },
                styles.button_item,
                ]}>
                
                {({ pressed }) => (
                  <Text
                  style={{
                    fontSize: 18,
                    color: pressed ? '#ffffff' : '#a07e28',
                    fontWeight: 'bold'
                  }}
                  >
                  Entrar
                  </Text>
                )}

              </Pressable>

              <Pressable
                onPress={irparaCadastro}
                style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#e972d1' : '#ffffff6c',
                },
                styles.button_item,
                ]}>
                
                {({ pressed }) => (
                  <Text
                  style={{
                    fontSize: 18,
                    color: pressed ? '#ffffff' : '#a07e28',
                    fontWeight: 'bold'
                  }}
                  >
                  Cadastrar 
                  </Text>
                )}

              </Pressable>

            </View>
            

        </View>
        ) : (
          <View style = {styles.cadastro} >
            
            <View style = {styles.title_container}>
              <Text style = {styles.title}>Cadastro</Text>
            </View>

            <Text style = { styles.text }>Nome Completo</Text>

            <TextInput placeholder='' style = {styles.input} />
            
            <Text style = {styles.text}>CPF</Text>
            
            <TextInput placeholder='' style = {styles.input} />

            <Text style = {styles.text}>Data de Nascimento</Text>
            
            <TextInput placeholder='' style = {styles.input} />

            <Text style = {styles.text}>E-mail </Text>
            
            <TextInput placeholder='' style = {styles.input} />

            <Text style = {styles.text}>Telefone / Whatsapp </Text>
            
            <TextInput placeholder='' style = {styles.input} />

            <View style = {styles.buttons}>

              <Pressable
                onPress={irparaLogin}
                style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#e972d1' : '#ffffff6c',
                },
                styles.button_item,
                ]}>
                
                {({ pressed }) => (
                  <Text
                  style={{
                    fontSize: 18,
                    color: pressed ? '#ffffff' : '#a07e28',
                    fontWeight: 'bold'
                  }}
                  >
                  Voltar
                  </Text>
                )}

              </Pressable>

              <Pressable
              
                style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#e972d1' : '#ffffff6c',
                },
                styles.button_item,
                ]}>
                
                {({ pressed }) => (
                  <Text
                  style={{
                    fontSize: 18,
                    color: pressed ? '#ffffff' : '#a07e28',
                    fontWeight: 'bold'
                  }}
                  >
                  Cadastrar 
                  </Text>
                )}

              </Pressable>

            </View>
            

        </View>
        ) }
      

      <StatusBar style="auto" />
    
    </View>
  );
}