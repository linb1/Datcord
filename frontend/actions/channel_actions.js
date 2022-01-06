import * as ChannelApiUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const removeChannel = (channelId) => ({
    type: REMOVE_CHANNEL,
    channelId
});

export const receiveChannelErrors = (errors) => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const removeChannelErrors = () => ({
    type: CLEAR_CHANNEL_ERRORS
});

export const clearChannelErrors = () => dispatch => (
    dispatch(removeChannelErrors())
);


export const requestChannels = () => dispatch => (
    ChannelApiUtil.requestChannels().then(channels => (
        dispatch(receiveChannels(channels))
    ))
);

export const requestChannel = (channelId) => dispatch => (
    ChannelApiUtil.requestChannel(channelId).then(channel => (
        dispatch(receiveChannel(channel))
    ))
);

export const createChannel = (channel) => dispatch => (
    ChannelApiUtil.createChannel(channel).then(channel => (
        dispatch(receiveChannel(channel))
    ), err => (
        dispatch(receiveChannelErrors(err.responseJSON))
    ))
);

export const deleteChannel = (channelId) => dispatch => (
    ChannelApiUtil.deleteChannel(channelId).then(channel => (
        dispatch(removeChannel(channel.id))
    ), err => (
        dispatch(receiveChannelErrors(err.responseJSON))
    ))
);






