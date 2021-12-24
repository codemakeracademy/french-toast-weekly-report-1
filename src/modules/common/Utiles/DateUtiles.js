
export const getCurrentAndPreviousDate = () =>{
    const today = new Date;
    const firstdayPrev = new Date;
    const lastdayPrev = new Date;
    const first = today.getDate() - today.getDay() + 1;
    const last = first + 6;
    const firstday = new Date(today.setDate(first));
    const lastday = new Date(today.setDate(last));
    firstdayPrev.setDate(firstday.getDate()-7);
    lastdayPrev.setDate(lastday.getDate()-7);
    return [firstday,lastday,firstdayPrev, lastdayPrev];
}
export const DateToString = (date) =>{
    return date.getFullYear() + "-" +(date.getMonth() + 1) + "-" + date.getDate()
}