import React from 'react';
import {
  Image
} from 'react-native';

const LoadingScreen = () => {
  return (
    <>
      <Image
        source={require("../../assets/demo_logo.png")}
      />
    </>
  );
};
export default LoadingScreen;
