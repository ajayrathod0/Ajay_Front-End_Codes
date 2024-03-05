
//+++++++++++++++++++++    Event Bubbling : Inner to outer Element         ++++++++++++++++++++++++++== 

/*div1.addEventListener('click', divclick); //div par click karenge to sirf div hi click honga
spn.addEventListener('click', spanclick);//span par click karenge to span or div click honga kyu ki div tag ke under span tag hai
btn.addEventListener('click',buttonclick);//jab button ko click karte hai tab span or div bhi click honga 


document.getElementById('txt');
txt.value = '';

function divclick(event) {
    event.stopPropagation();
    txt.value += 'div clicked....\n';
}

function spanclick(event) {
    event.stopPropagation();
    txt.value += 'span clicked....\n';
}

function buttonclick(event) {
    event.stopPropagation(); // ab button ko click karne par div or span click/call nahi honge
    txt.value += 'button clicked....\n';
}

//event bubbling ko stop karne ke liye stoppropagtion() funtion hai
*/






//++++++++++++  Event capturing : outer to inner element ++++++++++++++++++++=
div1.addEventListener('click', divclick , true); // jab div ko click karte hai tab span or div bhi click honga 
spn.addEventListener('click', spanclick,true);//span par click karenge to button  click honga kyu ki span tag ke under button tag hai
btn.addEventListener('click', buttonclick ,true);//button par click karenge to sirf button hi click honga 


document.getElementById('txt');
txt.value = '';

function divclick(event) {
   // event.stopPropagation();
    txt.value += 'div clicked....\n';
}

function spanclick(event) {
   // event.stopPropagation();
    txt.value += 'span clicked....\n';
}

function buttonclick(event) {
    //event.stopPropagation(); // stop event capturing
    txt.value += 'button clicked....\n';
}