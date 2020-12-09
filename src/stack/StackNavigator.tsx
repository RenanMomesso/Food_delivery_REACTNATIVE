import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabStack from './TabStack';
import SearchScreen from '../screens/SearchScreen';

export default () => {
    const StackNagiation = createDrawerNavigator()   
    
    return(
        <StackNagiation.Navigator>
            <StackNagiation.Screen component={TabStack} name="TabStack"  />
        </StackNagiation.Navigator>
    )
}