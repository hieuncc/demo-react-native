import React from "react"
import { Text } from "react-native"
import { useStyle } from "./style"
const HeaderItem = ({header, size, color}) => {
  return (
    <Text style={useStyle(size, color)}> 
      {header}
    </Text>
  )
}
export default HeaderItem