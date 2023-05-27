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
  import { MaterialIcons } from '@expo/vector-icons';
  
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
                      name="Taharah"
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Eman')
                    }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Iman"
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
                      name="Zakah"
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
              {/* <View style={{ height: 80, marginTop: 10 }}>
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
                      name="Other"
                    />
                  </Pressable>
                </ScrollView>
              </View> */}
              {More && (
                <View>
                  <View>
                  <Text style={{textAlign:'center' , fontSize:14 , fontWeight:'100' , backgroundColor:'#9e6f1a' , color:'white', marginTop:7}}>QURAN BRANCH</Text>
                  <Text style={{textAlign:'center' , fontSize:9 , fontWeight:'500'}}>HOW TO ACCESS THE BRANCH</Text>
                  <MaterialIcons style={{textAlign:'center'}} name="touch-app" size={30} color="#9e6f1a" />
                  <View style={{ height: 80, marginTop: 5 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Pressable
                      // onPress={() => {
                      //   navigation.navigate('Islamicblog')
                      // }}
                    >
                      <Category
                        imageUri={require('../../assets/appicon.png')}
                        name="40 Verse For Kids"
                      />
                    </Pressable>
                    <Pressable
                      // onPress={() => {
                      //   navigation.navigate('Islamicblog')
                      // }}
                    >
                      <Category
                        imageUri={require('../../assets/appicon.png')}
                        name="40 Verse For Woman"
                      />
                    </Pressable>
                  </ScrollView>
                </View>
                <View style={{ height: 80, marginTop: 10 , alignItems:'center' }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Pressable
                    // onPress={() => {
                    //   navigation.navigate('Islamicblog')
                    // }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="Verse For Men"
                    />
                  </Pressable>
                </ScrollView>
              </View>
                </View>
                  <View>
                  <Text style={{textAlign:'center' , fontSize:14 , fontWeight:'100' , backgroundColor:'#9e6f1a' , color:'white', marginTop:7}}>HADITH BRANCH</Text>
                  <Text style={{textAlign:'center' , fontSize:9 , fontWeight:'500'}}>HOW TO ACCESS THE BRANCH</Text>
                  <MaterialIcons style={{textAlign:'center'}} name="touch-app" size={30} color="#9e6f1a" />
                  <View style={{ height: 80, marginTop: 5 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Pressable
                      // onPress={() => {
                      //   navigation.navigate('Islamicblog')
                      // }}
                    >
                      <Category
                        imageUri={require('../../assets/appicon.png')}
                        name="40 Short Hadith For Kids"
                      />
                    </Pressable>
                    <Pressable
                      // onPress={() => {
                      //   navigation.navigate('Islamicblog')
                      // }}
                    >
                      <Category
                        imageUri={require('../../assets/appicon.png')}
                        name="40 Short Hadith For Woman"
                      />
                    </Pressable>
                  </ScrollView>
                </View>
                <View style={{ height: 80, marginTop: 10 , alignItems:'center' }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Pressable
                    // onPress={() => {
                    //   navigation.navigate('Islamicblog')
                    // }}
                  >
                    <Category
                      imageUri={require('../../assets/appicon.png')}
                      name="40 Short Hadith For Men"
                    />
                  </Pressable>
                </ScrollView>
              </View>
                </View>
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
  