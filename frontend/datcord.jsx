import React from "react";
import ReactDOM from "react-dom";
import {login, logout, signup} from "./actions/session_actions";
import {requestServer, requestServers, createServer, deleteServer} from "./actions/server_actions"
import { requestChannel, requestChannels, createChannel, deleteChannel } from "./actions/channel_actions"
import { createMembership, deleteMembership } from "./actions/membership_actions";
import configureStore from "./store/store"
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    //
    window.requestServer = requestServer;
    window.requestServers = requestServers;
    window.createServer = createServer;
    window.deleteServer = deleteServer;
    //
    window.requestChannel = requestChannel;
    window.requestChannels = requestChannels;
    window.createChannel = createChannel;
    window.deleteChannel = deleteChannel;
    //
    window.createMembership = createMembership;
    window.deleteMembership = deleteMembership;
    ReactDOM.render(<Root store={store} />, root);
});