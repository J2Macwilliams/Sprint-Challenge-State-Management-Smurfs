import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducer/index';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./components/App";

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById("root"));
