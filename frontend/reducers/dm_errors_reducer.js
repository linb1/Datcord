import {
    RECEIVE_DM_ERRORS,
    RECEIVE_DM,
    CLEAR_DM_ERRORS
} from '../actions/dm_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DM_ERRORS:
            return action.errors;
        case RECEIVE_DM:
            return [];
        case CLEAR_DM_ERRORS:
            return [];
        default:
            return state;
    }
};