import styles from '../styles/style.module.css';

let SearchArea = (props) => {
    let inputValue = props.inputValue;

    let onInputChange = (e) => {
        let text = e.target.value
        props.setSearchValue(text);
    }

    let searchBooks = () => {
        props.onHandleSearch();
    }

    return <div className={styles.searchArea}>
        <h2>Search for a book</h2>
        <div>
            <input type="text" value={inputValue} onChange={onInputChange} placeholder="Book title..." />
            <button onClick={searchBooks}>Search</button>
            <button onClick={() => props.setFilterPrice()}>Sort by price</button>
        </div>
    </div>

}

export default SearchArea;