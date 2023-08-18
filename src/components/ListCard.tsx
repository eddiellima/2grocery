import { Text, View } from "react-native"

type ListCardProps = {
  name: string
}

export const ListCard = ({ name }: ListCardProps) => {
  return (
    <View className="p-10 border-solid border-b">
      <Text>{name}</Text>
    </View>
  )
}
