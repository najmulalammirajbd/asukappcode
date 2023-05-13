import { View, Text, Pressable, Image, Linking } from 'react-native'
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {Card} from 'react-native-shadow-cards';

export default function Artists() {
  const navigation = useNavigation()
  return (
    <View>
      
      <View style={{ flexDirection: 'row' , marginTop: 7 }}>
        <Card style={{
            justifyContent: 'center',
            width:'92%',
            marginLeft:14,
            marginRight:15
          }}>
        <Pressable
        onPress={() => {navigation.navigate('Pekege')}}
          // onPress={() => Linking.openURL('https://bdschoolghor.web.app')}
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
          <Text style={{ color: 'black' , fontSize:13 , fontWeight: 'bold', }}>LEARN ANYTHING ABOUT ISLAM</Text>
          <Text style={{ color: 'black' , fontSize:13 , fontWeight: 'bold', }}>FROM ISLAMIC SCHOLARS</Text>
          <Text style={{ color: '#693384' , fontSize:15 ,  }}>SUBSCRIBE NOW</Text>
        </Pressable>
        </Card>
      </View>
    </View>
  )
}
