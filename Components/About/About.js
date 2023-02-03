import { View,  Text , Pressable , Image} from 'react-native';
import { MaterialCommunityIcons , Ionicons , FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Artists() {
  const navigation = useNavigation();
    return (
        <View>
        <View style={{flexDirection:'row'}}>
            <Pressable onPress = {() => navigation.navigate('Aboutmain')} style={{alignItems:'center',borderColor:'#1daebb',borderWidth:1,paddingTop:10,paddingBottom:10,width:'100%' , marginBottom:3 , backgroundColor:'#1daebb'  }}><Image style={{width:100,height:40,alignItems:'flex-start',resizeMode:'contain',}} source ={require('../../assets/loco.png')}/><Text style={{color:'white' , fontSize:12 }}>স্কুল ঘর সম্পর্কে ও যোগাযোগ করুন</Text></Pressable>
        </View>
        </View>
    );
}