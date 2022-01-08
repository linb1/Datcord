import {
    RECEIVE_MEMBERSHIP,
    REMOVE_MEMBERSHIP,
} from '../actions/membership_actions';

const membershipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_MEMBERSHIP:
            return Object.assign({}, state, { [action.membership.id]: action.membership })
        case REMOVE_MEMBERSHIP:
            delete nextState[action.membership.id];
            return nextState;
        default:
            return state;
    }
};

export default membershipsReducer;