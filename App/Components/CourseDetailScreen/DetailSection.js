import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'
import OptionItems from '../OptionItems'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function DetailSection({course}) {
  return (
    <View style={{padding:10,borderRadius:15,backgroundColor:Colors.white}}>
      <Image source={{uri:course?.banner.url}}
      style={{width : Dimensions.get('screen').width*0.83,
    height:190,borderRadius:15}}
      />
      <Text style={{fontFamily:'outfit-medium',fontSize:22,marginTop:10}}>{course.name}</Text>
      <View style={{padding:10}}>
      <View style={styles.rowStyle}>
        <OptionItems icon='book-outline' value={`${course.chapter.length} Chapters`}/>
        <OptionItems icon='time-outline' value={`${course.time} Hrs`}/>
    </View>
    <View style={styles.rowStyle}>
    <OptionItems icon='person-circle-outline' value={`${course?.author}`}/>
    <OptionItems icon='cellular-outline' value={`${course?.level}`}/>
    </View> 
    <View>
        <Text style={{fontFamily:'outfit-medium', fontSize:20}}>Description</Text>
        <Text style={{fontFamily:'outfit', lineHeight:23,color:'gray'}}>{course.description?.markdown}</Text>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            gap:20
        }}>
            <TouchableOpacity style={{
                    padding:15,
                    backgroundColor:Colors.primary,
                    borderRadius:15,
                    }}
                    >
                <Text style={{
                    color:Colors.white,
                    fontFamily:'outfit',
                    fontSize:15,
                    textAlign:'center'}}
                    >
                        Enroll for Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                    padding:15,
                    backgroundColor:Colors.secondary,
                    borderRadius:15,
                    }}
                    >
                <Text style={{
                    color:Colors.white,
                    fontFamily:'outfit',
                    fontSize:15,
                    textAlign:'center'}}
                    >
                        Membership $3.99</Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    rowStyle:
    {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    }
})