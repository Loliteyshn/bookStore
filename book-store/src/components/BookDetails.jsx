import { useParams } from "react-router-dom";
import { getBook } from "../store/bookDetailsReducer";
import { connect } from "react-redux";
import { useEffect } from 'react';
import styles from "../styles/style.module.css";


let BookDetails = (props) => {
    const { id } = useParams()

    useEffect(() => {
        props.getBook(id);
    });

    return <div className={styles.detailsContainer}>
        <img src={props.book?.imageLinks.thumbnail} className={styles.imgContainer} />

        <div className={styles.descriptionContainer}>
            <h2>{props.book?.title}</h2>
            <h3>{props.book?.publishedDate}</h3>
            <p>{props.book?.subtitle}</p>
            <h3>Description</h3>
            <p>{props.book?.description}</p>
            <h3>Authors</h3>
            <p>{props.book?.authors}</p>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        id: state.bookDetails.id,
        book: state.bookDetails.book,
    }
}

export default connect(mapStateToProps, { getBook })(BookDetails);