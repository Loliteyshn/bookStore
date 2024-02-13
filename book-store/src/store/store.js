import { combineReducers, legacy_createStore as createStore } from "redux";
import searchReducer from "./searchReducer";
import bookDetailsReducer from "./bookDetailsReducer";

let reducers = combineReducers({
    searchPage: searchReducer,
    bookDetails: bookDetailsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;