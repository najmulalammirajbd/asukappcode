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
        স্কুল ঘর বাংলাদেশের শিক্ষা-প্রতিষ্ঠানের তথ্য সংক্রান্ত অ্যাপ । যেখানে আপনি ঘরে বসে শিক্ষা-প্রতিষ্ঠানের তথ্য ,
        যেমন : ভর্তির তথ্য , মাসিক ফি , সেশন ফি , প্রতিষ্ঠানের অবস্থান ইত্যাদি জানতে পারবেন । 
      </Text>
      <Service />
      <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: 5,
          textAlign: "center",
        }}
      >
        স্কুল ঘরকে অনুসরণ করুন
      </Text>
      <View style={{ flexDirection: "row", marginTop: 7, marginBottom: 1 }}>
        <Text
          style={{ color: '#1daebb', fontSize: 17 }}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/bdschoolghorofficial")
          }
        >
          <FontAwesome5 name="facebook-square" size={20}></FontAwesome5>
        </Text>
        <Text
          style={{ color: '#1daebb', fontSize: 17, marginLeft: 5 }}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/@bdschoolghorofficial")
          }
        >
          <FontAwesome5 name="youtube-square" size={20}></FontAwesome5>
        </Text>
      </View>
      <Text
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
        schoolghor.info@gmail.com</Text>
      <Text
        style={{
          color: 'black',
          fontSize: 9,
          marginTop: -0,
          textAlign: "center",
          marginBottom:2
        }}
      >
        ©SCHOOL GHOR
      </Text>
      
    </View>
    </>
  );
}
