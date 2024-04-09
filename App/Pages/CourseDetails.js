import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';

export default function CourseDetails() {
  const navigate = useNavigation();
  const params=useRoute().params;
  useEffect(()=>{
    console.log(params.course);
  },[params.course])
  return params.course&&(
    <ScrollView style = {{padding:20}}>
      <Pressable onPress={()=>navigate.goBack()}
      style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1, // Apply opacity effect when pressed
          },
        ]}
      >
        <Ionicons name="arrow-back-circle" size={40} color="black"/>
      </Pressable>
      <DetailSection course={params.course} />
      <ChapterSection chapters={params.course.chapter} />
    </ScrollView>
  )
}