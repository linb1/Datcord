export const requestChannels = () => (
    $.ajax({
        method: "GET",
        url: "api/channels",
    })
);

export const requestChannel = (channelId) => (
    $.ajax({
        method: "GET",
        url: `api/channels/${channelId}`
    })
);

export const createChannel = (channel) => (
    $.ajax({
        method: "POST",
        url: `api/channels`,
        data: { channel }
    })
);

export const deleteChannel = (channelId) => (
    $.ajax({
        method: "DELETE",
        url: `api/channels/${channelId}`
    })
);