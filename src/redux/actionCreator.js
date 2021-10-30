import * as actionType from './actionTypes';
import axios from 'axios';
import { serverUrl } from './serverURL';

export const addComment = (dishId, author, rating, comment) => {
    return dispatch => {
        const newComment = {

            dishId: dishId,
            comment: comment,
            rating: rating,
            author: author,
            id: Math.random().toString()
        }
        newComment.date = new Date().toISOString();

        axios.post(serverUrl + "/CommentsData.json", newComment)
            .then(response => {
                console.log(JSON.parse(response.config.data));
                dispatch(commentConcat(JSON.parse(response.config.data), response.data.name))
            })
            .catch(err => console.log(err));
    }
}

export const commentConcat = (comment, key) => {
    return {
        type: actionType.addComment,
        payload: comment,
        key: key
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

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentsLoading());

        const commentsServerfetching = async () => {
            try {
                let comments = await axios(serverUrl + "CommentsData.json");
                dispatch(loadComments(comments.data));
            } catch (error) {
                console.log(error.message);
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
                let dishes = await axios(serverUrl + "DISHES.json");

                dispatch(loadDishes(dishes.data));

            } catch (error) {
                dispatch(dishesLoadFailed(error.message));
            }
        }
        dishesServerfetching();
    }
}