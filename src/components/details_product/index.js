import React, { useEffect } from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import HeaderItem from '../../pages/home/template/header_item';
import SubtitleItem from '../../pages/home/template/subtitle_item';
import Accordion from '../accordion';
import ButtonSubmit from '../button';
import ButtonAction from './button_action';
import ViewImage from './image';
import Quantity from './quantity';
import {style} from './style';
import Star from '../../assets/star.svg';
import firestore from '@react-native-firebase/firestore';
const DetailsProduct = () => {
  // console.log(firestore().collection("fruits").doc())
  const Nutritions = ({gram}) => {
    return (
      <View
        style={{
          backgroundColor: '#EBEBEB',
          padding: 10,
          paddingBottom: 5,
          paddingTop: 5,
          borderRadius: 5,
          maxHeight: 24,
        }}>
        <HeaderItem
          color="rgba(124, 124, 124, 1)"
          size={9}
          header={`${gram}gr`}
        />
      </View>
    );
  };
  const RatingStar = () => {
    return [0, 1, 2, 3, 4].map((item, index) => (
      <View style={{margin: 2}} key={index}>
        <Star fill={'#EBEBEB'} />
      </View>
    ));
  };
  const PRODUCT = {
    name: 'Apple',
    nutritions: {
      calories: 52,
      water: '86%',
      protetin: '0.3 grams',
      carbs: '13.8 grams',
      fiber: '2.4 grams',
      fat: '0.2 grams',
    },
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView 
        style={style.scroll_view}
      >
        <ViewImage />
        <View style={style.wrap_content}>
          <View style={style.wrap_header}>
            <View>
              <HeaderItem header="Naturel Red Apple" size={24} />
              <SubtitleItem subtilte="1kg, Price" />
            </View>
            <TouchableOpacity>
              <Image source={require('../../assets/like.png')} />
            </TouchableOpacity>
          </View>
          <View style={style.wrap_price_quantity}>
            <View style={style.wrap_quantity}>
              <ButtonAction type="minus" />
              <Quantity quantity={1} />
              <ButtonAction type="add" />
            </View>
            <HeaderItem header="$4.99" size={24} />
          </View>
          <Accordion name="Product Detail">
            <Text style={style.accordion_children_content}>
              Apples are nutritious. Apples may be good for weight loss. apples
              may be good for your heart. As part of a healtful and varied diet.
            </Text>
          </Accordion>
          <Accordion
            name="Nutritions"
            optionalHeader={<Nutritions gram="100" />}>
            {Object.entries(PRODUCT.nutritions).map((item, index) => (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                key={index}>
                <Text
                  style={[
                    style.accordion_children_content,
                    {textTransform: 'capitalize'},
                  ]}>
                  {item[0]}
                </Text>
                <Text style={style.accordion_children_content}>{item[1]}</Text>
              </View>
            ))}
          </Accordion>
          <Accordion name="Review" optionalHeader={<RatingStar />}>
            <Text style={style.accordion_children_content}>
              Apples are nutritious. Apples may be good for weight loss. apples
              may be good for your heart. As part of a healtful and varied diet.
            </Text>
          </Accordion>
        </View>
      </ScrollView>
      <View style={style.fixed_button_bottom}>
        <ButtonSubmit header="Add To Basket" />
      </View>
    </View>
  );
};
export default DetailsProduct;
