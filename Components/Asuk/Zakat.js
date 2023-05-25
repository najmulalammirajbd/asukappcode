import {
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native'
  import {
    responsiveHeight as rh,
    responsiveWidth as rw,
  } from 'react-native-responsive-dimensions'
  import React, { useEffect, useState } from 'react'
  import Header from '../Navbarthree/Navbarthree'
  import SchoolDetailsModal from '../SchoolsList/SchoolDetailsModal'
  import { Ionicons } from '@expo/vector-icons';
  import FilterModal from '../SchoolsList/FilterModal'
  import Gif from '../Gif/Gif'
  import Navbarmain from '../Navbartwo/Navbartwo'
import { Card } from 'react-native-shadow-cards'
  
  export default function SchoolsList() {
    const [IsVisible, setIsVisible] = useState(false)
    const [IsVisibleFilter, setIsVisibleFilter] = useState(false)
    const [NewData, setNewData] = useState({})
    // data
    const [loading, setLoading] = useState(true)
    const [Data, setData] = useState([])
    const [FilterData, setFilterData] = useState([])
    const [FilterCatName, setFilterCatName] = useState('ina')
  
    //
    useEffect(() => {
      fetch('https://asukserver.vercel.app/zakat', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res)
          setFilterData(res)
          setLoading(false)
        })
        .catch((error) => {
          // setData(JSON.stringify(error))
        })
    }, [])
    //  filter
    const searchFilter = (text) => {
      if (Data.length > 0) {
        let filterList = Data.filter((item) => {
          const itemName =
            FilterCatName === 'ina'
              ? item.ina.toLowerCase()
              : item.iad.toLowerCase()
          const userTypeText = text.toLowerCase()
          return itemName.indexOf(userTypeText) > -1
        })
        if (text.length > 0) {
          setFilterData(filterList)
        }
      }
      if (text.length < 1) {
        setFilterData(Data)
      }
    }
  
    return (
      <View style={styles.container}>
        {/* Modal */}
        <SchoolDetailsModal
          IsVisible={IsVisible}
          setIsVisible={setIsVisible}
          data={NewData}
        />
        <FilterModal
          IsVisible={IsVisibleFilter}
          setIsVisible={setIsVisibleFilter}
          value={FilterCatName}
          setValue={setFilterCatName}
        />
  
        {/* Status Bar */}
        <Navbarmain/>
        
        <StatusBar />
        
        
        <View style={styles.searchInputContainer}>
        <Header backBtn={true} />
        
          <TextInput
          placeholder={FilterCatName=='ina'?"SEARCH BY SUBJECT ":"SEARCH BY NUMBER"}
          placeholderTextColor="#666"
            onChangeText={(text) => searchFilter(text)}
            style={styles.searchInput}
          />
          <TouchableOpacity
            onPress={() => {
              setIsVisibleFilter(true)
            }}
            style={styles.searchFilterButton}
          >
            <Ionicons name="filter" size={26} color="#9e6f1a" />
          </TouchableOpacity>
          
          {/* content */}
        </View>
        
        <View>
          {loading ? (
            
            <Gif visible={loading} />
          ) : (
            <>
              <FlatList
                data={FilterData}
                renderItem={(item) => {
                  // console.log(item.item.iad)
                  return (
                    <Card style={{justifyContent: 'center',
                    width:'95%',
                    marginLeft:9,
                    marginRight:17,
                    marginTop:7,
                    marginBottom:10}}>
                      <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.card}
                      onPress={() => {
                        setNewData(item?.item)
                        setIsVisible(true)
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={require('../../assets/logo.png')}
                      />
                      <View>
                        <Text numberOfLines={2} style={styles.name}>
                        Subject : {item?.item?.ina}
                        </Text>
                        <Text numberOfLines={3} style={styles.address}>
                          No: {item.item.iad}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    </Card>
                  )
                }}
              />
              {FilterData.length == 0 && (
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    paddingVertical: 25,
                  }}
                >
                  NOTHING FOUND!
                </Text>
              )}
            </>
          )}
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight - 10,
      backgroundColor: '#fff',
    },
    // searchInput
    searchInputContainer: {
      flexDirection: 'row',
      position: 'relative',
      flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginLeft: 10,
    marginRight:10 ,
    borderWidth: 0.5, 
    borderColor: '#dddddd' ,
    paddingBottom:0 , 
    paddingTop: 0 ,
    marginTop: 10 ,
    borderRightColor: '#dddddd' ,

    },
    searchInput: {
      flex: 1,
    color: '#333',
    fontSize: 15,

    },
    searchFilterButton: {
      width: rw(15),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // borderLeftWidth:0.7,
      // borderLeftColor:'#1daebb',
      marginLeft:7,
      borderLeftColor:'#dddddd',
      borderLeftWidth : 0.5 ,
      paddingLeft: 5 , 
      paddingTop:15 ,
      paddingBottom: 15
    },
    searchFilterText: {
      fontSize: 15,
      color:'#1daebb',
      marginLeft: 5,
    },
    filterCatButtonContainer: {},
    //  card
    card: {
      flexDirection: 'row',
      width: rw(95),
      marginBottom: 14,
      marginHorizontal: rw(1),
      marginVertical: rh(2),
      borderRadius: 0,
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems:'center'
      
    },
    image: {
      width: 60,
      height: 60,
      alignItems: 'flex-start',
      resizeMode: 'contain',
      marginRight: 12,
    },
    imag: {
      width: '100%',
      height: '65%',
      alignItems: 'center',
      resizeMode: 'contain',
      marginRight: 15,
      textAlign:'center',
      justifyContent:'center'
    },
    name: {
      color: 'black',
      fontSize: 17,
      width: rw(70),
    },
    address: {
      color: 'black',
      width: rw(70),
    },
  })
  