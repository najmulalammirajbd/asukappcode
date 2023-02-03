import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Components/Home/Home'
import Schoolmain from './Components/Schoolmain/Schoolmain'
import Collagemain from './Components/Collagemain/Collagemain'
import Aboutmain from './Components/Aboutmain/Aboutmain'
import Contact from './Components/Contact/Contact'
import Dhakas from './Components/School/Dhakas'
import Dhakac from './Components/Collage/Dhakac'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Schoolmain" component={Schoolmain} />
          <Stack.Screen name="Collagemain" component={Collagemain} />
          <Stack.Screen name="Aboutmain" component={Aboutmain} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Dhakas" component={Dhakas} />
          <Stack.Screen name="Dhakac" component={Dhakac} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor="#ffffff" />
    </>
  )
}
