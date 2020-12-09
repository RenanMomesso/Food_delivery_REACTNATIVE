import React from "react";
import { ViewProps, Text, Image, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { Category } from "../redux/models";

const Container = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 120px;
  height: 140px;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
`;
interface CategoryProps {
  item: Category;
  onTap: Function;
}

const CategoryCard: React.FC<CategoryProps> = ({ item, onTap }) => {
  return (
    <Container onPress={() => onTap(item)}  >
      <Image 
        source={{ uri: `${item.icon}` }}
        style={{
          width: 120,
          borderRadius: 20,
          backgroundColor: "red",
          height: 120,
        }}
      />
      <Text style={{ fontSize: 14, marginTop: 10, color: "#858585" }}>
        {item.title}
      </Text>
    </Container>
  );
};
export default CategoryCard;
