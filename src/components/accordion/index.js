import React, { useState, useRef } from "react";
import { TouchableOpacity, View, Text, Image, Animated } from "react-native";
const Accordion = ({children}) => {
  const [ showContent, setShowContent ] = useState(false)
  const [ height, setHeight ] = useState()
  const rotateValue = useRef(new Animated.Value(0)).current
  const opacityValue = useRef(new Animated.Value(0)).current
  const heightValue = useRef(new Animated.Value(0)).current
  function preformAnimation() {
    console.log(showContent)
    let toValue = 1
    if ( showContent ) {
      toValue = 0
    }
    Animated.parallel([
      Animated.timing(rotateValue, {
        toValue: toValue,
        duration: 200,
        useNativeDriver: true 
      }),
      Animated.timing(heightValue, {
        toValue: 300,
        duration: 200,
        useNativeDriver: false 
      }),
      Animated.timing(opacityValue, {
        toValue: toValue,
        duration: 200,
        delay: 200,
        useNativeDriver: true 
      }),
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
  function measureView(event) {
    console.log(event.nativeEvent.layout.height)
    setHeight(event.nativeEvent.layout.height)
  }
  return (
    <>
      <TouchableOpacity
        style={{
          width: "100%",
          padding: 15,
          paddingLeft: 5,
          paddingRight: 5,
          borderColor: "rgba(226, 226, 226, 0.7)",
          borderTopWidth: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        onPress={() => preformAnimation()}
      >
        <Text
          style={{
            color: "#181725",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Product Detail
        </Text>
        <Animated.Image
          style={{ transform: [{ rotateZ: rotateZ }]}}
          source={require("../../assets/action/arrow_details.png")}
        />
      </TouchableOpacity>
      <Animated.View
        style={{
          padding: 5,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: opacity,
          // ...( showContent && { height: 100 }),
        }}
        // style={[height]}
      >
        <View
          style={{
            paddingBottom: height !== 0 ? 15 : 0,
            display: "none"
          }}
          onLayout={(event) => measureView(event)}
        >
          {children}
        </View>
      </Animated.View>
    </>
  )
}
export default Accordion