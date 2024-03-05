
//-------------------------------- Globle and Local Scope ---------------------------------------------
//----------------------------- Var, Let, and Const Keywords ---------------------------------------------
var a = 'globle variable';
let x = 'Let keyWord called';
const y = 'const keyword';

function printA(para) {
    // a = 'local variable called'; // call local or function B me bhi change ho jayenga
    var a = 'Local variable' // sirf yahi function me call honga ye local / printB me globle aayenga

    // var b = 'Local variable called' //only PrintA() call ho honga 
    b = 'b Local variable' // by default globle hota hai

    document.write(`PrintA() = A: ${a}  B : ${b} <br/>`);


    if (para === 10) {

        var result = 'TEN'; // Inside & OutSide dono me chalenga
       // let result = 'TEN'; // only inside call honga kru ki let only uske block scope me call honga
       //const result = 'TEN';
       // result = 'ONE'; // ek hi bar initialization kar sakte uske bad change nahi kar sakte hai

        document.write(`Inside block : ${result} <br/>`);
    }
    document.write(`Outside Block : ${result} <br/>`);
}

printA(10);
printB();
function printB() {
    document.write(`PrintB() : ${a}  B:${b} <br/>`);
}


//----------------------------- Variable Hoisting _______________________________________________

printc();

function printc() {

    document.write(`Printc() ; ${s} <br/>`); //undefined  : variable hoisting variable ko document ke uper 
                                             // le ja raha hai par value ko nahi le ja raha hai esliye undefined aa raha hai 
    var s = 'Hello hoisting';
}