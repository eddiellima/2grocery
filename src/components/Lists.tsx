import { FlatList, View } from "react-native"
import { ListCard } from "./ListCard"

export const Lists = () => {
  return (
    <View className="flex-auto">
      <FlatList
        data={[
          { name: "1" },
          { name: "2" },
          { name: "3" },
          { name: "4" },
          { name: "5" },
          { name: "6" },
          { name: "7" },
          { name: "8" },
          { name: "9" },
          { name: "10" },
          { name: "11" },
          { name: "12" },
          { name: "13" },
          { name: "14" },
          { name: "15" },
          { name: "16" },
          { name: "17" },
          { name: "18" },
          { name: "19" },
          { name: "20" },
          { name: "21" },
          { name: "22" },
          { name: "23" },
          { name: "24" },
          { name: "25" },
          { name: "26" }
        ]}
        renderItem={({ item }) => <ListCard name={item.name} />}
      />
    </View>
  )
}
