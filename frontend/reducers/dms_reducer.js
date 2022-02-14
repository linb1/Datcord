import { RECEIVE_DMS, RECEIVE_DM, REMOVE_DM, CLEAR_DMS } from './../actions/dm_actions'

const dmsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_DMS:
            return Object.assign({}, state, action.dms);
        case RECEIVE_DM:
            return Object.assign({}, state, { [action.dm.id]: action.dm })
        case REMOVE_DM:
            delete nextState[action.dmId];
            return nextState;
        case CLEAR_DMS:
            return {};
        default:
            return state;
    }
}
export default dmsReducer;