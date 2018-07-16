import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import allReducers from '../reducers';
import rootSaga from '../sags';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;