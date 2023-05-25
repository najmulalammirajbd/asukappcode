import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
} from 'react-native-responsive-dimensions'
export default function SchoolDetailsModal({ IsVisible, setIsVisible, data }) {
  console.log(data)
  return (
    <Modal visible={IsVisible} animationType={'slide'} transparent={true}>
      <View style={styles.container}>
        {/* close button */}
        <TouchableOpacity
          onPress={() => {
            setIsVisible(false)
          }}
          style={{
            alignSelf: 'flex-end',
          }}
        >
          <AntDesign name="closecircle" size={24} color="grey" />
        </TouchableOpacity>
        {/* list */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('../../assets/logo.png')}
            style={{
              height: 40,
              resizeMode: 'contain',
              width: rw(90),
            }}
          />
          {/* প্রতিষ্ঠানের পূর্ণ নাম */}
          {data?.ina && (
            <View style={styles.listText}>
              <Text style={styles.title}>Subject :</Text>
              <Text style={styles.text}>{data?.ina}</Text>
            </View>
          )}
          {/* --- */}
          {/* 02 */}
          {data?.iad && (
            <View style={styles.listText}>
              <Text style={styles.title}>No :</Text>
              <Text style={styles.text}>{data?.iad}</Text>
            </View>
          )}
          {/* --- */}
          {/* 01 */}
          {data?.iq && (
            <View style={styles.listText}>
              <Text style={styles.title}>Lesson :</Text>
              <Text style={styles.text}>{data?.iq}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 0,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  listText: {
    paddingVertical: 5,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    color: '#000000',
    fontSize: 13,
  },
  text: {
    color: '#262323cf',
    fontSize: 16,
  },
})
