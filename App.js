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
  TextInput,
  View
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput 
          placeholder="Search"
          style={{
            width: "100%",
            height: 52,
            backgroundColor: "rgba(242, 243, 242, 1)",
            borderRadius: 15,
            borderColor: "rgba(242, 243, 242, 1)",
            borderWidth: 1,
            padding: 16
          }} 
        />
      </View> 
    </SafeAreaView>
  );
};

export default App;
