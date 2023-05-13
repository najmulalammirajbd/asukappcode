import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Baner from '../Baner/Baner'
import Navbarmain from '../Navbarmain/Navbarmain'
import About from '../About/About'
import Sscrollcard from '../Schoolscroolbar/Sscrollcard'
import Cscrollcard from '../Collagescroolbar/Cscrollcard'

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: 'white' }}>
        <Navbarmain />
        <Baner />
        <Sscrollcard/>
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
