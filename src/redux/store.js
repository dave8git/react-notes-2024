import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  return state;
};

// const initialState = {
//   columns: []
// };

const store = createStore(
  reducer,  // referencja do funkcji reducer
  initialState,  // dane
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // pluginy ewentualnie middleware
);

export default store;