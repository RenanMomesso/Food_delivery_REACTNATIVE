import React from "react";
import { ViewProps, Dimensions } from "react-native";
import styled from "styled-components/native";
import ButtonWithIcon from "../components/ButtonWithIcon";
import FoodCard from "../components/FoodCard";
import { FoodModel } from "../redux";
interface FoodProps {
  route: { params: { food: FoodModel } };
  navigation: { goBack: Function };
}

const TextSimples = styled.Text<any>`
font-weight:${props => props.bolding ? props.bolding : 'normal'};
`;

const widthDimension = Dimensions.get("screen").width;

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  margin-top: 20px;
  padding: 5px;
`;

const ImageRestaurant = styled.ImageBackground`
  width: ${widthDimension};
  background-color: transparent;
  justify-content: flex-end;
  margin-bottom: 7px;
`;

const FoodView = styled.View<any>`
    height:${props => props.height ? props.height : '200px'};
    margin-top:12px;
    margin-left:10px;
`;

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

const TextImage = styled.Text<any>`
  font-size: ${(props) => props.fontTamanho}px;
  font-weight: ${(props) => props.fontWeight};
  color: white;
`;
const FoodDetailScreen: React.FC<FoodProps> = ({ route, navigation }) => {
  const { goBack } = navigation;

  const Food = route.params.food;

  return (
    <Container>
      <ViewBack>
        <ButtonWithIcon
          onTap={() => goBack()}
          width={42}
          height={42}
          icon={require("../images/backbutton.png")}
        />
        <TitleRestaurant> {Food.name}</TitleRestaurant>
      </ViewBack>
      <ImageView>
        <ImageRestaurant
          source={{ uri: `${Food.images[0]}` }}
          style={{ width: widthDimension, height: 350 }}
        >
          <ViewTextOnImage>
            <TextImage fontTamanho={33} fontWeight={"700"}>
              {Food.name}
            </TextImage>
            <TextImage fontTamanho={25} fontWeight={"500"}>
              {Food.category}
            </TextImage>
          </ViewTextOnImage>
        </ImageRestaurant>
      </ImageView>
      <FoodView height={150}>
        <TextSimples bolding={700}>{Food.description}</TextSimples>
        <TextSimples bolding={700}>This foods get ready in {Food.readyTime} minutes!</TextSimples>
       
      </FoodView>
      <FoodView height={120}>
          <FoodCard item={Food} onTap={()=>{}} />
      </FoodView>
    </Container>
  );
};
export default FoodDetailScreen;
