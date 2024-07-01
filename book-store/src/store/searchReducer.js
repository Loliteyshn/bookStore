import { bookApi } from "../api/api";

const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
const SET_BOOK_LIST = "SET_BOOK_LIST";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_BOOKS_COUNT = "SET_TOTAL_BOOKS_COUNT";
const SET_START_INDEX = "SET_START_INDEX";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_PRICE = 'SET_PRICE';
const SET_FILTER_PRICE = "SET_FILTER_PRICE";
const IS_EMPTY = "IS_EMPTY";

let initialState = {
    inputValue: '',
    bookList: [],
    pageSize: 9,
    totalBooksCount: 0,
    startIndex: 0,
    currentPage: 1,
    isEmpty: false
}

let getRandomNumber = (minV = 10, maxV = 100) => {
    return minV + Math.floor(Math.random() * (maxV - minV + 1))
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
                bookList: action.bookList,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_BOOKS_COUNT:
            return {
                ...state,
                totalBooksCount: action.totalBooksCount
            }
        case SET_START_INDEX:
            return {
                ...state,
                startIndex: action.startIndex
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            }
        case SET_PRICE:
            return {
                ...state,
                bookList: state.bookList.map(item => ({
                    ...item,
                    price: getRandomNumber()
                }))
            }
        case SET_FILTER_PRICE:
            const sortedBooks = [...state.bookList].sort((a, b) => a.price - b.price);
            console.log(sortedBooks, 'dfs');
            return {
                ...state,
                bookList: sortedBooks
            };
        case IS_EMPTY:
            console.log("tut", state.isEmpty);
            return {
                ...state,
                isEmpty: true
            }
        default:
            return state;
    }
}

export const setSearchValue = (inputValue) => ({ type: SET_SEARCH_VALUE, inputValue });
export const setBookList = (bookList) => ({ type: SET_BOOK_LIST, bookList });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalBooksCount = (totalBooksCount) => ({ type: SET_TOTAL_BOOKS_COUNT, totalBooksCount });
export const setStartIndex = (startIndex) => ({ type: SET_START_INDEX, startIndex });
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize });
export const setPrice = () => ({ type: SET_PRICE });
export const setFilterPrice = () => ({ type: SET_FILTER_PRICE });
export const setIsEmpty = () => ({ type: IS_EMPTY });

export const getBooks = (inputValue, startIndex, pageSize) => (dispatch) => {
    bookApi.getBooks(inputValue, startIndex, pageSize).then(data => {
        dispatch(setBookList(data.items));
        dispatch(setTotalBooksCount(data.totalItems));
        dispatch(setPrice());
    })
}

export const getBooksByPage = (inputValue, pageNumber, pageSize) => (dispatch) => {
    bookApi.getBooksByPage(inputValue, pageNumber, pageSize).then(data => {
        dispatch(setBookList(data.items));
        dispatch(setPrice());
    })
}

export default searchReducer;