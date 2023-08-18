import { Text, View } from "react-native"
import { Icon } from "./Icon"

export const Header = () => {
  return (
    <View className="flex-row px-8 py-8 justify-between items-center border-solid border-b-[3px]">
      <Text className="text-4xl font-semibold">All Lists</Text>
      <Icon name="search-sharp" />
    </View>
  )
}
