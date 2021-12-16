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