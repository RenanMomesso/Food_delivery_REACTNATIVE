import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions,TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { Restaurant, FoodModel } from "../redux";


const screenWidth = Dimensions.get('screen').width

interface TouchableHailight extends TouchableOpacityProps {
    
}

const ButtonRestaurant = styled.TouchableOpacity<TouchableHailight>`
    width:${screenWidth - 20};
    
    height:200px;
  
    
    margin-left:5px;

    justify-content:space-around;
    align-items:center;
    margin-top:3px;
`;

const ImagemRestaurant = styled.Image`
    width:${screenWidth - 30};
    height:200px;
    border-radius:20px;
    background-color:#EAEAEA;
    margin-left:2px;


`;

interface RestaurantProps {
  item: Restaurant | FoodModel;
  onTap: Function;
}

const RestaurantCard: React.FC<RestaurantProps> = ({item,onTap}) => {
  return (
    <ButtonRestaurant onPress={() => onTap(item)}   >
        <ImagemRestaurant   source={{ uri: `${item.images[0]}`}} />
    </ButtonRestaurant>
  );
};
export default RestaurantCard;
