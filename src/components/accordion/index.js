import React, { useState, useRef } from "react";
import { TouchableOpacity, View, Text, Animated } from "react-native";
import { _timingAnimated } from "./function"
const Accordion = ({children, name, optionalHeader}) => {
  const [ showContent, setShowContent ] = useState(false)
  const rotateValue = useRef(new Animated.Value(0)).current
  const opacityValue = useRef(new Animated.Value(0)).current
  const heightValue = useRef(new Animated.Value(0)).current
  function preformAnimation() {
    let toValue = showContent ? 0 : 1
    Animated.parallel([
      _timingAnimated(rotateValue, toValue, 300),
      _timingAnimated(heightValue, toValue, 300, false),
      _timingAnimated(opacityValue, toValue, 50, false),
    ]).start()
    setShowContent(!showContent)
  }
  const rotateZ = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg']
  })
  const opacity = opacityValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })
  const maxHeight = heightValue.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [0, 400]
  })
  return (
    <>
      <TouchableOpacity
        style={{
          width: "100%",
          padding: 10,
          paddingLeft: 5,
          paddingRight: 5,
          borderColor: "rgba(226, 226, 226, 0.7)",
          borderTopWidth: 1,
        }}
        onPress={() => preformAnimation()}
      >
        <View
          style={{
            minHeight: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              color: "#181725",
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {optionalHeader}
            <Animated.Image
              style={{ 
                transform: [{ rotateZ: rotateZ }],
                marginLeft: 20
              }}
              source={require("../../assets/action/arrow_details.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View
        style={{
          padding: 5,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: opacity,
          maxHeight: maxHeight,
        }}
      >
        {children}
      </Animated.View>
    </>
  )
}
export default Accordion