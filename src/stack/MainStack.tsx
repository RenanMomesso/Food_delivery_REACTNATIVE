import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { HomeScreen } from "../screens/LandingPage";
import LandingScreen from "../screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { Text } from "react-native";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

export default () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Preload" component={LandingScreen} />
      <Screen name="StackNavigator" component={StackNavigator} />
    </Navigator>
  );
};
