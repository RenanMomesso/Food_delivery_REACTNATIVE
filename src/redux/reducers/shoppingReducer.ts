import { ShoppingAction } from '../actions'
import { FoodAviability, FoodModel, ShoppingState } from '../models'


const initialState = {
    aviability: {} as FoodAviability,
    availableFoods: {} as [FoodModel],
    
}

const ShoppingReducer = (state: ShoppingState = initialState, action: ShoppingAction) => {
    switch (action.type) {
        case 'ON_AVIABILITY':
            return { ...state, aviability: action.payload }
            case 'ON_FOODS_SEARCH':
                return {...state, availableFoods: action.payload}
        default:
            return state;
    }
}

export { ShoppingReducer }