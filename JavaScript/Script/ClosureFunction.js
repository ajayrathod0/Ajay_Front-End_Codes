
function outer(a) {
    document.write(`Outer() function called ${a} <br/> `);
    function inner(b) {
        document.write(`Inner() function called ${b} <br/>`);
        return a + b;
    }
    //inner(10); // inner() call ho jayenga
    return inner; // esa bhi call ho jayenga par iska '()' outer ke () ke sath add karna padenga
    //return inner(40); // inner call ho jayenga
}

var result = outer(20)(30);
document.write(` a + b : ${result} <br/>`); //50





//Q.. MultipleA(2)(3)(4) = 24  Esa aana chaiye

function multiplea(a)
{
   function multipleb(b)
    {
      function  multiplec(c)
        {
            return a * b * c;
        }
        return multiplec;
    }
    return multipleb;
}

 result1 = multiplea(2)(3)(4);
document.write(`MultipleA(2)(3)(4) : ${result1} <br/>`);


