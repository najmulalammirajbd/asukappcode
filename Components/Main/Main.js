import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Baner from '../Baner/Baner'
import Navbarmain from '../Navbartwo/Navbartwo'
import About from '../About/About'
import Sscrollcard from '../Schoolscroolbar/Sscrollcard'
import Cscrollcard from '../Collagescroolbar/Cscrollcard'

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: 'white' }}>
        <Navbarmain />
        {/* <Baner /> */}
        <Sscrollcard/>
        <Cscrollcard/>
        <About/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
