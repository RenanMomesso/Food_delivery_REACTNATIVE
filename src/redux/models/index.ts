import {Address} from 'expo-location'
//category

export interface Category {
    id:Number;
    title:String;
    icon:String;
}

// Food Model

export interface FoodModel {
    _id: string;
    name:string;
    category:string;
    description:string;
    price:number;
    readyTime:number;
    images:[string]
    unit:number
}

// Restaurant model

export interface Restaurant {
    _id:string;
    name:string;
    foodType:string;
    address:string;
    phone:string;
    images:string;
    foods:[FoodModel];
}

export interface FoodAviability {
    categories: [Category];
    restaurants:[Restaurant];
    foods: [FoodModel]
}

export interface UserModel {
    firstName:string;
    lastName:String;
    contactNumber:String;
    token:string;
}

export interface UserState {
    user:UserModel;
    location:Address;
    error:string | undefined;
    Cart:[FoodModel]
}


export interface ShoppingState {
    aviability: FoodAviability,
    availableFoods: [FoodModel]
}