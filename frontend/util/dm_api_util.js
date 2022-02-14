export const requestDms = () => (
    $.ajax({
        method: "GET",
        url: "api/direct_messages",
    })
);

export const requestDm = (dmId) => (
    $.ajax({
        method: "GET",
        url: `api/direct_messages/${dmId}`
    })
);

export const createDm = (dm) => (
    $.ajax({
        method: "POST",
        url: `api/direct_messages`,
        data: { dm }
    })
);

export const deleteDm = (dmId) => (
    $.ajax({
        method: "DELETE",
        url: `api/direct_messages/${dmId}`
    })
);