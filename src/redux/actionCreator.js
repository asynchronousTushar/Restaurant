import * as actionType from './actionTypes';
import axios from 'axios';
import {serverUrl} from './serverURL';

export const addComment = (dishId, author, rating, comment) => {
    return dispatch => {
        const newComment = {
            dishId: dishId,
            comment: comment,
            rating: rating,
            author: author
        }
        newComment.date = new Date().toISOString();

        axios.post(serverUrl + "commentsData", newComment)
            .then(response => response.data)
            .then(comment => dispatch(commentConcat(comment)));
    }
}

export const commentConcat = comment => {
    return {
        type: actionType.addComment,
        payload: comment
    }
}

export const loadComments = comments => {
    return {
        type: actionType.loadComments,
        payload: comments
    }
}

export const commentsLoading = () => {
    return {
        type: actionType.commentsLoading
    }
}

export const fetchComments = () =>{
    return dispatch => {
        dispatch(commentsLoading());

        const commentsServerfetching = async () => {
            try {
                let comments = await axios(serverUrl + "commentsData");
                dispatch(loadComments(comments.data));

            } catch (error) {
                console.log("Comments:", error.message);
            }
        }
        commentsServerfetching();
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

export const dishesLoadFailed = errMess => {
    return {
        type: actionType.dishesLoadFailed,
        payload: errMess
    }
}

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        let dishesServerfetching = async () => {
            try {
                let dishes = await axios(serverUrl + 'DISHES');
                dispatch(loadDishes(dishes.data));
    
            } catch (error) {
                dispatch(dishesLoadFailed(error.message));
            }
        }
        dishesServerfetching();
    }
}