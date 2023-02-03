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
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 5 , paddingBottom:5 }}>
                            

                            <View style={{ height: 130, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Pressable onPress={() => {navigation.navigate('Dhakas')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="ঢাকার স্কুল"
                                    />
                                    </Pressable>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="চট্রগ্রামের স্কুল"
                                    />
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="সিলেটের স্কুল"
                                    />
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="খুলনার স্কুল"
                                    />
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="বরিশালের স্কুল"
                                    />
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="রাজশাহীর স্কুল"
                                    />
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="রংপুরের স্কুল"
                                    />
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="ময়মনসিংহের স্কুল"
                                    />
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