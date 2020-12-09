import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  FlatListProps,
  ViewProps,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import SearchBar from "../components/SearchBar";
import { UserState, ShoppingState, Restaurant, FoodModel, onSearchFoods } from "../redux";
import { onAviability } from "../redux/actions/shoppingActions";
import { useNavigation } from "@react-navigation/native";
import ButtonWithIcon from "../components/ButtonWithIcon";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";

interface HomeProps {
  userReducer: UserState;
  ShoppingReducer: ShoppingState;
  onAviability: Function;
  onSearchFoods: Function
}

const SecureText = styled.SafeAreaView`
  background-color: #faecec;
  flex: 1;
`;

const Header = styled.Text`
  text-align: center;
  height: 20px;
  margin-left: 15px;
`;
const FlexRow = styled.View`
  display: flex;

  width: 100%;
  margin: 2px 10px;
  flex-direction: row;
`;

const SearchArea = styled.View`
  display: flex;
  flex-direction: row;
`;

const ContainerAll = styled.ScrollView`
  flex: 1;
  margin-top: 40px;
`;

const Flatilixt = styled.FlatList<FlatListProps<any>>``;

const RestaurantView = styled.View``;

const TextHeader = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: orange;
`;

export const HomeScreen: React.FC<HomeProps> = (props) => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const location = useSelector(
    (state: HomeProps) => state.userReducer.location
  );

  const getFunction = async () => {
    dispatch(onAviability(location.postalCode));
    setTimeout(()=>{
      dispatch(onSearchFoods(location.postalCode))
    },2000)

  };

  useEffect(() => {
    getFunction();
  }, []);

  const { categories, restaurants, foods } = useSelector(
    (state: HomeProps) => state.ShoppingReducer.aviability
  );

  const onTapRestaurant = (item: Restaurant) => {
    navigate("RestaurantScreen", { restaurant: item });
  };

  const onTapFoodDetail = (item: FoodModel) => {
    navigate("FoodDetailScreen", { foods: item });
  };

  return (
    <ContainerAll>
      <FlexRow>
        <Header>{location.region}</Header>
        <Header>{location.postalCode}</Header>
        <Header>{location.street}</Header>
      </FlexRow>
      <SearchArea>
        <SearchBar
          didTouch={() => {
            navigate("SearchScreen");
          }}
          onTextChange={() => {}}
        />
        <ButtonWithIcon
          onTap={() => {}}
          width={50}
          height={50}
          icon={require("../images/bar.png")}
        />
      </SearchArea>
      <RestaurantView>
        <ScrollView>
          
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categories}
            renderItem={({ item }) => (
              <CategoryCard item={item} onTap={() => alert("Foi")} />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </ScrollView>
      </RestaurantView>
      <TextHeader>RESTAURANTS </TextHeader>
      <RestaurantView>
        <ScrollView>
          <Flatilixt
            showsHorizontalScrollIndicator={false}
            horizontal
            data={restaurants}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onTapRestaurant} />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </ScrollView>
      </RestaurantView>
      <TextHeader>FOODS</TextHeader>
      <RestaurantView>
        <ScrollView>
          <Flatilixt
            showsHorizontalScrollIndicator={false}
            horizontal
            data={foods}
            renderItem={({ item }) => (
              <RestaurantCard item={item} onTap={onTapFoodDetail} />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </ScrollView>
      </RestaurantView>
    </ContainerAll>
  );
};
