import React from "react";
import { Image, View  } from "react-native";
// COMPONENT
import WrapCardItem from "../template/wrap_card_item";
import HeaderItem from "../template/header_item";
import SubtitleItem from "../template/subtitle_item";
import ButtonAddItem from "../template/button_add_item";

export const renderItem = ({item}) => (
    <WrapCardItem>
      <Image
        style={{
          height: 80,
          width: 100,
          margin: 10,
        }}
        source={item.image}
      />
      <View
        style={{
          width: '100%',
          margin: 5,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <HeaderItem header={item.header} />
        <SubtitleItem subtilte={item.subtilte} />
      </View>
      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <HeaderItem header={item.price} />
        <ButtonAddItem />
      </View>
    </WrapCardItem>
);

export const renderItemNonPrice = ({item}) => (
  <View
    style={{
      width: 250,
      height: 105,
      borderRadius: 18,
      borderWidth: 1,
      marginRight:  15,
      borderColor: "#E2E2E2",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: item.backgroundColor,
      padding: 15
    }}
  >
    <Image
      style={{
        marginRight: 10,
      }}
      source={item.image}
    />
    <HeaderItem header={item.header} />
  </View>
)