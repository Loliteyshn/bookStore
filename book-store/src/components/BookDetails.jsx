import { Component } from 'react'
import { useParams } from "react-router-dom";
import { setBook, setId } from "../store/bookDetailsReducer";
import { connect } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';
import styles from "../styles/style.module.css";


let BookDetails = (props) => {
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
                props.setBook(response.data.volumeInfo);
            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    });

    return <div className={styles.detailsContainer}>
        <img src={props.book?.imageLinks.thumbnail} className={styles.imgContainer} />

        <div className={styles.descriptionContainer}>
            <h2>{props.book?.title}</h2>
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

export default connect(mapStateToProps, {
    setBook, setId
})(BookDetails);