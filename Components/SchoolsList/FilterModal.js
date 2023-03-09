import {
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

export default function FilterModal({
  IsVisible,
  setIsVisible,
  value,
  setValue,
}) {
  return (
    <Modal visible={IsVisible} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* close button */}
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderTitle}>খুঁজুন নাম অথবা ঠিকানা দিয়ে</Text>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false)
              }}
              style={{
                alignSelf: 'flex-end',
              }}
            >
              <AntDesign name="closecircle" size={24} color="#dddddd" />
            </TouchableOpacity>
          </View>
          {/* list */}
          <View style={styles.cardBody}>
            <TouchableOpacity
              onPress={() => {
                setValue('ina')
                setIsVisible(false)
              }}
              disabled={value === 'ina' ? true : false}
              style={[
                styles.filterButton,
                value === 'ina' && {
                  opacity: 0.5,
                },
              ]}
            >
              <Text style={styles.filterButtonText}>নাম</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setValue('iad')
                setIsVisible(false)
              }}
              disabled={value === 'iad' ? true : false}
              style={[
                styles.filterButton,
                value === 'iad' && {
                  opacity: 0.5,
                },
              ]}
            >
              <Text style={styles.filterButtonText}>ঠিকানা</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000005f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    width: rw(90),
    height: rh(20),
    borderRadius: 0,
  },
  cardHeaderTitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBody: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#6c6c6c',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: rw(35),
    alignItems: 'center',
    borderRadius: 3,
  },
  filterButtonText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 18,
  },
})
