import {ADD_FOOD} from './actionType';

export const selectFood = () => {
    console.log(`selected = ${food.name}`);
    return {
        type: ADD_FOOD,
        price: food
    }
}