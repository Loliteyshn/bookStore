import { combineReducers, legacy_createStore as createStore } from "redux";
import searchReducer from "./searchReducer";

let reducers = combineReducers({
    searchPage: searchReducer
})

let store = createStore(reducers);

window.store = store;

export default store;