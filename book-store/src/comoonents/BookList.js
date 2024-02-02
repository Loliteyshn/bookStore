import React from "react";
import { Router, Routes } from "react-router-dom";
import BookCard from "./BookCard";
import BookDetails from "./ BookDetails";

function BookList(props) {
  console.log(props);
  return (
    <div>
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
            id={book.id}
          />
        );
      })}
    </div>
  );
}

export default BookList;
