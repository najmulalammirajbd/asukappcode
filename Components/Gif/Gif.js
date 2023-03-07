import { View, Text, Linking , Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Gif() {
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
