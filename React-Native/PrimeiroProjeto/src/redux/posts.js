import { createAction, handleActions } from 'redux-actions';

const ADD_POST_ACTION = 'POSTS/ADD';
const REMOVE_POST_ACTION = 'POSTS/REMOVE';
const CLEAR_POSTS_ACTION = 'POSTS/CLEAR';

const addPost = createAction(ADD_POST_ACTION, (description) => {
    return {
        description
    };
});
const removePost = createAction(REMOVE_POST_ACTION);
const clearPosts = createAction(CLEAR_POSTS_ACTION);

export const actions = {
    addPost,
    removePost,
    clearPosts,
}
