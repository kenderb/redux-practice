import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import * as actions from "./actionTypes";


const unsubscribe = store.subscribe(() => {
  console.log('Subscribe!!', store.getState());
});
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'new bug'
  }
});
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'One more'
  }
});
unsubscribe();
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1
  }
});

console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);