import React from "react"
import { Image, View } from "react-native"
import HeaderItem from "../header_item"
const HeaderHome = () => {
  return (
    <View 
      style={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <Image 
        source={require("../../../../assets/location_logo.png")}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 8,
          alignItems: "center"
        }}
      >
        <Image 
          style={{
            marginRight: 8
          }}
          source={require("../../../../assets/location.png")}
        />
        <HeaderItem header="Dhaka, Banassre" /> 
      </View>
    </View>
  )
}
export default HeaderHome