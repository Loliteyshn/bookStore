import React, { Component } from "react";
import "./App.css";
import Books from "./comoonents/Books";
import { Routes, Switch, Route } from "react-router-dom";
import BookList from "./comoonents/BookList";
import BookDetails from "./comoonents/ BookDetails";

function App() {
  return (
    <div>
      <Books />
    </div>
  );
}

export default App;
