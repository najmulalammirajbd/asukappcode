import { View, Text, Linking , Image , Pressable } from "react-native";
import Navbar from "../Navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Service from '../Service/Service'
import {Card} from 'react-native-shadow-cards';

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
          paddingRight: 10,
          paddingLeft: 10,
          textAlign: "center",
          marginTop: 10,
          marginBottom:0
        }}
      >
        Ash Shajarah app works to inculcate Islamic values and inform about Islamic matters. This app requires a lot of money to run. However, we do not accept donations. We want to make money through the service and use that money to move this app forward. Our experienced Islamic scholars are here to answer any questions you may have about Islam. Subscribe for just £50 for a lifetime and ask any questions you may have. The money from this app will be used to spread Islam worldwide. Ash Shajarah is working on big plans ahead.

      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 12,
          paddingRight: 10,
          paddingLeft: 10,
          textAlign: "center",
          marginTop: 5,
          marginBottom:0 ,
          fontWeight: 'bold',
        }}
      >
        After subscribing you will be given a WhatsApp number. You have to text any question related to Islam on that WhatsApp number . An expert Islamic scholar will answer you within 24 to 72 hours.

      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 12,
          paddingRight: 10,
          paddingLeft: 10,
          textAlign: "center",
          marginTop: 3,
          marginBottom:5 ,
          fontWeight: 'bold',
        }}
      >
        For more information email : ashshajarahuk.info@gmail.com

      </Text>
      <Card style={{
            justifyContent: 'center',
            width:'50%',
            marginLeft:14,
            marginRight:15
          }}>
        <Pressable
        onPress={() => {navigation.navigate('Pekege')}}
          style={{
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            width: '100%',
            marginBottom: 3,
          }}
        >
          {/* <Image
            style={{
              width: 100,
              height: 52,
              alignItems: 'flex-start',
              resizeMode: 'contain',
            }}
            source={require('../../assets/maruf.png')}
          /> */}
          <Text onPress={() => Linking.openURL('https://buy.stripe.com/00gbKK3tD2km5ig4gn')} style={{ color: '#693384' , fontSize:15 ,   }}>SUBSCRIBE NOW</Text>
        </Pressable>
        </Card>
      <Navbar backBtn={true}/>
    </View>
    </>
  );
}
