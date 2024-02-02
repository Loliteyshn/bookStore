import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookDetails from "./ BookDetails";

function BookCard(props) {
  return (
      <div className="card-container">
        <img src={props.image} alt="" />
        <div className="desc">
          <h2>{props.title}</h2>
          <h3>{props.author}</h3>
          <p>{props.published}</p>
        </div>
      </div>
  );
}

export default BookCard;
