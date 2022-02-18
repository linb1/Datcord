import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER_MEMBERS, RECEIVE_DM_MEMBERS, RESET_USERS, RECEIVE_FRIENDS } from '../actions/user_actions';
import { REMOVE_FRIENDSHIP } from '../actions/friendship_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_SERVER_MEMBERS:
            return  Object.assign({}, state, action.members);
        case RECEIVE_DM_MEMBERS:
            return Object.assign({}, state, action.members);
        case RECEIVE_FRIENDS:
            return Object.assign({},state, action.friends);
        case REMOVE_FRIENDSHIP:
            delete nextState[action.friendship.friend_id];
            return nextState;
        case RESET_USERS:
            let user = nextState[action.currentUserId];
            return {[action.currentUserId]: user}
        default:
            return state;
    }
};

export default usersReducer;
