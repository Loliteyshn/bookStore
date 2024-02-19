import { combineReducers, legacy_createStore as createStore } from "redux";
import searchReducer from "./searchReducer";
import bookDetailsReducer from "./bookDetailsReducer";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
    searchPage: searchReducer,
    bookDetails: bookDetailsReducer,
    cart: cartReducer
});

let store = createStore(reducers);

window.store = store;

export default store;