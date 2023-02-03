import { View, Text, Linking } from "react-native";
import Navbar from "../Navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function About() {
  const navigation = useNavigation();
  return (
    <>
    <Navbar backBtn={true} />
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
          color: '#1daebb',
          fontSize: 12,
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
            Linking.openURL("https://www.facebook.com/islavoofficial")
          }
        >
          <FontAwesome5 name="facebook-square" size={20}></FontAwesome5>
        </Text>
        <Text
          style={{ color: '#1daebb', fontSize: 17, marginLeft: 5 }}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/@schoolghorofficial")
          }
        >
          <FontAwesome5 name="youtube-square" size={20}></FontAwesome5>
        </Text>
      </View>
      <Text
        style={{
          color: '#1daebb',
          fontSize: 12,
          marginTop: 5,
          textAlign: "center",
        }}>
        যেকোন তথ্যের জন্য 
        ই-মেইল করুনঃ</Text>
        <Text
        style={{
          color: '#1daebb',
          fontSize: 12,
          marginTop: 1,
          textAlign: "center",
        }}>
        schoolghor.info@gmail.com</Text>
      <Text
        style={{
          color: '#1daebb',
          fontSize: 10,
          marginTop: -0,
          textAlign: "center",
        }}
      >
        ©SCHOOL GHOR
      </Text>
    </View>
    </>
  );
}
