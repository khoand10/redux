import FoodReducer from './food-reducer';
import UserReducer from './user-reducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer
});

export default allReducers;