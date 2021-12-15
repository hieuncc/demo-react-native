import React from "react"
import { Text } from "react-native"
import { style } from "./style"
const SubtitleItem = ({subtilte}) => {
  return <Text style={style}> 
    {subtilte}
  </Text>
}
export default SubtitleItem