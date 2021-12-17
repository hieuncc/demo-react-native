import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import HeaderItem from './header_item';
const WrapList = ({children, header}) => {
  return (
    <View marginBottom={15} marginTop={15}>
      <View 
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={20}
      >
        <HeaderItem header={header} size={24} />
        <TouchableOpacity
          onPress={() => console.log(1)}
        >
          <HeaderItem header="See all" size={16} color="#53B175" />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};
export default WrapList;
