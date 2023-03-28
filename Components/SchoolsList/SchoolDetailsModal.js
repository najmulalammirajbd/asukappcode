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
            source={require('../../assets/loco.png')}
            style={{
              height: 40,
              resizeMode: 'contain',
              width: rw(90),
            }}
          />
          {/* প্রতিষ্ঠানের পূর্ণ নাম */}
          {data?.ina && (
            <View style={styles.listText}>
              <Text style={styles.title}>বিষয়ঃ</Text>
              <Text style={styles.text}>{data?.ina}</Text>
            </View>
          )}
          {/* --- */}
          {/* 02 */}
          {data?.iad && (
            <View style={styles.listText}>
              <Text style={styles.title}>লেভেল নংঃ</Text>
              <Text style={styles.text}>{data?.iad}</Text>
            </View>
          )}
          {/* --- */}
          {/* 01 */}
          {data?.iq && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.iq}</Text>
            </View>
          )}
          {/* --- */}
          {/* 01 */}
          {data?.iv && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.iv}</Text>
            </View>
          )}
          {/* --- */}
          {/* 01 */}
          {data?.ib && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.ib}</Text>
            </View>
          )}
          {/* --- */}
          {/* প্রতিষ্ঠানের ওয়েব-সাইট */}
          {data?.iweb && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.iweb}</Text>
            </View>
          )}
          {/* --- */}
          {/*  প্রতিষ্ঠানের ইমেইল */}
          {data?.imail && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.imail}</Text>
            </View>
          )}
          {/* --- */}
          {/*  প্রতিষ্ঠান প্রধানের নাম  */}
          {data?.iha && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.iha}</Text>
            </View>
          )}
          {/* --- */}
          {/*  প্রতিষ্ঠান প্রধানের মোবাইল নাম্বার  */}
          {data?.iham && (
            <View style={styles.listText}>
              <Text style={styles.title}>
              পাঠঃ
              </Text>
              <Text style={styles.text}>{data?.iham}</Text>
            </View>
          )}
          {/* --- */}
          {/*  প্রতিষ্ঠানের অফিসিয়াল মোবাইল নাম্বার  */}
          {data?.im && (
            <View style={styles.listText}>
              <Text style={styles.title}>
              পাঠঃ
              </Text>
              <Text style={styles.text}>{data?.im}</Text>
            </View>
          )}
          {/* --- */}
          {/*   আবাসনঃ  আবাসিক/অনাবাসিক  */}
          {data?.ira && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.ira}</Text>
            </View>
          )}
          {/* --- */}
          {/*  শ্রেণী সমূহের নাম  */}
          {data?.icla && (
            <View style={styles.listText}>
              <Text style={styles.title}> পাঠঃ</Text>
              <Text style={styles.text}>{data?.icla}</Text>
            </View>
          )}
          {/* --- */}
          {/*  বৈশিষ্ট্য  */}
          {data?.icha && (
            <View style={styles.listText}>
              <Text style={styles.title}> পাঠঃ</Text>
              <Text style={styles.text}>{data?.icha}</Text>
            </View>
          )}
          {/* --- */}
          {/*  শ্রেণীসমূহের ভর্তি ফি */}
          {data?.iaf && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.iaf}</Text>
            </View>
          )}
          {/* --- */}
          {/*  শ্রেণীসমূহের মাসিক ফি  */}
          {data?.imf && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.imf}</Text>
            </View>
          )}
          {/* --- */}
          {/*  শ্রেণীসমূহের সেশন ফি  */}
          {data?.isaf && (
            <View style={styles.listText}>
              <Text style={styles.title}>পাঠঃ</Text>
              <Text style={styles.text}>{data?.isaf}</Text>
            </View>
          )}
          {/* --- */}
          {/*  হোস্টেল ফি ( যদি থাকে )  */}
          {data?.ihf && (
            <View style={styles.listText}>
              <Text style={styles.title}> পাঠঃ</Text>
              <Text style={styles.text}>{data?.ihf}</Text>
            </View>
          )}
          {/* --- */}
          {/*  শ্রেণীসমূহের আসন সংখ্যা  */}
          {data?.icsn && (
            <View style={styles.listText}>
              <Text style={styles.title}> শব্দার্থঃ</Text>
              <Text style={styles.text}>{data?.icsn}</Text>
            </View>
          )}
          {/* --- */}
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
