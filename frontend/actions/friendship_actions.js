import * as FriendshipApiUtil from "./../util/friendship_api_util";

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP"
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP"

export const receiveFriendship = (friendship) => ({
    type: RECEIVE_FRIENDSHIP,
    friendship
});

export const removeFriendship = (friendship) => ({
    type: REMOVE_FRIENDSHIP,
    friendship
});

export const createFriendship = (friendship) => dispatch => (
    FriendshipApiUtil.createFriendship(friendship).then(friendship => (
        dispatch(receiveFriendship(friendship))
    ))
);

export const deleteFriendship = (friendship) => dispatch => (
    FriendshipApiUtil.deleteFriendship(friendship).then(friendship => (
        dispatch(removeFriendship(friendship))
    ))
);
