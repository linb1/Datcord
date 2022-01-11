import * as MembershipApiUtil from "./../util/membership_api_util";

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";

export const receiveMembership = (membership) => ({
    type: RECEIVE_MEMBERSHIP,
    membership
});

export const removeMembership = (membership) => ({
    type: REMOVE_MEMBERSHIP,
    membership
});


export const createMembership = (membership) => dispatch => (
    MembershipApiUtil.createMembership(membership).then(membership => (
        dispatch(receiveMembership(membership))
    ))
);

export const deleteMembership = (membership) => dispatch => (
    MembershipApiUtil.deleteMembership(membership).then(membership => (
        dispatch(removeMembership(membership))
    ))
);
// dispatch to member reducer not needed?