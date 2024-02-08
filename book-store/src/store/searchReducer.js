const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
const SET_BOOK_LIST = "SET_BOOK_LIST";

let initialState = {
    inputValue: '',
    bookList: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                inputValue: action.inputValue
            }
        case SET_BOOK_LIST:
            return {
                ...state,
                bookList: action.bookList
            }
        default:
            return state;
    }
}

export const setSearchValue = (inputValue) => ({ type: SET_SEARCH_VALUE, inputValue });
export const setBookList = (bookList) => ({ type: SET_BOOK_LIST, bookList });

export default searchReducer;