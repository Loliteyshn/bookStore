import BookCard from "./BookCard";
import styles from "../styles/style.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addBooksCart } from '../store/cartReducer';

let BookList = (props) => {

    console.log(props);
    let pagesCount = Math.ceil(props.totalBooksCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    console.log(slicedPages);
    console.log(props.booksCart);

    return (
        <div className={styles.bookList}>

            {props.bookList.map((book, i) => (
                <div key={i} >
                    <span>
                        <Link to={{ pathname: `/books/${book.id}` }} >
                            <BookCard
                                img={book.volumeInfo.imageLinks?.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                                id={book.id}
                                price={book.price}
                            />
                        </Link>

                        <button onClick={() => props.addBooksCart(book)}>Add to cart</button>
                    </span>
                </div>


            ))}

            <div className={styles.slicedPages}>
                {slicedPages.map((p) => {
                    return (
                        <span
                            className={
                                props.currentPage === p ? styles.selectedPage : ""
                            }
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        booksCart: state.cart.booksCart,
        isAdded: state.cart.isAdded
    }
}

export default connect(mapStateToProps, { addBooksCart })(BookList);