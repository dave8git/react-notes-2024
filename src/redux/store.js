import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import searchStringReducer from './searchStringRedux';

// selectors 
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFilteredColumns = (state) => state.columns;
export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getFavorite = ({ cards }) => cards.filter(card => card.isFavorite === true);

// action creators 
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });


// const reducer = (state, action) => {
//     console.log(action);
//     switch (action.type) {
//         case 'ADD_COLUMN':
//             console.log('action.type', action.type);
//             console.log('action.payload', action.payload);
//             return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
//         case 'ADD_CARD':
//             return { ...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
//         case 'ADD_LIST':
//             return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }] };
//         case 'UPDATE_SEARCHSTRING': 
//             console.log('action.payload', action.payload);
//             return { ...state, searchString: action.payload };
//         case 'TOGGLE_CARD_FAVORITE':
//             return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//         default:
//             return state;
//     }
// };


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