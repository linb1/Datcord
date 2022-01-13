import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";

const getChannelMessages = (state, action) => {
    const nextState = {};
    for (let [id, message] of Object.entries(action.channel.messages)) {
        nextState[id] = message;
    }
    return nextState;
}

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    switch (action.type) {
        case RECEIVE_CHANNEL:
            if (!action.channel.messages) return {};
            return getChannelMessages(state, action);
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, { [action.message.id]: action.message });
        case REMOVE_MESSAGE:
            delete nextState[action.message.id];
            return nextState;
        default:
            return state;
    }
}

export default messagesReducer;