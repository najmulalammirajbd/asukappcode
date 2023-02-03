import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Navbar from '../Navbar/Navbar'
import Baner from '../Baner/Baner'

export default function Artists() {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <Navbar backBtn={true} />
      <Baner />
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            onPress={() => {
              navigation.navigate('Dhakas')
            }}
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>ঢাকার স্কুল</Text>
          </Pressable>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 2,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>চট্রগ্রামের স্কুল</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>সিলেটের স্কুল</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 2,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>খুলনার স্কুল</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>বরিশালের স্কুল</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 2,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>রাজশাহীর স্কুল</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>রংপুরের স্কুল</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 2,
              width: '50%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>ময়মনসিংহের স্কুল</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#1daebb',
              borderWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              width: '100%',
              marginBottom: 3,
              backgroundColor: '#1daebb',
            }}
          >
            <Image
              style={{
                width: 100,
                height: 40,
                alignItems: 'flex-start',
                resizeMode: 'contain',
              }}
              source={require('../../assets/loco.png')}
            />
            <Text style={{ color: 'white' }}>
              স্কুল ঘর । স্কুল কলেজ খোঁজার সহজ মাধ্যম
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
