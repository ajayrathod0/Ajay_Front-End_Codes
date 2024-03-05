//try catch block

try {
    sumof()
}
catch (a) {
    document.write(`function massege :  ${a.massage} <br/>`);//jo console par error aayenga vaha screen pr print honga
}
finally {
    document.write(`Finally block Excuted any time  <br/>`);
};

document.write(`Hello Pune <br/> <hr/>`);

//-----------------------------------------------------------------------------------------------------



//onerror event : yaha bhi error handle karta hai

window.onerror = function (massage, url,line)
{
    document.write(`Line Number : ${line}  <br/>    Url Error page : ${url}   <br/>  Error Massage : ${massage}  <br/>`);
    return true;
}

NonExistingFuntion()

document.write(`after OnError funtion massage`);
