'use strict';
import axios from 'axios';

export const getBooks = () => {

    return dispatch => {
        axios.get('/books')
            .then(response => {
                dispatch({
                    type: 'GET_BOOK',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_BOOKS_REJECTED',
                    payload: err
                })
            });
    }
}

export const postBooks = (book) => {

    return dispatch => {
        axios.post("/books", book)
            .then(response => {
                dispatch({
                    type: 'POST_BOOK',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'POST_BOOK_REJECTED',
                    payload: 'There was an error while posting a new book'
                })
            });
    }
}

export const deleteBooks = id => {
    return dispatch => {
        axios.delete('/books/' + id)
            .then(response => {
                dispatch({
                    type: 'DELETE_BOOK',
                    payload: id
                })
            })
            .catch(err => {
                dispatch({
                    type: 'DELETE_BOOK_REJECTED',
                    payload: err
                })
            });
    }
    return {
        type: 'DELETE_BOOK',
        payload: id
    }
}

export const updateBooks = book => {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}