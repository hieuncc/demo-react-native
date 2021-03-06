import React from 'react';
import { Image, Text, View } from 'react-native';
import {TouchableOpacity} from 'react-native';
import { array } from './constant';
const ButtonNavigate = ({title, icon}) => {
  return (
    <TouchableOpacity
      style={{
        minWidth: 50,
        height: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Image
        source={icon}
        style={{
          marginBottom: 5,
        }}
      />
      <Text
        style={{
          fontSize: 12,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const Navbar = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#E5E5E5',
          padding: 15,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: 'absolute',
          bottom: 0,
        }}>
          {array.map(item => (
            <ButtonNavigate {...item} />
          ))}
      </View>
    </>
  );
};
export default Navbar;
