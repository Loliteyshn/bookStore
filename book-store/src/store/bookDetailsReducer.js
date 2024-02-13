const SET_ID = 'SET_ID';
const SET_BOOK = "SET_BOOK";
const SET_BOOKS_CART = "SET_BOOKS_CART";

let initialState = {
    id: null,
    book: null,
    booksCart: null,
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
        case SET_BOOKS_CART:
            return {
                ...state,
                booksCart: action.booksCart
            }
        default:
            return state;
    }
}



export const setId = (id) => ({ type: SET_ID, id });
export const setBook = (book) => ({ type: SET_BOOK, book });
export const setBooksCart = (booksCart) => ({ type: SET_BOOKS_CART, booksCart })

export default bookDetailsReducer;