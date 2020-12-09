import React, { useEffect, useReducer, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { ApplicationState, UserState } from "../redux";
import { connect, useDispatch } from "react-redux";
import { onUpdateLocation } from "../redux/actions/userActions";

const Texto = styled.Text`
 width:100%;
  color: wheat;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export interface HomeProps {
  userReducer: UserState;
  onUpdateLocation: Function;
}

const LandingScreen: React.FC<HomeProps> = (props) => {
  const navigation = useNavigation();


  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.Address>();
  const [displayAddress, setDisplayAddress] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location is not granted");
    }

    let location = await Location.getCurrentPositionAsync();
    const { coords } = location;
    if (coords) {
      const { latitude, longitude } = coords;

      let addressResponse: any = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of addressResponse) {
        setAddress(item);
        dispatch(onUpdateLocation(item));
        let currentAddress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.region}`;
        setDisplayAddress(currentAddress);
        if (currentAddress.length > 0) {
          setTimeout(() => {
            navigation.reset({
              routes: [{ name: "StackNavigator" }],
            });
          }, 3000);
        }
        return;
      }
    } else {
      alert("Something went wrong, please try restart this app.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image style={styles.img} source={require("../images/delivery.png")} />
      </View>

      <View style={styles.footer}>
        <Texto >{displayAddress}</Texto>
      </View>
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  navigation: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  body: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    width: 300,
  },
  img: {
    flex: 2,
    maxHeight: 300,
    maxWidth: 400,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },
  footer: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -30,
  },
  textoLogo: {
    fontSize: 20,
    color: "white",
  },
});
