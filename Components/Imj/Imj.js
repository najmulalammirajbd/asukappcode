import { View, Text, Linking , Image } from "react-native";
import Navbar from "../Navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Service from '../Service/Service'

export default function About() {
  const navigation = useNavigation();
  return (
    <>
    <View
      style={{
        flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent:'center',
    
      }}
    >
      <Image style={{width:150, height:200 , resizeMode: 'contain', alignItems:'center'}} source={require('../../assets/appicon.png')}/>
      
      
    </View>
    </>
  );
}
