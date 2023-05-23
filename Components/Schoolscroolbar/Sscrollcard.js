import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Pressable,
    TouchableOpacity,
  } from 'react-native'
  import { useNavigation } from '@react-navigation/native'
  import Icon from 'react-native-vector-icons/Ionicons'
  import Category from './Schoolscroolbar'
  import React, { useState } from 'react'
  
  const { height, width } = Dimensions.get('window')
  
  export default function Sscrollcard() {
    const navigation = useNavigation()
    const [More, setMore] = useState(false)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop: 5,
                paddingBottom: 5,
                alignItems: 'center',
              }}
            >
              <View style={{ height: 80, marginTop: 0 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Taharat')
                    }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Taharat"
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Eman')
                    }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Eman"
                    />
                  </Pressable>
                </ScrollView>
              </View>
              <View style={{ height: 80, marginTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Salah')
                    }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Salah"
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Zakat')
                    }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Zakat"
                    />
                  </Pressable>
                </ScrollView>
              </View>
              <View style={{ height: 80, marginTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Sawm')
                    }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Sawm"
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Hajj')
                    }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Hajj"
                    />
                  </Pressable>
                </ScrollView>
              </View>
              {More && (
                <View style={{ height: 80, marginTop: 10 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Pressable
                      onPress={() => {
                        navigation.navigate('Islamicblog')
                      }}
                    >
                      <Category
                        imageUri={require('../../assets/appicon.png')}
                        name="Islamic Blog"
                      />
                    </Pressable>
                  </ScrollView>
                </View>
              )}
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  paddingVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                  paddingHorizontal:10,
                  marginTop:10 ,
                  borderWidth: 0.5, 
                  borderColor: '#dddddd'
                }}
                onPress={() => {
                  setMore((prv) => !prv)
                }}
              >
                <Text style={{
                  color:"black"
                }} >{More ? 'CLOSE' : 'SEE MORE'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  