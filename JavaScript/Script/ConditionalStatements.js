function HighNum() {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var c = document.getElementById('third').value;


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Please Enter  Valid Number');
        return;
    }

    if (a == '' || b == '' || c == '') {
        alert('You missed to specify input for one ot two');
        return;
    }


    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    if (a > b) {
        if (a > c) {
            document.getElementById('highest').value = a;
        }
        else {
            document.getElementById('highest').value = c;
        }
    }
    else if (b > a) {
        if (b > c) {
            document.getElementById('highest').value = b;

        }
        else {
            document.getElementById('highest').value = c;
        }
    }
    else {
        if (c > a) {
            document.getElementById('highest').value = c;

        }
        else {
            document.getElementById('highest').value = a;

        }
    }
}

document.write('------------- nestead if else output -------------- <br/>');


var num = prompt('Enter  a Number');
document.write(`Number is : ${num}  <br/>`);

if (num == 10) {
    document.write(` TEN <br/>`);
}
else if (num == 20) {
    document.write(`Twenty <br/>`);
}
else if (num == 30) {
    document.write(` Thirty <br/>`);
}
else {
    ducoment.write('Not 10  20 or 30');
}


document.write('------------- switch output -------------- <br/>');

 switch(parseInt(num)) {
    case 10:
        ducoment.write(`Ten <br/>`);
        break;
    case 20:
        ducoment.write(`Twenty <br/>`);
        break;
    case 30:
        ducoment.write(`Thirty <br/>`);
        break;
    default:
        ducoment.write(`Not 10  20 or 30 <br/>`);
        break;
}