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
          <AntDesign
            name="left"
            size={26}
            color="#6a3383"
           style={{marginBottom: 6 , marginLeft:6  , marginRight:7, paddingRight: 0}}
          />
        </Pressable>
      )}
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
