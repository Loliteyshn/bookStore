import { Component } from "react";
import { connect } from "react-redux";
import SearchArea from "./SearchArea";
import { setSearchValue, setBookList } from "../store/searchReducer";
import axios from "axios";

class SearchAreaContainer extends Component {

    onHandleSearch() {
        axios.get()
    }

    render() {
        return <div>
            <SearchArea inputValue={this.props.inputValue}
                setSearchValue={this.props.setSearchValue}
                bookList={this.props.bookList}
                setBookList={this.props.setBookList}
                onHandleSearch={this.onHandleSearch} />
        </div>
    }

}

let mapStateToProps = (state) => {
    return {
        inputValue: state.searchPage.inputValue,
        bookList: state.searchPage.bookList
    }
}



export default connect(mapStateToProps, { setSearchValue, setBookList })(SearchAreaContainer);