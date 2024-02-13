import { Component } from "react";

let SearchArea = (props) => {
    let inputValue = props.inputValue;

    let onInputChange = (e) => {
        let text = e.target.value
        props.setSearchValue(text);
    }

    let searchBooks = () => {
        props.onHandleSearch();
    }

    return <div>
        <input type="text" value={inputValue} onChange={onInputChange} />
        <button onClick={searchBooks}>Search</button>
    </div>

}



export default SearchArea;