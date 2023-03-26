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
      <Text style={{ color: 'black' , fontSize:9 , textAlign:'center' ,  marginBottom: 10 , fontWeight:'bold' }}>| সম্পাদনায় |</Text>
      
      <View style={{ flexDirection: 'row' }}>
        <Card style={{
            justifyContent: 'center',
            width:'92%',
            marginLeft:14,
            marginRight:15
          }}>
        <Pressable
          // onPress={() => Linking.openURL('https://bdschoolghor.web.app')}
          style={{
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            width: '100%',
            marginBottom: 3,
          }}
        >
          <Image
            style={{
              width: 100,
              height: 52,
              alignItems: 'flex-start',
              resizeMode: 'contain',
            }}
            source={require('../../assets/maruf.png')}
          />
          <Text style={{ color: 'black' , fontSize:9 , fontWeight: 'bold', }}>মাওলানা মাহমুদুল হাসান মারুফ</Text>
          <Text style={{ color: 'black' , fontSize:9 ,  }}>কামিল ( তাফসির )</Text>
          <Text style={{ color: 'black' , fontSize:9 ,  }}>দারুন্নাজাত সিদ্দীকিয়া কামিল মাদরাসা , ঢাকা ।</Text>
          <Text style={{ color: 'black' , fontSize:9 ,  }}>ডিপ্লোমা ইন এরাবিক</Text>
          <Text style={{ color: 'black' , fontSize:7 ,  }}>( আইএমএল ) শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় , সিলেট ।</Text>
        </Pressable>
        </Card>
      </View>
    </View>
  )
}
