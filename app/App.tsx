import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_cadastro from './pag/login_cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="login_cadastro" 
          component={Login_cadastro}
          options={{ headerShown: false }} // esconde header padrão
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
