import BookCard from "./BookCard";
import styles from "../styles/style.module.css";

let BookList = (props) => {

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

    return (
        <div className={styles.bookList}>

            {props.bookList.map((book, i) => (
                <div key={i}>
                    <span>
                        <BookCard
                            img={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            published={book.volumeInfo.publishedDate}
                            id={book.id}
                        />
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

export default BookList;