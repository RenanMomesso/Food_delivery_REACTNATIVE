import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import ButtonWithIcon from "../components/ButtonWithIcon";
import FoodCard from "../components/FoodCard";
import { FoodModel, onUpdateCart, Restaurant, UserState } from "../redux";
import { checkExistence } from "../utils/cartHelper";

interface RestaurantProps {
  route: { params: { restaurant: Restaurant } };
  navigation: { goBack: Function };
  userReducer: UserState;
  onUpdateCart: Function;
}

interface ButtonProps {
  fontTamanho: number;
  fontWeight: string;
}
interface FoodsModel {
  _id: string;
  name: string;
  category: string;
  price: number;
  readyTime: number;
  images: [string];
  description: string;
  unit: number;
}

const widthDimension = Dimensions.get("screen").width;

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  margin-top: 20px;
  padding: 5px;
`;
const TextSimples = styled.Text`
  flex: 1;
  background-color: red;
`;

const ImageRestaurant = styled.ImageBackground`
  width: ${widthDimension};
  background-color: transparent;
  justify-content: flex-end;
  margin-bottom: 7px;
`;

const ViewRestaurant = styled.View``;

const ViewBack = styled.View`
  height: 50px;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TitleRestaurant = styled.Text`
  margin-left: 30px;
  font-size: 25px;
`;
const ImageView = styled.View``;
const ViewTextOnImage = styled.View`
  height: 120px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  color: white;
  padding-left: 20px;
`;

const TextImage = styled.Text<ButtonProps>`
  font-size: ${(props) => props.fontTamanho}px;
  font-weight: ${(props) => props.fontWeight};
  color: white;
`;

const FoodList = styled(FlatList as new () => FlatList<FoodsModel>)``;

const RestaurantScreen: React.FC<RestaurantProps> = (props) => {
  const restaurant: Restaurant = props.route.params.restaurant;
  const { goBack } = props.navigation;
  const { navigate } = useNavigation();

  const onTapFood = (item: FoodModel) => {
    navigate("FoodDetailScreen", { food: item });
  };

  const { Cart } = useSelector((state: RestaurantProps) => state.userReducer);

  return (
    <Container>
      <ViewBack>
        <ButtonWithIcon
          onTap={() => goBack()}
          width={42}
          height={42}
          icon={require("../images/backbutton.png")}
        />
        <TitleRestaurant> {restaurant.name}</TitleRestaurant>
      </ViewBack>
      <ImageView>
        <ImageRestaurant
          source={{ uri: `${restaurant.images[0]}` }}
          style={{ width: widthDimension, height: 350 }}
        >
          <ViewTextOnImage>
            <TextImage fontTamanho={40} fontWeight={"700"}>
              {restaurant.name}
            </TextImage>
            <TextImage fontTamanho={25} fontWeight={"500"}>
              {restaurant.address}
            </TextImage>
          </ViewTextOnImage>
        </ImageRestaurant>
      </ImageView>
      <FoodList
        data={restaurant.foods}
        renderItem={({ item }) => (
          <FoodCard
            item={checkExistence(item, Cart)}
            onTap={onTapFood}
            onUpdateCart={onUpdateCart}
          />
        )}
        keyExtractor={(item) => `${item}`}
      />
    </Container>
  );
};
export default RestaurantScreen;
