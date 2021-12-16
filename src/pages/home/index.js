import React from 'react';
import {ScrollView, Image, View} from 'react-native';
import { DATA } from './constant';
import WrapListItem from './template';
import SearchField from '../../components/field';
import HeaderHome from './template/header';
import { renderItem } from './function/renderItem';
import FlatListItem from './template/flat_list_item'
const ScreenHome = () => {
  return (
    <ScrollView marginBottom={80} width="100%">
      <HeaderHome />
      <View marginBottom={20} marginTop={20}>
        <SearchField />
      </View>
      <View marginBottom={20}>
        <Image source={require('../../assets/banner/banner.png')} />
      </View>
      <WrapListItem header="Exclusive Offer">
        <FlatListItem 
          renderItem={renderItem}
          data={DATA[0].list}
        />
      </WrapListItem>
      <WrapListItem header="Best Selling">
        <FlatListItem 
          renderItem={renderItem}
          data={DATA[1].list}
        />
      </WrapListItem>
      <WrapListItem header="Groceries">
        <FlatListItem 
          renderItem={renderItem}
          data={DATA[1].list}
        />
        <FlatListItem 
          renderItem={renderItem}
          data={DATA[1].list}
        />
      </WrapListItem>
    </ScrollView>
  );
};
export default ScreenHome;
