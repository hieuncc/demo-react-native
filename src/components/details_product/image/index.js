import React from "react"
import { View, Image } from "react-native"
const ViewImage = () => {
  return (
    <View
      style= {{
        backgroundColor: "rgba(242, 243, 242, 1)",
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        width: "100%",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 70,
        paddingBottom: 70,
        aspectRatio: 4/3
      }}
    >
      <Image
        style={{
          resizeMode: "contain",
          width: "100%",
          height: "100%",
        }}
        source={require("../../../assets/product/banana.png")}
      />
    </View>
  )
}
export default ViewImage