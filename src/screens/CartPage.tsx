import React from 'react';
import {SafeAreaView,Text} from 'react-native'
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { UserState } from '../redux';


export const Header = styled.SafeAreaView`
  margin-top:100px;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid black;
`;

interface CartProps {
    userReducer:UserState
}


export default () => {
    const name = useSelector((state:CartProps) => state.userReducer.location)
    const tudoUser = useSelector((state:CartProps) => state.userReducer.Cart)
    return(
        <Header>
            <Text>CartPage</Text>
            <Text></Text>
            <Text></Text>
    <Text>{JSON.stringify(tudoUser)}</Text>
            <Text></Text>
            <Text></Text>
    <Text>{name.region}</Text>
        </Header>
    )
}