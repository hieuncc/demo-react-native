import React from "react"
import { Image, View, FlatList, SafeAreaView } from "react-native"
import HeaderItem from "./header_item"
import SubtitleItem from "./subtitle_item"
import WrapCardItem from "./wrap_card_item"
import ButtonAddItem from "./button_add_item"
const ListSellItem = ({role_name, list}) => {
  const renderItem = ({item}) => (
    <WrapCardItem>
      <Image 
        style={{
          height: 80,
          width: 100,
          margin: 10
        }}
        source={item.image}
      />
      <View
        style={{
          width: "100%",
          margin: 5,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <HeaderItem header={item.header} />
        <SubtitleItem subtilte={item.subtilte} />
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
        <HeaderItem header={item.price} />
        <ButtonAddItem />
      </View>
      </WrapCardItem>
  )
  return (
    <SafeAreaView 
      style={{
        marginTop: 15,
        marginBottom: 15
      }}
    >
      <View 
        style={{
          marginBottom: 20
        }}
      >
        <HeaderItem header={role_name} size={24} />
      </View>
      <FlatList
        horizontal
        data={list}
        renderItem= {renderItem}
        keyExtractor= {item => item.id}
      />
    </SafeAreaView>
  )
}
export default ListSellItem