import * as ServerApiUtil from "../util/server_api_util";
import { receiveChannels } from "./channel_actions";
import { receiveServerMembers } from "./user_actions";

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';
export const CLEAR_SERVERS = 'CLEAR_SERVERS';

export const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
});

export const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
});

export const removeServer = (serverId) => ({
    type: REMOVE_SERVER,
    serverId
});

export const receiveServerErrors = (errors) => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
});

export const removeServerErrors = () => ({
    type: CLEAR_SERVER_ERRORS
});

export const removeServersFromState = () => ({
    type: CLEAR_SERVERS
})

export const clearServersFromState = () => dispatch => (
    dispatch(removeServersFromState())
);

export const clearServerErrors = () => dispatch => (
    dispatch(removeServerErrors())
);


export const requestServers = () => dispatch => (
    ServerApiUtil.requestServers().then(servers => (
        dispatch(receiveServers(servers))
    ))
);

export const requestServer = (serverId) => dispatch => (
    ServerApiUtil.requestServer(serverId).then(server => {
        // debugger
        dispatch(receiveServer(server))
        dispatch(receiveChannels(server.channels))
        dispatch(receiveServerMembers(server.members))
    })
);

export const createServer = (server) => dispatch => (
    ServerApiUtil.createServer(server).then(server => {
        dispatch(receiveChannels(server.channels))
        return dispatch(receiveServer(server))
    }, err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
);

export const deleteServer = (serverId) => dispatch => (
    ServerApiUtil.deleteServer(serverId).then(server => (
        dispatch(removeServer(server.id))
    ), err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
);






