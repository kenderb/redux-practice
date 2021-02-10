import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';


const unsubscribe = store.subscribe(() => {
  console.log('Subscribe!!', store.getState());
});
store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'new bug'
  }
});
store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'One more'
  }
});
unsubscribe();
store.dispatch({
  type: 'bugRemoved',
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