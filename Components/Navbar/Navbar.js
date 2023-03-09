import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, View, Image, Pressable } from 'react-native'
import { Card } from 'react-native-shadow-cards'

export default function Header({ backBtn }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Card style={{width:33 ,  marginLeft:10 , height:56 ,  shadowColor:0  , borderWidth: 0.5, borderColor: '#dddddd' ,  flexDirection: 'row',alignItems: 'center', justifyContent : 'center'  }}>
          <AntDesign
            name="left"
            size={20}
            color="#dddddd"
          />
          </Card>
        </Pressable>
      )}
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  logo: {
    width: 110,
    height: 80,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },
})
