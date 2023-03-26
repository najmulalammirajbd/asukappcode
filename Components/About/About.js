import { View, Text, Linking , Image } from "react-native";
import Navbar from "../Navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Service from '../Service/Service'

export default function About() {
  const navigation = useNavigation();
  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        backgroundColor:'white'
      }}
    >
      <Text
        style={{
          color: 'black',
          fontSize: 12,
          paddingRight: 15,
          paddingLeft: 15,
          textAlign: "center",
          marginTop: 10,
          marginBottom:5
        }}
      >
        আশ শাজারাহ আরবি শেখার একটি অ্যাপ । কোন ভিডিও কোর্সের অ্যাপ নয় । যে কেউ বিভিন্ন লেভেল সম্পন্ন করলে 
        হয়ে উঠবে আরবিতে দক্ষ । আরবিতে সুদক্ষ ও অভিজ্ঞতাসম্পন্ন শিক্ষকদের দ্বারা সম্পাদিত হয়ে থাকে
        আমাদের লেভেলগুলো । যুক্তরাজ্য ও বাংলাদেশ থেকে পরিচালিত হয়ে থাকে উক্ত অ্যাপটি ।
      </Text>
      <Service />
      {/* <View style={{ flexDirection: "row", marginTop: 7, marginBottom: 1 }}>
        <Text
          style={{ color: 'grey', fontSize: 17 }}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/schoolghorappofficial")
          }
        >
          <FontAwesome5 name="facebook-square" size={20}></FontAwesome5>
        </Text>
        <Text
          style={{ color: 'grey', fontSize: 17, marginLeft: 5 }}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/@schoolghorappofficial")
          }
        >
          <FontAwesome5 name="youtube-square" size={20}></FontAwesome5>
        </Text>
      </View> */}
      {/* <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: 5,
          textAlign: "center",
        }}>
        যেকোন তথ্যের জন্য 
        ই-মেইল করুনঃ</Text>
        <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: 1,
          textAlign: "center",
        }}>
        schoolghor.info@gmail.com</Text> */}
      <View style={{flexDirection:'row' , marginTop: 15}}>
      <Text onPress={() => {navigation.navigate('Apprul')}}
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
      >
        অ্যাপ ব্যাবহারের নিয়মাবলি
      </Text>
      <Text onPress={() => {navigation.navigate('Refund')}}
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2 ,
          marginLeft: 10 ,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
      >
        রিফান্ড পলিসি
      </Text>
      <Text onPress={() => {navigation.navigate('Pekege')}}
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2 ,
          marginLeft: 10,
          borderWidth: 0.5, 
          borderColor: '#dddddd' ,
          paddingHorizontal : 10,
          paddingVertical: 5
        }}
      >
        প্যাকেজ
      </Text>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: 5,
          textAlign: "center",
          marginBottom:5
        }}
      >
        © Ash Shajarah
      </Text>
    </View>
    </>
  );
}
