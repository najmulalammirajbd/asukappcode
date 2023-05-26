import { View, Text , Image } from "react-native";
import MusicPlayer from "./MusicPlayer";
import { useEffect, useState } from "react";


export default function Song() {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://iaudio.vercel.app/allimusics")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor:'white' }}>
    {isLoading ? <Image style={{height: 40,resizeMode: 'contain',width: 90,}} source={require('../../assets/logo.png')} /> : <MusicPlayer songs={data} />}
  </View>
  );
}

// https://iaudio.vercel.app/allimusics
