import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import shortid from 'shortid';

// selectors 
export const getFilteredCards = ({ cards, searchString}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getFilteredColumns =  (state) => state.columns; 

// action creators 
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid() }] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, {...action.newCard}]};
        case 'UPDATE_SEARCHSTRING': 
            return { ...state, searchString: action.payload };
        default:
            return state;
    }
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