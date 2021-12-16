import React from "react"
import { Text } from "react-native"
import { useStyle } from "./style"
const HeaderItem = ({header, size}) => {
  return <Text style={useStyle(size)}> 
    {header}
  </Text>
}
export default HeaderItem