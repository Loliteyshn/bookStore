import { Component } from "react";
import { connect } from "react-redux";
import SearchArea from "./SearchArea";
import { setSearchValue, setBookList, setCurrentPage, setTotalBooksCount, setStartIndex, setPageSize } from "../store/searchReducer";
import axios from "axios";
import BookList from "./BookList";

class SearchAreaContainer extends Component {

    onHandleSearch = () => {
        // console.log("tut: ", this.props.inputValue);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.inputValue}&startIndex=${this.props.startIndex}&maxResults=${this.props.pageSize}`)
            .then((response) => {
                console.log(response);
                this.props.setBookList(response.data.items);
                this.props.setTotalBooksCount(response.data.totalItems)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.inputValue}&startIndex=${pageNumber}&maxResults=${this.props.pageSize}`)
            .then((response) => {
                console.log(response);
                this.props.setBookList(response.data.items);
            });
    }

    render() {
        return <div>
            <SearchArea inputValue={this.props.inputValue}
                setSearchValue={this.props.setSearchValue}
                setBookList={this.props.setBookList}
                onHandleSearch={this.onHandleSearch} />
            <BookList bookList={this.props.bookList}
                totalBooksCount={this.props.totalBooksCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged} />
        </div>
    }

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
    setTotalBooksCount, setStartIndex, setPageSize
})(SearchAreaContainer);