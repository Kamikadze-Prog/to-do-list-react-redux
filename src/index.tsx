import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ store }>
    <App />
    </Provider>,
    document.getElementById('root')
);
