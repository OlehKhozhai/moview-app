import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import commonReducer from 'redux/_common/reducer';

const rootReducer = combineReducers({ common: commonReducer });
const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export type AppStore = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, enhancer);
