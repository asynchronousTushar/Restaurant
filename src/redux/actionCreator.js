import * as actionType from './actionTypes';
import DISHES from '../data/Products';

export const addComment = (dishId, author, rating, comment) => {
    return {
        type: actionType.addComment,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
    }
}

export const dishesLoading = () => {
    return {
        type: actionType.dishesLoading
    }
}

export const loadDishes = DISHES => {
    return {
        type: actionType.loadDishes,
        payload: DISHES
    }
}

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        setTimeout(() => {
            dispatch(loadDishes(DISHES))
        }, 2000);
    }
}