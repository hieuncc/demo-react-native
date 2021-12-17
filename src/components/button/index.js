import React from "react";
import { TouchableOpacity } from "react-native";
import { style } from "./style";
const ButtonSubmit = ({children, action}) => {
  return <TouchableOpacity 
    onPress={action}
    style={style}
  >
    {children}
  </TouchableOpacity>;
};
export default ButtonSubmit