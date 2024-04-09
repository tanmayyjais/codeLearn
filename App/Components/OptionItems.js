import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function OptionItems({icon,value}) {
  return (
    <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    marginTop: 5,
                  }}
                >
                  <Ionicons name={icon} size={18} color="black" />
                  <Text style={{fontFamily:'outfit'}}>{value}</Text>
                </View>
  )
}