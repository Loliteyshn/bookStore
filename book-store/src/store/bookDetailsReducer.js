import { bookApi } from "../api/api";

const SET_ID = 'SET_ID';
const SET_BOOK = "SET_BOOK";

let initialState = {
    id: null,
    book: null,
}

const bookDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                ...state,
                id: action.id
            }
        case SET_BOOK:
            return {
                ...state,
                book: action.book
            }
        default:
            return state;
    }
}

export const setId = (id) => ({ type: SET_ID, id });
export const setBook = (book) => ({ type: SET_BOOK, book });

export const getBook = (id) => (dispatch) => {
    bookApi.getBook(id).then(data => {
        dispatch(setBook(data.volumeInfo));
    })
}

export default bookDetailsReducer;