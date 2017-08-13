import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import SearchReducer from '../Search/SearchReducer';

const Store = createStore(SearchReducer, applyMiddleware(thunk));

export default Store;
