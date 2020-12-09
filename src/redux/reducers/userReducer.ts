import { Address } from 'expo-location'
import { UserAction } from '../actions'
import { FoodModel, UserModel, UserState } from '../models'

const initialState: UserState = {
    user: {} as UserModel,
    location: {} as Address,
    error: undefined,
    Cart: {} as [FoodModel]

}

const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case 'ON_UPDATE_LOCATION':
            return { ...state, location: action.payload }
            case 'ON_UPDATE_CART':
                console.log(action.payload)
                if(!Array.isArray(state.Cart)){
                    return {...state,
                    Cart:[action.payload]}
                }

                const existingFood = state.Cart.filter(item => item._id === action.payload._id)

                if(existingFood.length > 0 ){
                    let updateCart = state.Cart.map(food=>{
                        if(food._id === action.payload._id){
                            food.unit = action.payload.unit
                        }
                        return food
                    }) 
                    return {
                        ...state,
                        Cart: updateCart.filter(item => item.unit > 0)
                    }
                } else {
                    return {
                        ...state,
                        Cart:[...state.Cart, action.payload]
                    }
                }
        default:
            return state;
    }
}

export { userReducer }