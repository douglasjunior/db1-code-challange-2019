import { createAction, handleActions } from 'redux-actions';

const TASKS_RECEIVE_ACTION = 'TASKS/RECEIVE';
const TASKS_SET_FETCHING_ACTION = 'TASKS/SET_FETCHING';

export const receiveTasks = createAction(TASKS_RECEIVE_ACTION);
export const setFetchingTasks = createAction(TASKS_SET_FETCHING_ACTION);

const INITIAL_STATE = {
    fetching: false,
    data: [],
    error: null,
};

const tasksHandler = handleActions({
    [TASKS_RECEIVE_ACTION]: (state, action) => {
        const { data, error } = action.payload;
        return {
            ...state,
            data,
            error,
        };
    },
    [TASKS_SET_FETCHING_ACTION]: (state, action) => {
        return {
            ...state,
            fetching: action.payload,
        };
    },
}, INITIAL_STATE);

export const reducers = {
    tasks: tasksHandler,
};
