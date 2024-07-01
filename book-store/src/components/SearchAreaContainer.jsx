import { connect } from "react-redux";
import SearchArea from "./SearchArea";
import { setSearchValue, setBookList, setCurrentPage, setTotalBooksCount, setStartIndex, setPageSize, setPrice, setFilterPrice, setIsEmpty, getBooks, getBooksByPage } from "../store/searchReducer";
import BookList from "./BookList";

let SearchAreaContainer = (props) => {
    let onHandleSearch = () => {
        if (!props.inputValue) {
            alert("Enter the title of the book");
            return;
        }
        props.getBooks(props.inputValue, props.startIndex, props.pageSize);
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        if (!props.inputValue) {
            alert("Enter the title of the book");
            return;
        }
        props.getBooksByPage(props.inputValue, pageNumber, props.pageSize);
    }

    return <div>
        <SearchArea inputValue={props.inputValue}
            setSearchValue={props.setSearchValue}
            setBookList={props.setBookList}
            onHandleSearch={onHandleSearch}
            setFilterPrice={props.setFilterPrice} />
        <BookList bookList={props.bookList}
            totalBooksCount={props.totalBooksCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged} />
    </div>

}

let mapStateToProps = (state) => {
    return {
        inputValue: state.searchPage.inputValue,
        bookList: state.searchPage.bookList,
        currentPage: state.searchPage.currentPage,
        totalBooksCount: state.searchPage.totalBooksCount,
        startIndex: state.searchPage.startIndex,
        pageSize: state.searchPage.pageSize,
    }
}


export default connect(mapStateToProps, {
    setSearchValue, setBookList, setCurrentPage,
    setTotalBooksCount, setStartIndex, setPageSize,
    setPrice, setFilterPrice, setIsEmpty, getBooks, getBooksByPage
})(SearchAreaContainer);