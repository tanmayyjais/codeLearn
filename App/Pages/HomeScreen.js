import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Shared/Colors'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style ={{backgroundColor:Colors.primary,height:250,
      padding:20}}>
        <Header/>
      </View>
      <View style={{padding:20}}>
        <View style={{marginTop:-90}}>
          <CourseList level={'Basic'}/>
        </View>
        <CourseList level={'Medium'}/>  
        <CourseList level={'Advance'}/>
      </View>
    </ScrollView>
  )
}