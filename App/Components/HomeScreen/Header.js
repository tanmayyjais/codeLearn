import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Shared/Colors';
import coin from '../../../assets/coin.png';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {isLoaded, isSignedIn,user} = useUser();
  return isLoaded&&(
    <View>
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
      <View style = {styles.rowStyle}>
        <Image source={{uri:user?.imageUrl}} style={{width:50,
            height:50,
            borderRadius:25}}/>
        <View>
            <Text style={{color:Colors.white,fontFamily:'outfit'}}>Welcome,</Text>
            <Text style={styles.mainText}>{user?.fullName}</Text>
        </View>
      </View>
      <View style={styles.rowStyle}>
            <Image source={coin} style={{width:35,height:35}}/>
            <Text style={styles.mainText}>3580</Text>
      </View>
    </View>
    <View style={{backgroundColor:Colors.white,paddingLeft:10,
    display:'flex',flexDirection:'row',justifyContent:'space-between',
    borderRadius:99,
    marginTop:20,
    paddingRight:5,
    paddingLeft:25}}>
        <TextInput placeholder='Search Courses' style={{fontFamily:'outfit',fontSize:15}}/>
        <Ionicons name="search-circle" size={50} color={Colors.primary}/>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainText: {
        color:Colors.white,
        fontSize:15,
        fontFamily:'outfit'
    },
    rowStyle:
    {
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }
})