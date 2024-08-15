import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import searchStringReducer from './searchStringRedux';

// action creators 
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

// const initialState = {
//   columns: []
// };

const store = createStore(
    reducer,  // referencja do funkcji reducer
    initialState,  // dane
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // pluginy ewentualnie middleware
);

export default store;