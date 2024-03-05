
//GET CONTENT
function getContent() {
    var txt1 = document.getElementById('txt1').value; //input tag wale sare ki value 
    console.log(txt1);

    var p1 = document.getElementById('p1').innerText;
    console.log(p1);

    var div1 = document.getElementById('div1').innerText; //tag ke under ka content denga
    console.log(div1);

    var div1 = document.getElementById('div1').innerHTML;  // inner html pura tag name or tag ke under ka content de denga
    console.log(div1);
}


//SET CONTENT
function setContent() { // ye jo id hai unme set kar denge content 
    document.getElementById('txt2').value = 'Ajay';
    document.getElementById('p2').innerText = 'second para';
    document.getElementById('div2').innerHTML = '<a href ="http://www.google.com"> Visit Google   </a>';
}


function pwdShowHide() {
    var checkbox = document.getElementById('chkshowhide');
    var pwd = document.getElementById('password');
    if (checkbox.checked) {
        pwd.setAttribute('type', 'text');

    } else {
        pwd.setAttribute('type','password');
    }
}