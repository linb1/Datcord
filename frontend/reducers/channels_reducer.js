import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from './../actions/channel_actions'

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.channels);
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel })
        case REMOVE_CHANNEL:
            delete nextState[action.channelId];
            return nextState;
        default:
            return state;
    }
}
export default channelsReducer;