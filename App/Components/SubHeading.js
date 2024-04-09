import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({text,color='#000'}) {
  return (
    <View>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:24,
        color:color,
      }}>{text}</Text>
    </View>
  )
}