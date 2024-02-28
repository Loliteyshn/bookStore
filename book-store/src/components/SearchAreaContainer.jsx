import { Component } from "react";
import { connect } from "react-redux";
import SearchArea from "./SearchArea";
import { setSearchValue, setBookList, setCurrentPage, setTotalBooksCount, setStartIndex, setPageSize, setPrice, setFilterPrice, setIsEmpty } from "../store/searchReducer";
import axios from "axios";
import BookList from "./BookList";

let SearchAreaContainer = (props) => {
    let onHandleSearch = () => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.inputValue}&startIndex=${props.startIndex}&maxResults=${props.pageSize}`)
                props.setBookList(response.data.items);
                props.setTotalBooksCount(response.data.totalItems)
                props.setPrice();
            } catch (err) {
                alert("Enter the title of the book");
                console.log(err);
            }
        }
        fetchData();
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.inputValue}&startIndex=${pageNumber}&maxResults=${props.pageSize}`)
                console.log(response);
                props.setBookList(response.data.items);
                props.setPrice();
            } catch (err) {
                alert("Enter the title of the book");
                console.log(err);
            }
        }
        fetchData();
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
    setPrice, setFilterPrice, setIsEmpty
})(SearchAreaContainer);