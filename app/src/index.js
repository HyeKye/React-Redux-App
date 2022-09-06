import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer)

root.render(
  <Provider store={store}>
   <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


