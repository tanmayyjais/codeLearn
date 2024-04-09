import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../../Shared/Colors'

export default function ChapterSection({chapters}) {
  return (
    <View style={{
        padding:10,
        backgroundColor:Colors.white,
        marginTop:20,
        borderRadius:15
    }}>
        <Text style={{fontFamily:'outfit-medium',fontSize:22}}>Chapters</Text>
      {chapters.map((item,index)=>(
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth:1,
            borderRadius:10,
            marginTop:10,
            padding:15,
            borderColor:'gray'
        }}>
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
        }}>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:15,color:'gray'
                }}>
                {index+1}</Text>
            <Text style={{
                fontFamily:'outfit',fontSize:15
                ,color:'gray'
                }}>
                    {item.title}</Text>
        </View>
        <Ionicons name="play-circle" size={21} color="black" />
        </View>
      ))}
    </View>
  )
}