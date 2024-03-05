
var today = new Date();
document.write(`date() current date : ${today} <br/>`);

var date = today.getDate();
document.write(`$Date : ${date} <br/>`);

var day = today.getDay(); // day() function index return karta hai
document.write(` today Day : ${day} <br/>`); //5  -  index (sun to sat)

var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
document.write(`${days[day]} <br/>`); //thu

var month = today.getMonth(); // month() bhi index return karta hai
document.write(`today month : ${month} <br/>`); //0

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
document.write(`${months[month]} <br/>`); //Jan

var year = today.getFullYear();
document.write(`today year : ${year} <br/>`);//2023


document.write(`Date : ${date} / ${month + 1} / ${year} <br/>`);//26/1/2024

document.write(`Date : ${date} -${month + 1}-${year} <br/>`); //26-1-2024


//-----------------------26/01/2024 --------------

function FormatDate(input) {
    var d = input.getDate();
    var m = input.getMonth()+1;
    var y = input.getFullYear();

    if (d < 10) {
        d = '0' + d;    
    }
    if (m < 10) {
        m = '0' + m;
    }
    return `${d}/${m}/${y}`;
}
var result = FormatDate(today);
document.write(`${result} <br/>`); //26/01/2024



var dob = new Date('25/02/2001');
document.write(`${dob} <br/>`);