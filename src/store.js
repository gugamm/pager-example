import { createApiReducer } from 'redux-api-mapper';
import { createStore, combineReducers } from 'redux';
import apiConfig from './api/config';

const rootReducer = combineReducers({
  api: createApiReducer(apiConfig),
});

const store = createStore(rootReducer);

export default store;
