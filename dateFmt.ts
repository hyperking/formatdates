export const dateFmt = function (date, fmt="%d, %D %M, %Y"){
    if(!date){date = new Date();}
    const months = "January,February,March,April,May,June,July,August,September,October,November,December".split(',')
    const days = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(',');
    const opts = { weekday:"long", year:"numeric", month:"short", day:"numeric"}
    const dobj = typeof date === 'string' ? date.replace(/\//g,'-').split('-').map(x=>Number(x.trim()))
        .reduce((m,num,i)=>{
            let key = num > 999 ? 'year': num<=12&&!m['month'] ? 'month' : 'day';
            console.log(num,key)
            m[key] = num;
            return m;
        },{}) : null;
    const d = dobj ? new Date(dobj.year,dobj.month,dobj.day) : date;
    const dt = d.getDate();
    const day = days[d.getDay()];
    const month_num = d.getMonth();
    const month = months[month_num];
    const month_abv = month.substring(0,2);
    const year = d.getFullYear();

    const fmtd = fmt
    .replace('%dd',dt<=9 ? `0${dt}`: dt)
    .replace('%d',day)
        .replace('%D',day.substring(0,3))
        .replace('%Y', year)
        .replace('%M', month)
        .replace('%mm', month_num)
        .replace('%m', month_abv);
    return fmtd;

}
