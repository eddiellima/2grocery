import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Button, Text, View } from "react-native"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/list/" asChild>
        <Button title="Go to the list" />
      </Link>
    </View>
  )
}
