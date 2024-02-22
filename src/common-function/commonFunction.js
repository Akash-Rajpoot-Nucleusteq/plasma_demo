export const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
};

export const getStatusBadgeClass = (status) => {
    switch (status) {
        case 'Approved':
            return 'badge badge-success';
        case 'Pending':
            return 'badge badge-warning';
        case 'Rejected':
            return 'badge badge-danger';
        default:
            return 'badge badge-secondary';
    }
};