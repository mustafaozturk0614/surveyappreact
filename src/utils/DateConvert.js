export const convertTimestampToDate = (timestamp) => {
    let date = new Intl.DateTimeFormat('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit' })
        .format(timestamp);
    return date;
}

export const getCurrentDate = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let actualMonth = month < 10 ? "0" + month : month;
    let year = today.getFullYear();
    let currDate = year + "-" + actualMonth + "-" + day;

    return currDate;
}

export const convertDateToTimestamp = (date) => {
    return Math.floor(new Date(date).getTime());
}