import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import MainStack from './stack/MainStack'

export default function Routes(){
    return(
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}