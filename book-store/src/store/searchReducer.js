const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
const SET_BOOK_LIST = "SET_BOOK_LIST";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_BOOKS_COUNT = "SET_TOTAL_BOOKS_COUNT";
const SET_START_INDEX = "SET_START_INDEX";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";

let initialState = {
    inputValue: '',
    bookList: [],
    pageSize: 10,
    totalBooksCount: 0,
    startIndex: 0,
    currentPage: 1
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

export default searchReducer;