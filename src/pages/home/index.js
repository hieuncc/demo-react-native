import React from "react"
import { ScrollView, Image, ImageBackground, View } from "react-native"
import { DATA } from "./constant"
import ListSellItem from "./template"
const ScreenHome = () => {
  return (
    <>
      <ScrollView
        style={{
          marginBottom: 80,
          width: "100%",
        }}
      >
        <View>
          <Image 
            source={require("../../assets/banner/banner.png")}
          />
        </View>
        <ListSellItem 
          list={DATA[0].list} 
          role_name={DATA[0].role}
        />
        <ListSellItem 
          list={DATA[1].list} 
          role_name={DATA[1].role}
        />
      </ScrollView>
    </>
  )
}
export default ScreenHome