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
          paddingRight: 40,
          paddingLeft: 40,
          textAlign: "center",
          marginTop: 10,
          marginBottom:5
        }}
      >
        নহু সরফ ছাড়া বাকি সকল কিছুর সাব্সক্রাইব 
            ফি ১০ বছরের জন্য ৩৫০ টাকা মাত্র | আরবি স্পোকেন বেসিক লেভেল সম্পূর্ণ ফ্রি

      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 10,
          paddingRight: 15,
          paddingLeft: 15,
          textAlign: "center",
          marginTop: 0,
          marginBottom:0 ,
         fontWeight:'bold'
        }}
      >
        আশ শাজারাহ অ্যাপের যে কোন বিষয়ে আশ শাজারাহ পরিচালনা বোর্ডের সিদ্ধান্ত চূড়ান্ত বলে গণ্য হবে
        
      </Text>
      <Navbar backBtn={true}/>
    </View>
    </>
  );
}
