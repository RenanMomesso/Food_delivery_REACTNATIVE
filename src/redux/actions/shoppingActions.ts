import axios from 'axios';
import { Address } from 'expo-location'
import {Dispatch} from 'react'
import { BASE_URL } from '../../utils';
import { FoodAviability, FoodModel } from '../models';

export interface AviabilityAction {
    readonly type: 'ON_AVIABILITY',
    payload: FoodAviability;
}

export interface ShoppingErrorAction {
    readonly type: 'ON_ERROR_SHOPPING',
    payload: any;
}

export interface FoodSearchAction {
    readonly type: 'ON_FOODS_SEARCH',
    payload:[FoodModel]
}

export type ShoppingAction = AviabilityAction | ShoppingErrorAction | FoodSearchAction;

export const onAviability = (postalCode:string) => {

    return async (dispatch: Dispatch<ShoppingAction>) => {
        
      
        const response = await axios.get<FoodAviability>(`${BASE_URL}food/availability/${postalCode}`);
   
                try{
            if(!response){
                dispatch({
                    type:'ON_ERROR_SHOPPING',
                    payload:'Aviability error'
                })
            } else {
                dispatch({
                    type:'ON_AVIABILITY',
                    payload:response.data
                })
            }
        } catch (error){
            dispatch({
                type:"ON_ERROR_SHOPPING",
                payload:error
            })
        }
    }

}
export const onSearchFoods = (postalCode:string) => {
    return async (dispatch:Dispatch<ShoppingAction>) => {
        const resposne = await axios.get<[FoodModel]>(`${BASE_URL}food/search/${postalCode}`)
            console.log(resposne.data)
        try{
            if(!resposne){
                dispatch({
                    type:'ON_ERROR_SHOPPING',
                    payload:'availability error'
                })
            } else {
                dispatch({
                    type:'ON_FOODS_SEARCH',
                    payload:resposne.data
                })
            }
        }catch(error){
            dispatch({
                type:'ON_ERROR_SHOPPING',
                payload:error
            })
        }
    }
}