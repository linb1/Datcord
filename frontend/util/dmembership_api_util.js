export const deleteDmembership = (dmembership) => (
    $.ajax({
        url: `/api/dmemberships`,
        method: 'DELETE',
        data: { dmembership }
    })
);

export const createDmembership = (dmembership) => (
    $.ajax({
        url: `/api/dmemberships`,
        method: 'POST',
        data: { dmembership }
    })
);