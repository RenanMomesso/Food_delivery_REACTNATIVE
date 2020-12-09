import axios from 'axios';
import { Dispatch } from 'react'
import { BASE_URL } from '../../utils';
import { Address } from 'expo-location'
import AsyncStorage from '@react-native-community/async-storage'
import { FoodModel } from '../models';

export interface UpdateLocationAction {
    readonly type: 'ON_UPDATE_LOCATION';
    payload: Address;
}

export interface UserErrorAction {
    readonly type: 'ON_USER_ERROR';
    payload: any;
}

export interface UpdateCartAction {
    readonly type: 'ON_UPDATE_CART';
    payload: FoodModel;
}

export type UserAction = UpdateLocationAction | UserErrorAction | UpdateCartAction

export const onUpdateLocation = (location: Address) => {
    return async (dispatch: Dispatch<UserAction>) => {
        const localString = JSON.stringify(location)
        await AsyncStorage.setItem('location_user',localString)
        
       try{
        dispatch({type:'ON_UPDATE_LOCATION',payload:location})
       }catch(error){
           dispatch({type:'ON_USER_ERROR',payload:error})
       }


    }
}

export const onUpdateCart = (item:FoodModel) => {
    return async (dispatch: Dispatch<UserAction>) => {
       dispatch({
           type:'ON_UPDATE_CART',
           payload:item
       })

    }
}


