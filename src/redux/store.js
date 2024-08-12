import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid() }] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, {...action.newCard}]};
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