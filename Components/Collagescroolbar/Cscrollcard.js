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
            marginLeft:15,
            marginRight:15 ,
            marginBottom:0 ,
            shadowColor: 0,
            borderWidth: 0.5, 
            borderColor: '#dddddd' ,
            borderRadius: 3
          }}>
        <Pressable
        onPress={() => {navigation.navigate('Quran')}}
        // onPress={() => {navigation.navigate('Pekege')}}
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
          <Text style={{ color: 'black' , fontSize:13  }}>COURSE</Text>
          <Image style={{width:'50%' , height:70 , resizeMode:'contain'}} source = {require('../../assets/appicon.png')} />
          <Text style={{ color: 'black' , fontSize:15 , fontWeight: '200', }}>LEARN <Text style={{ color: 'black' , fontSize:15 , fontWeight: '700',}}>QURAN</Text> IN 24 HOURS</Text>
          <Text style={{marginTop:5,backgroundColor:'#9e6f1a' , width:'90%' , textAlign:'center', paddingTop:10 , paddingBottom: 10 , borderRadius:500}}><Text style={{ color: 'white' , fontSize:13 ,fontWeight: '100' , }}>ENROLL NOW</Text></Text>
        </Pressable>
        </Card>
      </View>
    </View>
  )
}
