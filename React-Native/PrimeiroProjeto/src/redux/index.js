import { createStore, combineReducers } from 'redux';

import { reducers as postsReducers } from './posts';

const reducers = combineReducers({
    ...postsReducers,
});

const store = createStore(
    reducers,
    window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
