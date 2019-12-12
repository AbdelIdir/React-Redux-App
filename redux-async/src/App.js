import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import axios from "axios";

// https://api.coingecko.com/api/v3/exchange_rates
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bitmex API</p>
      </header>
    </div>
  );
}

export default App;
