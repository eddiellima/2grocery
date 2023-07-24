import { Link } from "expo-router"
import { Button, Text, View } from "react-native"

export default () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>List view</Text>
      <Link href="/" asChild>
        <Button title="Go back" />
      </Link>
    </View>
  )
}
