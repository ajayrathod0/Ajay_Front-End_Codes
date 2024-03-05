function print() {
    document.write(`print() called <br/>`);
}
print();

function printB() {
    return " value return by printB() "
}
var result = printB();
document.write(`${result} <br/>`);

function PrintC(name) {
    document.write(`${name}`);
}
PrintC(' Ajay <br/>'); //Ajay

PrintC(); //undefined

PrintC(' Vishal <br/>', ' yatharth ', ' Ajay '); //Vishal

function counting(a, b) {
    document.write(`${a} + ${b} = ${a + b} <br/>`);

    document.write(`${arguments.length} <br/>`);//7

    for (var i = 0; i < arguments.length; i++) {
        document.write(`${arguments[i]} `); //10 13 25 12 34 56 3
    }
}

counting(10, 20); //10 + 20 = 30
document.write('<br/>');
counting(10, 13, 25, 12, 34, 56, 3);//10 + 13 = 23    first two argument lenga kyu parameter two hi hai
document.write('<br/>');

// agar sare argument get karna hai to uske lite argument object hai jo function me use
//kar sakte hai uper likha hai

//------------------------------------------------------------------------------------------------

// ----------------------------- default Parameter ----------------------------------------------

function defal(a, b = 24) {
    document.write(`default parameter ${a} + ${b} = ${a + b} <br/>`);
}

defal(10);//10 + 24 = 34

defal(20, 40, 10, 15, 30); //20 + 40 = 60





//Rest parameter : ko prefix karte hai ... se 
function PrintD(...number) {

    sum = 0;
    for (var i = 0; i < number.length; i++) {
        sum += number[i];
    }
    document.write(`Rest Parameter ${sum} <br/>`);
}

PrintD(10, 20, 30, 40); //100
PrintD(); //0
document.write(`<br/>`);



//--------------------- Expression function / anonymous function -------------------------------

var result = function () {
    document.write(`Expression funtion calles <br/>`);
}

result();//Expression funtion calles
document.write(`<br/>`);

var result1 = function fun() {
    return "Hello Ajay";
}
var ans = result1();
document.write(`${ans} <br/>`); //Hello Ajay


var result3 = function factorial(num) {
    var f = 1;
    for (var i = 1; i <= num; i++) {
        f *= i;
    }
    return f;
}
ans = result3(5); //120
document.write(`${ans} <br/>`);


var result4 = function factorials(num) {

    if (num == 1) {
        return 1;
    }

    return num * factorials(num - 1);
}
ans = result4(5); //120
document.write(`${ans} <br/>`);




//------------------Immediately-Invoked Function Expression-----------------------
//self invoke function
var result5 = (function factorials(num) {
    if (num == 1) {
        return 1;
    }

    return num * factorials(num - 1);
})(10);


ans = result5;
document.write(`${ans} <br/>`); //3628800




//---------------------------------- Arrow Function --------------------------------------------------------

var PrintS = () => document.write(`Arrow function PrintS() called <br/>`);

PrintS();//Arrow function PrintS() called

var PrintH = (a, b) => a + b;

var t = PrintH(10, 30);
document.write(`${t} <br/>`); //40



//-------------------------------- Differences -------------------------------

fun1(); //Normal function fun1()    "function hoisting" call ke bad defination
//fun2(); call nahi  honge
//fun3(); call nahi honge

function fun1() {
    document.write('Normal function fun1() <br/>');
}

var fun2 = function () {
    document.write(`Expression function called <br/>`);
}
fun2();

var fun3 = () => document.write(`Arrow Function called <br/>`);
fun3();