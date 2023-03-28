import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, View, Image, Pressable } from 'react-native'

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
          <AntDesign
            name="left"
            size={17}
            color="#ff5300"
           style={{marginBottom: 6 , marginLeft:6 }}
          />
        </Pressable>
      )}
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: 'white',
  },
  logo: {
    width: 110,
    height: 40,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },
})
