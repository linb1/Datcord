
export const RECEIVE_SERVER_MEMBERS = "RECEIVE_SERVER_MEMBERS"
export const RESET_USERS = "RESET_USERS"

export const receiveServerMembers = members => ({
    type: RECEIVE_SERVER_MEMBERS,
    members
})

export const resetUsers = (currentUserId) => ({
    type: RESET_USERS,
    currentUserId
})

export const resetUserState = (currentUserId) => dispatch => (
    dispatch(resetUsers(currentUserId))
);
