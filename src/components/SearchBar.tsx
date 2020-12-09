import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";



interface SearchBarProps {
  onEndEdditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  onTextChange: Function;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onTextChange,
  autoFocus = false,

  onEndEdditing,
  didTouch,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={require("../images/searchIcon.jpg")} style={{width:25,height:25}} />
        <TextInput
          style={{ marginLeft: 15, flex: 9, display: "flex", fontSize: 20, height:25 }}
          placeholder="Search for foods"
          autoFocus={autoFocus}
            onEndEditing={onEndEdditing}
            onTouchStart={didTouch}
            onChangeText={(text)=>onTextChange(text)}
            

        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
   
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:10,
    flex:1,
  },
  searchBar: {
    display: "flex",
    height: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ededed",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 12,
    paddingRight: 10,
    borderColor: "lightgray",
    borderWidth: 2,
    
  },
});
export default SearchBar;
