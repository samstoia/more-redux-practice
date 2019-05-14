import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

store.subscribe(() => console.log('Look ma, Redux!!'))

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
