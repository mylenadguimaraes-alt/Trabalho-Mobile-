import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjetoDetalhe from './src/pag/cliente/projeto_detalhe';
import AdminLogin from './src/pag/admin/login/index';
import Dashboard from './src/pag/admin/dashboard/index';
import AgendamentosAdmin from './src/pag/admin/agendamentos';
import Login_cadastro from './src/pag/cliente/login_cadastro/index';
import Home from './src/pag/cliente/home';
import Agendamento from './src/pag/cliente/agendamento';
import MeusAgendamentos from './src/pag/cliente/meus_agendamentos';
import ClientesAdmin from './src/pag/admin/clientes';
import ProjetosAdmin from './src/pag/admin/projetos';
import BannersAdmin from './src/pag/admin/banners';
import HorariosAdmin from './src/pag/admin/horarios';
import Perfil from './src/pag/cliente/perfil';
import ReagendarAgendamento from './src/pag/cliente/reagendar_agendamento';
const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
      >

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login_cadastro}
          options={{
            title: 'Conecte-se'
          }}
        />

        <Stack.Screen
          name="Agendamento"
          component={Agendamento}
          options={{
            title: 'Agendamento'
          }}
        />
        <Stack.Screen
       name="ProjetoDetalhe"
       component={ProjetoDetalhe}
       options={{
      title: 'Projeto'
     }}
    />
    <Stack.Screen
  name="MeusAgendamentos"
  component={MeusAgendamentos}
  options={{
    title: 'Meus Agendamentos'
  }}
/>
<Stack.Screen
  name="ReagendarAgendamento"
  component={ReagendarAgendamento}
  options={{
    title: 'Reagendar Agendamento'
  }}
/>
 <Stack.Screen
  name="AdminLogin"
  component={AdminLogin}
  options={{
    title: 'Administrador'
  }}
/>

<Stack.Screen
  name="Dashboard"
  component={Dashboard}
  options={{
    title: 'Dashboard'
  }}
/>
<Stack.Screen
  name="AgendamentosAdmin"
  component={AgendamentosAdmin}
  options={{
    title: 'Agendamentos'
  }}
/>
<Stack.Screen
  name="ClientesAdmin"
  component={ClientesAdmin}
  options={{
    title: 'Clientes'
  }}
/>
<Stack.Screen
  name="ProjetosAdmin"
  component={ProjetosAdmin}
  options={{
    title: 'Projetos'
  }}
/>
<Stack.Screen
  name="BannersAdmin"
  component={BannersAdmin}
  options={{
    title: 'Banners'
  }}
/>
<Stack.Screen
  name="HorariosAdmin"
  component={HorariosAdmin}
  options={{
    title: 'Horários'
  }}
/>
<Stack.Screen
  name="Perfil"
  component={Perfil}
  options={{
    title: 'Meu Perfil'
  }}
/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}