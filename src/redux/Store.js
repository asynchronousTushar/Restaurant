import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './Reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const Store = createStore(Reducer, applyMiddleware(logger, thunk));

export default Store;