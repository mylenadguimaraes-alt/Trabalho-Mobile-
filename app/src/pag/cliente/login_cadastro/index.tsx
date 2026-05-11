import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Alert, Modal, Pressable, ScrollView, Image, TouchableOpacity} from 'react-native';
import  styles  from './style';
import { useState } from 'react';

import { CpfExistente, EmailExistente, cadastrar, VerificarServidor} from '../../../global/Validacoes/login_cadastro';

export default function Login_cadastro() {

    //IR PARA CADASTRO E IR PARA LOGIN
    const [login, setlogin] = useState<boolean>(true);
    
    //LOGIN
    const [emaillogin, setemaillogin] = useState<string>('');

    const [senhaLogin, setsenhalogin] = useState<string>('');

    const [buttonsenhalogin, setbuttonsenhalogin] = useState<boolean>(true);

    //CADASTRO

    const [nome, setnome] = useState<string>('');

    const [cpf, setcpf] = useState<string>('');

    const [dataNascimento, setDataNascimento] = useState<string>('');

    const [emailcadastro, setemailcadastro] = useState<string>('');

    const [telefone, settelefone] = useState<string>('');

    const [senhacad, setsenhacad] = useState<string>('')

    const [senhacadCon, setsenhacadCon] = useState<string>('');

    const [buttonsenhacad, setbuttonsenhacad] = useState<boolean>(true);

    const [buttonsenhacadcon, setbuttonsenhacadcon] = useState<boolean>(true);

    //Limpar dados 
    const LimparDadosCad = () =>{
      setnome('');
      setcpf('');
      setDataNascimento('');
      settelefone('');
      setemailcadastro('');
      setsenhacad('');
      setsenhacadCon('');
      setbuttonsenhacad(true);
      setbuttonsenhacadcon(true);
    };
    
    //LOGIN

    const handleLogin = async () =>
    {
      const online = await VerificarServidor();

      if (!online) {
        return;
      }

    

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
   
    };

    //Cadastro

    const handleCadastro = async () =>{
      
      const online = await VerificarServidor();

      if (!online) {
        return;
      }

      if(!nome || !cpf || !dataNascimento || !emailcadastro || !telefone || !senhacad || !senhacadCon){
        Alert.alert(
          'Campos obrigatórios',
          'Por favor, preencha todos os campos para o cadastro',
          [
            {
              text: 'ok',
              onPress: () => console.log('Usuário fechou o alerta'),
              
            },
          ],
          { cancelable: true }

        );
        return;
      }

      if (cpf.length != 14){
        Alert.alert(
          "CPF inválido",
          "Por favor preencha o CPF corretamente!",
          [
            {
              text: "ok",
              onPress: () => console.log('Usuário fechou o alerta'),

            },
          ],
          {cancelable: true}

        )
        return;
      }

      try{

        if (await CpfExistente('cliente',cpf)){
          Alert.alert(
            "CPF inválido",
            "CPF já cadastrado!",
            [
              {
                text: "ok",
                onPress: () => console.log('Usuário fechou o alerta'),

              },
            ],
            {cancelable: true}

          );
          return;
        }

      }catch{
        Alert.alert(
          "Erro!",
          "Erro ao verificar CPF!",
          [
            {
              text: "ok",
              onPress: () => console.log('Usuário fechou o alerta'),
            },
          ],
          {cancelable: true}
        );
        return;

      }
      

      
      if (dataNascimento.length !=  10){
        Alert.alert(
          "Data de Nascimento inválida",
          "Por favor preencha a Data de Nascimento corretamente!",
          [
            {
              text: 'ok',
              onPress: () => console.log('Usuário fechou o alerta'),
            },
          ],
          {cancelable: true}
        )
        return;
      }




      try{
        if(await EmailExistente('cliente',emailcadastro)){
          Alert.alert(
            "E-mail inválido",
            "E-mail já cadastrado!",
            [
              {
                text: "ok",
                onPress: () => console.log('Usuário fechou o alerta'),

              },
            ],
            {cancelable: true}

          );
          return;
        }
      }catch{
        Alert.alert(
          "Erro!",
          "Erro ao verificar E-mail!",
          [
            {
              text: "ok",
              onPress: () => console.log('Usuário fechou o alerta'),
            },
          ],
          {cancelable: true}
        );
        return;
      }


      if(telefone.length != 15){
        Alert.alert(
          "Telefone inválido",
          "Por favor preencha o campo Telefone corretamente!",
          [
            {
              text: 'ok',
              onPress: () => console.log('Usuário fechou o alerta'),
            },
          ],
          {cancelable: true}
        )
        return;
      }

      if (senhacad != senhacadCon){
        Alert.alert(
          "Erro",
          "As senhas não coincidem!",
          [
            {
              text: 'ok',
              onPress: () => console.log('Usuário fechou o alerta'),
            },
          ],
          {cancelable: true}
        )
        return;
      }

      

      try{
        if(await cadastrar('cliente', nome, cpf, dataNascimento, emailcadastro, telefone, senhacad)){
          Alert.alert(
            "Cadastro concluído",
            "Os dados foram cadastrados, volte ao login para entrar no app!",
            [
              {
                text: "ok",
                onPress: () => console.log('Cadastro concluído'),

              },
            ],
            {cancelable: true}

          );
          
        }
      }catch(error){
        Alert.alert(
          "Erro!",
          "Erro ao cadastrar",
          [
            {
              text: "ok",
              onPress: () => console.log('Usuário fechou o alerta'),
            },
          ],
          {cancelable: true}
        );
        return;
      }
      LimparDadosCad();
    
    };

    const handleCpf = (text: string) => {
      let numeros = text.replace(/\D/g, '');

      numeros = numeros.slice(0, 11);

      let formatado = numeros
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      setcpf(formatado);

    };

    const handleTelefone = (text: string) => {
      let numeros = text.replace(/\D/g, '');

  
      numeros = numeros.slice(0, 11);

      let formatado = numeros;

      if (numeros.length > 0) {
        formatado = numeros.replace(/^(\d{2})/, '($1)');
      }

      if (numeros.length > 2) {
        formatado = formatado.replace(/^(\(\d{2}\))(\d)/, '$1 $2');
      }

      if (numeros.length > 7) {
        formatado = formatado.replace(/(\d{5})(\d)/, '$1-$2');
      }

      settelefone(formatado);
    };

    const handleData = (text: string) => {
      const numeros = text.replace(/\D/g, '').slice(0, 8);

      const dia = numeros.slice(0, 2);
      const mes = numeros.slice(2, 4);
      const ano = numeros.slice(4, 8);

      let resultado = dia;

      if (mes) resultado += '/' + mes;
      if (ano) resultado += '/' + ano;

      setDataNascimento(resultado);
    };
    

  return (

    <View style = {styles.container}>
        
        {login ? (
          //-------LOGIN----------
          <View style = {styles.login} >
            
            <View style = {styles.title_container}>
              <Text style = {styles.title}>Login</Text>
            </View>

            <Text style = { styles.text }>E-mail</Text>

            <TextInput value={emaillogin || ''} onChangeText={setemaillogin} placeholder='Exemplo@gmail.com' style = {styles.input} />
            
            <Text style = {styles.text}>Senha</Text>
            
            <View style = {styles.senha}>

              <TextInput value={senhaLogin || ''} onChangeText={setsenhalogin} 
              secureTextEntry = {buttonsenhalogin} style = {styles.input_senha}/>

              <Pressable onPress={() => {setbuttonsenhalogin(!buttonsenhalogin)}}>
                <View style={{ marginLeft: 10 }}>
                  {buttonsenhalogin ? (
                    <Image style = {styles.senha_imagem} source={require('../../img/olhofechado.png')} />
                  ) : (
                    <Image style = {styles.senha_imagem} source={require('../../img/olhoaberto.png')} />
                )}
                </View>
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
                onPress={() => setlogin(!login)}
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
          //----CADASTRO----
          <View style = {styles.cadastro} >
            
            <View style = {styles.title_container}>
              <Text style = {styles.title}>Cadastro</Text>
            </View>

            <ScrollView contentContainerStyle = {styles.cadastro_scroll}
              horizontal={false} showsHorizontalScrollIndicator={false}>
              
              <View style ={styles.dentro_cad_scroll}>
            
                <Text style = { styles.text }>Nome Completo</Text>

                <TextInput value={nome || ''} onChangeText={setnome} placeholder='' style = {styles.input} />
            
                <Text style = {styles.text}>CPF</Text>
            
                <TextInput placeholder=''  style = {styles.input} value={cpf || ''} maxLength={14} onChangeText={handleCpf} keyboardType='numeric' />

                <Text style = {styles.text}>Data de Nascimento</Text>
            
                <TextInput placeholder='' value={dataNascimento || ''} onChangeText={handleData} keyboardType='numeric' style = {styles.input} />

                <Text style = {styles.text}>E-mail </Text>
            
                <TextInput placeholder='' value={emailcadastro || ''} onChangeText={setemailcadastro} style = {styles.input} />

                <Text style = {styles.text}>Telefone / Whatsapp </Text>
            
                <TextInput placeholder='' value={telefone || ''} onChangeText={handleTelefone} keyboardType='numeric' maxLength={15} style = {styles.input} />

                <Text style = {styles.text}>Senha </Text>

                <View style = {styles.senha}>

                  <TextInput value={senhacad || ''} onChangeText={setsenhacad} 
                    secureTextEntry = {buttonsenhacad} style = {styles.input_senha}/>

                  <Pressable onPress={() => {setbuttonsenhacad(!buttonsenhacad)}}>
                    <View style={{ marginLeft: 10 }}>
                    {buttonsenhacad ? (
                      <Image style = {styles.senha_imagem} source={require('../../img/olhofechado.png')} />
                    ) : (
                      <Image style = {styles.senha_imagem} source={require('../../img/olhoaberto.png')} />
                    )}
                    </View>
                  </Pressable>
            
                </View>

                <Text style = {styles.text}>Confirmar Senha </Text>

                <View style = {styles.senha}>

                  <TextInput value={senhacadCon || ''} onChangeText={setsenhacadCon} 
                    secureTextEntry = {buttonsenhacadcon} style = {styles.input_senha}/>

                  <Pressable onPress={() => {setbuttonsenhacadcon(!buttonsenhacadcon)}}>
                    <View style={{ marginLeft: 10 }}>
                    {buttonsenhacadcon ? (
                      <Image style = {styles.senha_imagem} source={require('../../img/olhofechado.png')} />
                    ) : (
                      <Image style = {styles.senha_imagem} source={require('../../img/olhoaberto.png')} />
                    )}
                    </View>
                  </Pressable>
            
                </View>

                <View style = {styles.buttons}>

                  <Pressable
                    onPress={() => setlogin(!login)}
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
                    onPress={handleCadastro}
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
            </ScrollView>
        </View>
        ) }

        
        
      

      <StatusBar style="auto" />
    
    </View>
  );
}