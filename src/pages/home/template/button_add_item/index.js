import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { style } from "./style"
const ButtonAddItem = () => {
  return (
    <TouchableOpacity
      style={style}
    >
      <Image 
        source={require('../../../../assets/plus.png')}
      />
    </TouchableOpacity>
  )
}
export default ButtonAddItem