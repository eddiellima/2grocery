import Ionicons from "@expo/vector-icons/Ionicons"
import { View, ViewStyle } from "react-native"

type IconProps = {
  name: keyof typeof Ionicons.glyphMap
  size?: number
  color?: string
  className?: string
  style?: ViewStyle
}

export const Icon = ({
  name,
  size = 28,
  color = "black",
  style
}: IconProps) => {
  return (
    <View style={style} className="p-1">
      <Ionicons name={name} size={size} color={color} />
    </View>
  )
}
