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
import ScreenHome from './src/pages/home';
import ListSellItem from './src/pages/home/template';

const App = () => {
  return (
    <SafeAreaView>
      <View 
        style={{
          width: "100%", 
          height: "100%",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ListSellItem />
        <ScreenHome />
      </View> 
    </SafeAreaView>
  );
};

export default App;
