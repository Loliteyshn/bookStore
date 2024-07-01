const ADD_BOOKS_CART = "ADD_BOOKS_CART";
const REMOVE_BOOK = "REMOVE_BOOK";
const TOTAL_PRICE = "TOTAL_PRICE";
const DECREASE_VALUE = "DECREASE_VALUE";
const INCREASE_VALUE = "INCREASE_VALUE";


let initialState = {
    booksCart: [],
    totalCountOfBooks: null,
    totalPrice: null,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKS_CART:
            const isExisting = state.booksCart.some(x => x.id === action.booksCart.id);
            if (!isExisting) {
                let cart = {
                    id: action.booksCart.id,
                    img: action.booksCart.volumeInfo.imageLinks.thumbnail,
                    title: action.booksCart.volumeInfo.title,
                    isAdded: true,
                    ownQuantity: 1,
                    price: action.booksCart.price
                }
                return {
                    ...state,
                    booksCart: [...state.booksCart, cart],
                    totalCountOfBooks: state.totalCountOfBooks + 1
                }
            }
            return {
                ...state,
                booksCart: state.booksCart.map(item =>
                    item.id === action.booksCart.id ? {...item, ownQuantity: item.ownQuantity + 1 } : item
                ),
                totalCountOfBooks: state.totalCountOfBooks + 1,
            }
        case REMOVE_BOOK:
            const removedBook = state.booksCart.find(book => book.id === action.bookId);
            const updatedTotalCount = state.totalCountOfBooks - removedBook.ownQuantity;
            return {
                ...state,
                booksCart: state.booksCart.filter(item => item.id !== action.bookId),
                totalCountOfBooks: updatedTotalCount
            };
        case TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.totalPrice
            }
        case DECREASE_VALUE:
            return {
                ...state,
                booksCart: state.booksCart.map(item => item.id === action.bookId ? {...item, ownQuantity: item.ownQuantity - 1 } : item, ),
                totalCountOfBooks: state.totalCountOfBooks - 1,
            }
        case INCREASE_VALUE:
            return {
                ...state,
                booksCart: state.booksCart.map(item =>
                    item.id === action.bookId ? {...item, ownQuantity: item.ownQuantity + 1 } : item
                ),
                totalCountOfBooks: state.totalCountOfBooks + 1,
            }
        default:
            return state;
    }
}

export const addBooksCart = (booksCart) => ({ type: ADD_BOOKS_CART, booksCart });
export const removeBooksFromCart = (bookId) => ({ type: REMOVE_BOOK, bookId });
export const setTotalPrice = (totalPrice) => ({ type: TOTAL_PRICE, totalPrice });
export const setDecreaseValue = (bookId) => ({ type: DECREASE_VALUE, bookId });
export const setIncreaseValue = (bookId) => ({ type: INCREASE_VALUE, bookId });


export default cartReducer;