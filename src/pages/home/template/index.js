import React from "react"
import { Text, Image, View } from "react-native"
const ListSellItem = () => {
  return (
    <View
      style={{
        width: 175,
        height: 250,
        borderRadius: 18,
        borderWidth: 1,
        padding: 15,
        borderColor: "#E2E2E2",
        display: "flex",
        alignItems: "center"
      }}
    >
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
        <Text
          style={{
            width: "100%",
            color: "#181725",
            fontSize: 16,
            lineHeight: 18,
            letterSpacing: 0.1,
            fontWeight: "bold",
          }}
        >
          Organic Bananas
        </Text>
        <Text
          style={{
            width: "100%",
            color: "#7C7C7C",
            fontSize: 14,
            lineHeight: 18,
            letterSpacing: 0.1,
          }}
        >
          7pcs, Priceg
        </Text>
      </View>
      {/* PART-3 */}
      <View
        style={{
          width: "100%",
          margin: 5,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Text
          style={{
            width: "100%",
            color: "#181725",
            fontSize: 16,
            lineHeight: 18,
            letterSpacing: 0.1,
            fontWeight: "bold",
          }}
        >
          $4.99
        </Text>
      </View>
    </View>
  )
}
export default ListSellItem