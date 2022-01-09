import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER_MEMBERS, RESET_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_SERVER_MEMBERS:
            // debugger;
            return  Object.assign({}, state, action.members);
        case RESET_USERS:
            let user = nextState[action.currentUserId];
            return {[action.currentUserId]: user}
        default:
            return state;
    }
};

export default usersReducer;
