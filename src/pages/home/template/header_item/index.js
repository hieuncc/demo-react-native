import React from "react"
import { Text } from "react-native"
import { style } from "./style"
const HeaderItem = ({header}) => {
  return <Text style={style}> 
    {header}
  </Text>
}
export default HeaderItem