import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import styled from "styled-components/native";
const Container = styled.View`
  flex: 1;
  background-color: red;
`;

interface ButtonProps {
  onTap: Function;
  width: number;
  height: number;
  icon: ImageSourcePropType;
}

const ButtonWithIcon: React.FC<ButtonProps> = ({
  onTap,
  width,
  height,
  icon,
}) => {
  return (
    <TouchableOpacity style={[styles.btn, {width, height}]} onPress={() => onTap()}>
      <Image style={{ width: (width - 2), height: height - 2 }} source={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:40,
        paddingRight:20,
    }
})

export default ButtonWithIcon;
