/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
  Image
} from 'react-native';

import LoadingScreen from './src/pages/loading_screen';
import search_icon from "./src/assets/search.png"

const App = () => {
  return (
    <SafeAreaView>
      <View 
        style={{
          // backgroundColor: "#00AA13", 
          width: "100%", 
          height: "100%",
          padding: 20,
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <>
          <View
            style={{
              width: "100%", 
              backgroundColor: "rgba(242, 243, 242, 1)",
              borderRadius: 15,
              paddingLeft: 16,
              paddingRight: 16,
              borderColor: "rgba(242, 243, 242, 1)",
              borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}  
          >
            <Image 
              source={require("./src/assets/search.png")}
            />
            <TextInput 
              placeholder="Search Store"
              style={{
                flex: 1,
                marginLeft: 10,
                fontWeight: "600",
                color: "#7C7C7C"
              }} 
            />
          </View>
        </>
      </View> 
    </SafeAreaView>
  );
};

export default App;
