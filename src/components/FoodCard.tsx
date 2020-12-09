import React from "react";
import { ViewProps } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { FoodModel, onUpdateCart } from "../redux";
import FoodAddButton from "./FoodAddButton";

interface FoodCardProps {
  item: FoodModel;
  onTap: Function;
  onUpdateCart: Function;
}

const Container = styled.View<ViewProps>`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  background-color: #ebebeb;
  margin-right: 14px;
  justify-content: space-between;
  border-radius: 15px;
  border: 1px solid black;
`;
const TextSimples = styled.Text<any>`
  font-weight: ${(props) => (props.negrito ? "700" : "300")};
  text-transform: uppercase;
  font-size: 14px;
`;

const IconImage = styled.Image`
  width: 35px;
  height: 35px;
  background-color: transparent;
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

const SimplesView = styled.View`
  width: 55%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 6px;
`;

const AddButtonFoodView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const ViewAddAndPrice = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 9px;
  padding-top: 5px;
  padding-bottom: 6px;
  padding-right: 8px;
`;

const FoodCard: React.FC<FoodCardProps> = ({ item, onTap }) => {
  const dispatch = useDispatch();

  const didUpdateCart = (unit: number) => {
    item.unit = unit;
    console.log("UNIT", unit)
    console.log("ITEM UNIT", item.unit)
    dispatch(onUpdateCart(item));
  };

  return (
    <Container>
      <IconImage source={{ uri: `${item.images[0]}` }} />
      <AddButtonFoodView onPress={() => onTap(item)}>
        <SimplesView>
          <TextSimples negrito={true}>{item.name}</TextSimples>
          <TextSimples>{item.category}</TextSimples>
          <TextSimples>{item.category}</TextSimples>
        </SimplesView>
        <ViewAddAndPrice>
          <TextSimples>R${item.price.toFixed(0)}</TextSimples>
          <FoodAddButton
            onAdd={() => {
              let unit = isNaN(item.unit) ? 0 : item.unit;
              didUpdateCart(unit + 1);
            }}
            onRemove={() => {
              let unit = isNaN(item.unit) ? 0 : item.unit;
              didUpdateCart(unit > 0 ? unit - 1 : unit);
            }}
            unit={item.unit}
          />
        </ViewAddAndPrice>
      </AddButtonFoodView>
    </Container>
  );
};
export default FoodCard;
