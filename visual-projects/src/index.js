import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import App from './App';
 import { store } from './store/store';
import'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';


ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>,
   

  document.getElementById('root')
);


reportWebVitals();

