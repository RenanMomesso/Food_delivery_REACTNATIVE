import {combineReducers} from 'redux'
import {  ShoppingReducer} from './shoppingReducer'
import { userReducer} from './userReducer'

const rootReducer = combineReducers({
    userReducer:userReducer,
    ShoppingReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export {rootReducer}