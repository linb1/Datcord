import * as DmApiUtil from "../util/dm_api_util";

export const RECEIVE_DMS = 'RECEIVE_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';
export const REMOVE_DM = 'REMOVE_DM';
export const RECEIVE_DM_ERRORS = 'RECEIVE_DM_ERRORS';
export const CLEAR_DM_ERRORS = 'CLEAR_DM_ERRORS';
export const CLEAR_DMS = 'CLEAR_DMS';

export const receiveDms = (dms) => ({
    type: RECEIVE_DMS,
    dms
});

export const receiveDm = (dm) => ({
    type: RECEIVE_DM,
    dm
});

export const removeDm = (dmId) => ({
    type: REMOVE_DM,
    dmId
});

export const receiveDmErrors = (errors) => ({
    type: RECEIVE_DM_ERRORS,
    errors
});

export const removeDmErrors = () => ({
    type: CLEAR_DM_ERRORS
});

export const removeDmsFromState = () => ({
    type: CLEAR_DMS
})


export const clearDmsFromState = () => dispatch => (
    dispatch(removeDmsFromState())
);

export const clearDmErrors = () => dispatch => (
    dispatch(removeDmErrors())
);

export const requestDms = () => dispatch => (
    DmApiUtil.requestDms().then(dms => (
        dispatch(receiveDms(dms))
    ))
);

export const requestDm = (dmId) => dispatch => (
    DmApiUtil.requestDm(dmId).then(dm => (
        dispatch(receiveDm(dm))
    ))
);

export const createDm = (dm) => dispatch => (
    DmApiUtil.createDm(dm).then(dm => (
        dispatch(receiveDm(dm))
    ), err => (
        dispatch(receiveDmErrors(err.responseJSON))
    ))
);

export const deleteDm = (dmId) => dispatch => (
    DmApiUtil.deleteDm(dmId).then(dm => (
        dispatch(removeDm(dm.id))
    ), err => (
        dispatch(receiveDmErrors(err.responseJSON))
    ))
);