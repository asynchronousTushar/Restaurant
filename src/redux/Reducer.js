import CommentsData from '../data/CommentsData';
import { combineReducers } from 'redux';
import * as actionType from "./actionTypes";
import { createForms } from 'react-redux-form';
import { initialContactForm } from './form';


const dishesReducer = (disheState = {isLoading: false, dishes: []}, action) => {
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

        default:
            return disheState;
    }
}

const commentsReducer = (commentstate = CommentsData, action) => {

    switch (action.type) {
        case actionType.addComment:
            
            let comment = action.payload;
            comment.id = commentstate.length;
            comment.date = new Date().toDateString();
            console.log(comment);

            return commentstate.concat(comment);
        
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