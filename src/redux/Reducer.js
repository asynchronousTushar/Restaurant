import { combineReducers } from 'redux';
import * as actionType from "./actionTypes";
import { createForms } from 'react-redux-form';
import { initialContactForm } from './form';


const dishesReducer = (disheState = { isLoading: false, dishes: [], errMessage: null }, action) => {
    switch (action.type) {
        case actionType.dishesLoading:
            return {
                ...disheState,
                isLoading: true,
                dishes: []
            }
        case actionType.loadDishes:
            return {
                ...disheState,
                isLoading: false,
                dishes: action.payload
            }
        case actionType.dishesLoadFailed:
            return {
                ...disheState,
                isLoading: false,
                errMessage: action.payload
            }

        default:
            return disheState;
    }
}

const commentsReducer = (commentstate = { isLoading: false, comments: [] }, action) => {

    switch (action.type) {
        case actionType.addComment:
            let newComment = [{
                ...action.payload,
                key: action.key
            }]
            return {
                ...commentstate,
                comments: commentstate.comments.concat(newComment)
            }

        case actionType.commentsLoading:
            return {
                ...commentstate,
                isLoading: true,
                comments: []
            }

        case actionType.loadComments:
            let comments = [];
            for (let key in action.payload) {
                comments.push({
                    ...action.payload[key],
                    id: key
                });
            }
            return {
                ...commentstate,
                isLoading: false,
                comments: comments
            }

        default:

            return commentstate;
    }
}

export const Reducer = combineReducers({
    dishes: dishesReducer,
    comments: commentsReducer,
    ...createForms({
        feedback: initialContactForm
    })
});