import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    // aqui vão os reducers
});

const store = createStore(
    reducers,
    window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
