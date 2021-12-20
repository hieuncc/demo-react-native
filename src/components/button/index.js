import React from "react";
import { TouchableOpacity } from "react-native";
import HeaderItem from "../../pages/home/template/header_item";
import { style } from "./style";
const ButtonSubmit = ({header, action}) => {
  return <TouchableOpacity 
    onPress={action}
    style={style}
  >
    <HeaderItem header={header} size={18} color="rgba(255, 249, 255, 1)" />
  </TouchableOpacity>;
};
export default ButtonSubmit