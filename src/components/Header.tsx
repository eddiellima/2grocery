import { Text, View, ViewStyle } from "react-native"
import { Icon } from "./Icon"

type HeaderProps = {
  title: string
  className?: string
  style?: ViewStyle
}

export const Header = ({ title, style }: HeaderProps) => {
  return (
    <View
      className="flex-row px-8 py-8 justify-between items-center border-solid border-b-[3px]"
      style={style}
    >
      <Text className="text-[40px] font-semibold">{title}</Text>
      <Icon name="search-sharp" />
    </View>
  )
}
