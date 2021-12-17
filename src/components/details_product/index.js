import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import HeaderItem from '../../pages/home/template/header_item';
import SubtitleItem from '../../pages/home/template/subtitle_item';

const DetailsProduct = () => {
  return (
    <View 
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <View
        style= {{
          backgroundColor: "rgba(242, 243, 242, 1)",
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          width: "100%",
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 70,
          paddingBottom: 70,
          // paddingLeft: 40,
          aspectRatio: 4/3
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: "100%",
            height: "100%"
          }}
          source={require("../../assets/product/apple_details.png")}
        />
      </View>
      <View 
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 30,
          paddingTop: 30
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View>
            <HeaderItem header="Naturel Red Apple" size={24} />
            <SubtitleItem subtilte="1kg, Price" />
          </View>
          <TouchableOpacity>
            <Image 
              source={require("../../assets/like.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
            marginBottom: 30
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image 
                source={require("../../assets/minus.png")}
              />
            </TouchableOpacity>
            <View 
              style={{
                width: 45,
                height: 45,
                marginLeft: 15,
                marginRight: 15,
                borderWidth: 1,
                borderRadius: 18,
                borderColor: "rgba(226, 226, 226, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <HeaderItem header="1" size={18} />
            </View>
            <TouchableOpacity>
              <Image 
                source={require("../../assets/add.png")}
              />
            </TouchableOpacity>
          </View>
          <HeaderItem header="$4.99" size={24} />
        </View>
      </View>
    </View>
  );
};
export default DetailsProduct;
