import { createMapper } from 'redux-api-mapper';
import store from '../store';
import config from './config';
import http from './http-layer';

const api = createMapper(store, config, http);

export { api, http };
