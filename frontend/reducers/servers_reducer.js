import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER, CLEAR_SERVERS } from './../actions/server_actions'

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type){
        case RECEIVE_SERVERS:
            return Object.assign({}, state, action.servers);
        case RECEIVE_SERVER:
            return Object.assign({}, state, {[action.server.id]: action.server})
        case REMOVE_SERVER:
            delete nextState[action.serverId];
            return nextState;
        case CLEAR_SERVERS:
            return {};
        default:
            return state;
    }
}
export default serversReducer;