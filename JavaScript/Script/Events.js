//using Dom object                event        function           ------------------------------------------------------
/*document.getElementById('btn').onmouseover = mouseoverr;
document.getElementById('btn').onmouseout = mouseoutt;
document.getElementById('btn').onclick = btnclick;
*/


// using special method                                       --------------------------------------------------------
btn.addEventListener('mouseover', mouseoverr);
btn.addEventListener('mouseover', mouseoverr1); //ek event par 2 function use kar sakte hai
btn.addEventListener('mouseout', mouseoutt);
btn.addEventListener('click', btnclick);

function mouseoverr() {
    document.getElementById('btn');
    btn.style.background = 'red';
}
function mouseoverr1() {
    document.getElementById('btn');
    btn.style.color = 'white';
}
function mouseoutt() {
    document.getElementById('btn');
    btn.style.background = 'yellow';
}

function btnclick() {
    document.getElementById('btn');
    btn.value = 'button clicked'
}

//document.getElementById('search').focus();//focus function se kahi bhi cursor rahe to type ho jayenga search box me



/*document.getElementById('btn1');
btn1.addEventListener('mouseover', genericeventhandler);
btn1.addEventListener('click', genericeventhandler);
btn1.addEventListener('mouseout', genericeventhandler);
btn1.addEventListener('dblclick', genericeventhandler);
btn1.addEventListener('contextmenu', genericeventhandler);
btn1.addEventListener('mouseup', genericeventhandler);
*/


//input event / keybord event
/*document.getElementById('search');
search.addEventListener('focus', genericeventhandler);
search.addEventListener('blur', genericeventhandler);
search.addEventListener('keypress', genericeventhandler);
search.addEventListener('keydown', genericeventhandler);
search.addEventListener('keyup', genericeventhandler);
*/

var massages = document.getElementById('massages');
massages.value = '';


function genericeventhandler(event) {
    massages.value += `Event Type : ${event.type} \n`;
    massages.value += `Tag name : ${event.target.tagname}  tag type : ${event.target.type}\n`
}




document.getElementById('div1');
div1.addEventListener('mouseup', keyevent);
function keyevent(event) {
    massages.value += `Key code : ${event.which}   key name : ${btnname(event.which)} \n` //which property mouse ka value dengi konsa key click kiya hai 1,2,3
}

function btnname(code) {
    switch (code) {
        case 1:
            return 'left button';
        case 2:
            return "middle button";
        case 3:
            return "right button";
        default:
            return "Invalid Button";
    }
}




search.addEventListener('blur', validatesearch);

function validatesearch() {
    document.getElementById('search');
    if (search.value == '') {
        search.style.border = '1px solid red';
    }
    else {
        search.style.color = 'black';

    }

}