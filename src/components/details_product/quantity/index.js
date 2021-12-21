import React from 'react';
import HeaderItem from '../../../pages/home/template/header_item';
import { View } from 'react-native';
const Quantity = ({quantity}) => {
  return (
    <View
      style={{
        width: 45,
        height: 45,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 18,
        borderColor: 'rgba(226, 226, 226, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <HeaderItem header={quantity} size={18} />
    </View>
  );
};
export default Quantity;
