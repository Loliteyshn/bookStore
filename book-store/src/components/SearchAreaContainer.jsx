import { Component } from "react";
import { connect } from "react-redux";
import SearchArea from "./SearchArea";
import { setSearchValue, setBookList, setCurrentPage, setTotalBooksCount, setStartIndex, setPageSize, setPrice } from "../store/searchReducer";
import axios from "axios";
import BookList from "./BookList";

let SearchAreaContainer = (props) => {

   

    let onHandleSearch = () => {
        // console.log("tut: ", this.props.inputValue);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.inputValue}&startIndex=${props.startIndex}&maxResults=${props.pageSize}`)
            .then((response) => {
                console.log(response);
                props.setBookList(response.data.items);
                props.setTotalBooksCount(response.data.totalItems)
                props.setPrice();
            });
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.inputValue}&startIndex=${pageNumber}&maxResults=${props.pageSize}`)
            .then((response) => {
                console.log(response);
                props.setBookList(response.data.items);
                props.setPrice();
            });
    }

    return <div>
        <SearchArea inputValue={props.inputValue}
            setSearchValue={props.setSearchValue}
            setBookList={props.setBookList}
            onHandleSearch={onHandleSearch} />
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
        pageSize: state.searchPage.pageSize
    }
}



export default connect(mapStateToProps, {
    setSearchValue, setBookList, setCurrentPage,
    setTotalBooksCount, setStartIndex, setPageSize,
    setPrice
})(SearchAreaContainer);