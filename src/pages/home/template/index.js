import React from "react"
import { Image, View } from "react-native"
import HeaderItem from "./header_item"
import SubtitleItem from "./subtitle_item"
import WrapCardItem from "./wrap_card_item"
import ButtonAddItem from "./button_add_item"
const ListSellItem = () => {
  return (
    <View>
      <WrapCardItem>
        <Image 
          style={{
            height: 80,
            width: 100,
            margin: 10
          }}
          source={require('../../../assets/product/food.png')}
        />
        <View
          style={{
            width: "100%",
            margin: 5,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <HeaderItem header="Organic Bananas" />
          <SubtitleItem subtilte="7pcs, Priceg" />
        </View>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <HeaderItem header="$4.99" />
          <ButtonAddItem />
        </View>
      </WrapCardItem>
    </View>
  )
}
export default ListSellItem