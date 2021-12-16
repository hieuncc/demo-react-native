import React from "react";
import { FlatList } from "react-native";
const FlatListItem = ({renderItem, data}) => {
  return (
    <FlatList 
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}
export default FlatListItem