import React from "react"
import { TouchableOpacity, Image } from "react-native"
const ButtonAction = ({type}) => { 
    const source = type === "minus" ? require("../../../assets/minus.png") : require("../../../assets/add.png")
    return (
      <TouchableOpacity>
        <Image 
          source={source}
        />
      </TouchableOpacity>
    )
}
export default ButtonAction