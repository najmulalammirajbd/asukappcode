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
import Category from './Schoolscroolbar'

const { height, width } = Dimensions.get('window')

export default function Sscrollcard() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 5 , paddingBottom:5 , alignItems:'center' }}>
                            

                            <View style={{ height: 130, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Pressable onPress={() => {navigation.navigate('Eman')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Eman"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Salah')}} >
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Salah"
                                    />
                                    </Pressable>
                                </ScrollView>
                            </View>
                            <View style={{ height: 130, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Pressable onPress={() => {navigation.navigate('Zakat')}} >
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Zakat"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Sawm')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Sawm"
                                    />
                                    </Pressable>
                                    
                                </ScrollView>
                            </View>
                            <View style={{ height: 130, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Pressable onPress={() => {navigation.navigate('Hajj')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Hajj"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Islamicblog')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="Islamic Blog"
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