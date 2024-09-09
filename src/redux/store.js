import { createStore } from 'redux';
import wordReducer from './reducer';

const store = createStore(wordReducer);

export default store;