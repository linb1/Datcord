
export const requestFriends = () => (
    $.ajax({
        url: `/api/friendships`,
        method: 'GET',
    })
);

export const deleteFriendship = (friendship) => (
    $.ajax({
        url: `/api/friendships`,
        method: 'DELETE',
        data: { friendship }
    })
);

export const createFriendship = (friendship) => (
    $.ajax({
        url: `/api/friendships`,
        method: 'POST',
        data: { friendship }
    })
);