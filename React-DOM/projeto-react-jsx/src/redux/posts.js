import { createAction, handleActions } from 'redux-actions';

// ACTIONS

const POSTS_ADD_ACTION = 'POSTS/ADD';
const POSTS_CLEAR_ACTION = 'POSTS/CLEAR';
const POSTS_REMOVE_ACTION = 'POSTS/REMOVE';

export const addPostAction = createAction(POSTS_ADD_ACTION, (description) => ({
    description
}));
export const clearPostsAction = createAction(POSTS_CLEAR_ACTION);
export const removePostAction = createAction(POSTS_REMOVE_ACTION);

// REDUCERS

const postsHandler = handleActions({
    [POSTS_ADD_ACTION]: (state, action) => {
        return [
            ...state,
            action.payload,
        ];
    },
    [POSTS_CLEAR_ACTION]: () => {
        return [];
    },
    [POSTS_REMOVE_ACTION]: (state, action) => {
        const newState = [...state];
        newState.splice(action.payload, 1)
        return newState;
    },
}, [])

export const reducers = {
    posts: postsHandler,
};
