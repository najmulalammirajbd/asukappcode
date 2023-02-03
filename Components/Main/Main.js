import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Baner from '../Baner/Baner'
import Navbarmain from '../Navbarmain/Navbarmain'
import Service from '../Service/Service'
import Topschool from '../Topschool/Topschool'
import Topcollage from '../Topcollage/Topcollage'
import Aboutmain from '../Aboutmain/Aboutmain'
import Sscrollcard from '../Schoolscroolbar/Sscrollcard'
import Cscrollcard from '../Collagescroolbar/Cscrollcard'

export default function App() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Navbarmain />
        <Baner />
        <Sscrollcard/>
        <Cscrollcard/>
        <Aboutmain/>
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
