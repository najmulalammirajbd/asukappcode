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
    Pressable
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './Collagescroolbar'

const { height, width } = Dimensions.get('window')

export default function Cscrollcard() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{textAlign:'center' , fontSize:10 , marginTop:5 , marginBottom:5 , fontWeight:'bold'}}>COURSE | COMING SOON</Text>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 5 , paddingBottom:5 }}>
                            

                            <View style={{ height: 100, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Pressable >
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Learn Quran in 24 hours"
                                    />
                                    </Pressable>
                                    <Pressable >
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Teaching Salah"
                                    />
                                    </Pressable>
                                    <Pressable >
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Spoken Arabic"
                                    />
                                    </Pressable>
                                </ScrollView>
                            </View>
                            
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
        justifyContent: 'center'
    }
});