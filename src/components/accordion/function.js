import { Animated } from "react-native";
export function _timingAnimated(value, toValue, duration, native = true, delay= 0 ) {
  return Animated.timing(value, {
    toValue: toValue,
    duration: duration,
    delay: delay,
    useNativeDriver: native 
  })
}