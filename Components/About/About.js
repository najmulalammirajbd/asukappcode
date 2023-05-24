import { View, Text, Linking , Image } from "react-native";
import Navbar from "../Navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import Service from '../Service/Service'

export default function About() {
  const navigation = useNavigation();
  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        backgroundColor:'white'
      }}
    >
      <Text
        style={{
          color: 'black',
          fontSize: 12,
          paddingRight: 15,
          paddingLeft: 15,
          textAlign: "center",
          marginTop: 10,
          marginBottom:5
        }}
      >
        When someone reverts to islam or claims himself as a muslim, he should know all about islam. The characteristic of a muslim is to know all aspects of islam and act upon it.
Ash Shajarah is an islamic app. Where you can know about all islamic matters. Expert islamic scholars carry out all the topics of the app through deep research and analysis.
      </Text>
      <Service />
      {/* <View style={{ flexDirection: "row", marginTop: 7, marginBottom: 1 }}>
        <Text
          style={{ color: 'grey', fontSize: 17 }}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/schoolghorappofficial")
          }
        >
          <FontAwesome5 name="facebook-square" size={20}></FontAwesome5>
        </Text>
        <Text
          style={{ color: 'grey', fontSize: 17, marginLeft: 5 }}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/@schoolghorappofficial")
          }
        >
          <FontAwesome5 name="youtube-square" size={20}></FontAwesome5>
        </Text>
      </View> */}
      {/* <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: 5,
          textAlign: "center",
        }}>
        যেকোন তথ্যের জন্য 
        ই-মেইল করুনঃ</Text>
        <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: 1,
          textAlign: "center",
        }}>
        schoolghor.info@gmail.com</Text> */}
        <Text style={{ marginTop: 5 , fontSize:10}}>FOLLOW US</Text>
        <View style={{flexDirection:'row' , marginTop: 3}}>
          
      <Text onPress={() => Linking.openURL('https://www.facebook.com/ashshajarahuk')}
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
      >
        <FontAwesome name="facebook-official" size={15} color="#818c96" />
      </Text>
      {/* <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2 ,
          marginLeft: 10,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
        onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ashshajarah')}
      >
        <FontAwesome name="instagram" size={15} color="#818c96" />
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2 ,
          marginLeft: 10,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
        onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ashshajarah')}
      >
        <FontAwesome name="twitter" size={15} color="#818c96" />
      </Text> */}
      <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2 ,
          marginLeft: 10,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
        onPress={() => Linking.openURL('https://www.youtube.com/channel/UCbWbkjASouIX0ytOZKgJRzQ')}
      >
        <FontAwesome name="youtube" size={15} color="#818c96" />
      </Text>
      </View>
      <View style={{flexDirection:'row' , marginTop: 5}}>
      <Text onPress={() => {navigation.navigate('Apprul')}}
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
      >
        TERMS OF USE OF THE APP
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2 ,
          marginLeft: 10,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
        onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ashshajarah')}
      >
        RATE THE APP
      </Text>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: 0,
          textAlign: "center",
          marginBottom:5
        }}
      >
        © ASH SHAJARAH
      </Text>
    </View>
    </>
  );
}
