function btnClick() {

    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    // output.value = input.value;  // jo input me denge vahi button click karne par output me milenga



    //Split Words from input Sentence
    /*var words = input.split(' ');
    for (var i = 0; i < words.length; i++) {
        output.value += `${words[i]}\n`; // input me koi sentence likhenge to vaha sare space hata denga or (new line m) bad ke word aayenge
    }*/



    //Replace Vikul with Ajay
    //var result = input.replace('vikul', 'Ajay'); //input me jo sentence type karenge unme button click karne par  vikul ki jagah ajay kar denga
    /*   var result = input.replace(/vikul/gim, 'Ajay'); // g = globel, I = ignore case, M = multiline
       output.value = result;*/



    //Search in input
    /* var result = input.search('Ajay'); // serch function index return karta hai
     output.value = result;
 */


    // Split String
    /*var words = input.split('Ajay'); // sentence me jaha jaha ajay dikha usko remove karenga vaha se split karke new line me aage ke sentence print
    for (var i = 0; i < words.length; i++) {
        output.value += `${words[i]}\n`
    }
*/

    //Get all number from input
    /*var result = input.split('\\d+');
    output.value = result;
*/

    /*  var pattarn = new RegExp('\\d+', 'g'); //agar number raha to true denga nahi to false
      var result = pattarn.test(input);
      output.value = result;
  */
}

function clearValues() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');

    input.value = ' ';
    output.value = ' ';
}

function validateName() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    var pattern = new RegExp('\\d+', 'g'); //d dogit g globle  agar koi bhi number true deta hau RegExp function

    if (!pattern.test(input)) {
        output.value = 'Valid Name';
    } else {
        output.value = 'Name should not contain digits';
    }
}

function validateMobile() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    var pattern = new RegExp('\[6789][0-9]{9}$');//10 digit la hona chaiye 

    if (!pattern.test(input)) {
        output.value = ' Invaild Mobile Number';
    }
    else {
        output.value = 'Valid Mobile Number';
    }

}

function validateEmail() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    var pattern = new RegExp('\[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z0-9]{2,3}$');
    if (!pattern.test(input)) {
        output.value = 'Invalid Email';
    } else {
        output.value = 'Valid Email';
    }

}
function onKeyUpValidEmail() {
    var i = document.getElementById('input');
    var pattern = new RegExp('\[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z0-9]{2,3}$');
    if (!pattern.test(i)) {
        input.Style.background = 'red';
    } else {
        input.Style.background = 'green';
    }

}