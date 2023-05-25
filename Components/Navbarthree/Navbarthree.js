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
            color="grey"
           style={{flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center' , marginLeft:6  , marginRight:7, paddingRight: 5 , marginRight:7,
            borderRightColor:'#dddddd',
            borderRightWidth : 0.5 ,
            paddingRight: 5 ,}}
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
    marginTop: 0,
    backgroundColor: 'white',
  },
  logo: {
    width: 110,
    height: 80,
    alignItems: 'flex-start',
    resizeMode: 'contain',
  },
})
