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
                                    <Pressable onPress={() => {navigation.navigate('Dhakas')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="আরবি স্পোকেন বেসিক"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Chattograms')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="আরবি স্পোকেন মিডিয়াম ( আসছে )"
                                    />
                                    </Pressable>
                                </ScrollView>
                            </View>
                            <View style={{ height: 130, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Pressable onPress={() => {navigation.navigate('Dhakas')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="আরবি স্পোকেন এডভান্স ( আসছে )"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Chattograms')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="নহু সরফ ( আসছে )"
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