import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const TabArea = styled.View`
  height:60px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom:5px;
`;

const TabClick = styled.TouchableOpacity`
  flex: 1;
  width:100px;
  height:14px;
  justify-content: center;
  align-items:center;
`;

const IconImage = styled.Image`
width:35px;
height:35px;
background-color:transparent;
`;

export default (props) => {
  const navigation = useNavigation();
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TabArea style={{borderTopWidth:1,borderColor:'lightgray',backgroundColor:'white'}} >
      <View>
        <TabClick onPress={() => goTo("OfferPage")}>
            <IconImage source={require('../images/offer.png')} width={35} height={35}/>
        </TabClick>
      </View>
      <View>
        <TabClick onPress={() => goTo("HomeScreen")}>
        <IconImage source={require('../images/homie.png')} width={35} height={35}/>
        </TabClick>
      </View>
      <View>
        <TabClick onPress={() => goTo("CartPage")}>
        <IconImage source={require('../images/cart.png')} width={35} height={35}/>
        </TabClick>
      </View>
      <View>
        <TabClick onPress={() => goTo("AccountPage")}>
        <IconImage source={require('../images/profile.png')} width={35} height={35}/>
        </TabClick>
      </View>
    </TabArea>
  );
};
