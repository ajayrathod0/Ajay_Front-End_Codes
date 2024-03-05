document.getElementById('result');
result.value = '';

function txtfocus() {
    result.value += 'Starting typing....';
}

function txtblur() {
    result.value += 'Stop typing...';
}


var input = document.getElementById('txt');
function txtkeyup(event) {
    var digitCode = [48, 49, 50, 51, 52, 53, 54, 55, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    if (digitCode.indexOf(event.keyCode) >= 0) {
        input.value = input.value.substring(0, input.value.length - 1);
        result.value += 'number not allowed \n'
    } else {
        result.value += `${event.keyCode}\n`;
    }
}


function citychange() {
    var selectcity = document.getElementById('city').value;
    if (selectcity == '-1') {
        result.value += `please select ....\n `
        document.getElementById('cityerror').innerText = 'please select city !!';      

    } else {
        result.value += `Selected City :${selectcity} \n`;
    }
}
