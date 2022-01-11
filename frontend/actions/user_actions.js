import * as FriendshipApiUtil from "./../util/friendship_api_util";

export const RECEIVE_SERVER_MEMBERS = "RECEIVE_SERVER_MEMBERS"
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS"
export const RESET_USERS = "RESET_USERS"

export const receiveServerMembers = members => ({
    type: RECEIVE_SERVER_MEMBERS,
    members
})

export const resetUsers = (currentUserId) => ({
    type: RESET_USERS,
    currentUserId
})

export const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
})

export const resetUserState = (currentUserId) => dispatch => (
    dispatch(resetUsers(currentUserId))
);

export const requestFriends = () => dispatch => (
    FriendshipApiUtil.requestFriends().then(friends => (
        dispatch(receiveFriends(friends))
    ))
)


export const deleteMembership = (membership) => dispatch => (
    MembershipApiUtil.deleteMembership(membership).then(membership => (
        dispatch(removeMembership(membership))
    ))
);