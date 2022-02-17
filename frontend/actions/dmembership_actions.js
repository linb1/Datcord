import * as DmembershipApiUtil from "./../util/dmembership_api_util";

export const RECEIVE_DMEMBERSHIP = "RECEIVE_DMEMBERSHIP";
export const REMOVE_DMEMBERSHIP = "REMOVE_DMEMBERSHIP";

export const receiveDmembership = (dmembership) => ({
    type: RECEIVE_DMEMBERSHIP,
    dmembership
});

export const removeDmembership = (dmembership) => ({
    type: REMOVE_DMEMBERSHIP,
    dmembership
});


export const createDmembership = (dmembership) => dispatch => (
    DmembershipApiUtil.createDmembership(dmembership).then(dmembership => (
        dispatch(receiveDmembership(dmembership))
    ))
);

export const deleteDmembership = (dmembership) => dispatch => (
    DmembershipApiUtil.deleteDmembership(dmembership).then(dmembership => (
        dispatch(removeDmembership(dmembership))
    ))
);