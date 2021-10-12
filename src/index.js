import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './24_redux_todo_app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './24_redux_todo_app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
