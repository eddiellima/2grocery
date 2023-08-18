import { Header } from "@/components/Header"
import { Lists } from "@/components/Lists"
import React from "react"
import { View } from "react-native"

export default function App() {
  return (
    <View className="flex-1">
      <Header title="All Lists" />
      <Lists />
    </View>
  )
}
