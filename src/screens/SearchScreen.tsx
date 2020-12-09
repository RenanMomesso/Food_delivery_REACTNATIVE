import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { FoodModel, ShoppingState, UserState } from "../redux";
import ButtonWithIcon from "../components/ButtonWithIcon";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { checkExistence } from "../utils/cartHelper";

interface SearchScreenProps {
  ShoppingReducer: ShoppingState;
  userReducer: UserState;
  onUpdateCart:Function;
}

const Containerall = styled.View`
  flex: 1;
  margin-top: 25px;
  padding: 20px;
  background-color: white;
`;

const NavigationView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

const ListSearcheds = styled(FlatList as new () => FlatList<FoodModel>)``;

const ListView = styled.View``;

const TextSimples = styled.Text``;

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const navigation = useNavigation()
  const { goBack } = navigation;

  const { availableFoods } = useSelector(
    (state: SearchScreenProps) => state.ShoppingReducer
  );
  const {Cart} = useSelector((state:SearchScreenProps) => state.userReducer)

  const [isEditing, setIsEditing] = useState(false);
  const [keyword, setKeyword] = useState("");

  const {navigate} = useNavigation();

  const onTapFood = (item:FoodModel) => {
    navigate('FoodDetailScreen', {food: item})
  }

  return (
    <Containerall>
      <NavigationView>
        <ButtonWithIcon
          width={42}
          height={42}
          icon={require("../images/backbutton.png")}
          onTap={() => goBack()}
        /> 
        <SearchBar 
          didTouch={() => setIsEditing(true)}
          onTextChange={setKeyword}
          onEndEdditing={() => setIsEditing(false)}
        />
      </NavigationView>
      <ListView>
        <ListSearcheds
          showsVerticalScrollIndicator={false}
          data={
            isEditing
              ? availableFoods.filter((item) => {
                  return item.name.includes(keyword);
                })
              : keyword ? availableFoods.filter((item) => {
                return item.name.includes(keyword);
              }): availableFoods
          }
          renderItem={({ item }) =>
           <FoodCard
            onTap={onTapFood} 
            item={checkExistence(item,Cart)}
            onUpdateCart={props.onUpdateCart}
            />
           }
        />
      </ListView>
    </Containerall>
  );
};
export default SearchScreen;
