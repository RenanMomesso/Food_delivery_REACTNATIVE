import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/LandingPage";
import styled from "styled-components/native";
import OfferPage from "../screens/OfferPage";
import CartPage from "../screens/CartPage";
import AccountPage from "../screens/AccountPage";
import CustomComponent from "../components/CustomComponent";
import SearchScreen from "../screens/SearchScreen";
import FoodDetailScreen from '../screens/FoodDetailScreen'
import RestaurantScreen from '../screens/RestaurantScreen'


export const Iconi = styled.Image`
  width: 35px;
  height: 35px;
`;

export default () => {
  const BottomNavigation = createBottomTabNavigator();
  return (
    <BottomNavigation.Navigator
    tabBarOptions={{tabStyle:{backgroundColor:'white'}}}
    initialRouteName="HomeScreen"
      tabBar={(props) => <CustomComponent icones={props} />}
      screenOptions={{
        
        tabBarIcon: ({ focused }) => {
          let icon = focused
            ? require("../images/prato1.jpg")
            : require("../images/delivery.png");
          return <Iconi source={icon} height={35} width={35} />;
        },
      }}
    >
      <BottomNavigation.Screen name="HomeScreen" component={HomeScreen} />
      <BottomNavigation.Screen name="OfferPage" component={OfferPage} />
      <BottomNavigation.Screen name="CartPage" component={CartPage} />
      <BottomNavigation.Screen name="AccountPage" component={AccountPage} />
      <BottomNavigation.Screen name="SearchScreen" component={SearchScreen} />
      <BottomNavigation.Screen name="FoodDetailScreen" component={FoodDetailScreen} />
      <BottomNavigation.Screen name="RestaurantScreen" component={RestaurantScreen} />
    </BottomNavigation.Navigator>
  );
};
