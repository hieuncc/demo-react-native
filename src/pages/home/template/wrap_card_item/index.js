import React from "react"
import { View } from "react-native"
import { style } from "./style"
const WrapCardItem = ({children}) => {
  return <View style={style}>
    {children}
  </View>
}
export default WrapCardItem