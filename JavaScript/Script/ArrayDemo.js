document.write(`Hello World <br/>`);

var numbers = [10, 20, 30, 'Ajay', 'Rathod']; //1th way
document.write(`Array Length : ${numbers.length} `);//5

document.write(`<br/>`);
for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `); //10, 20, 30, 'Ajay', 'Rathod'
}
document.write(`<br/>`);




// 1. push() method adds new item to the end of array.
// Also Increase Size.

var num1 = new Array(10, 20, 30); //2nd way
num1.push(40);
document.write(`push(40) ${num1.length} <br/>`); //4
for (var i = 0; i < num1.length; i++) {
    document.write(`${num1[i]} `);//10, 20, 30, 40
}
document.write(`<br/>`);




// 2. pop() method removes the last item of an array.
//Also Decrease The Size

num1.pop();
document.write(`num1.pop() : ${num1.length} <br/>`);//3
for (var i = 0; i < num1.length; i++) {
    document.write(`${num1[i]} `);//10 20 30
}
document.write(`<br/>`);


// 3. unshift() method adds new item at start of array.

num1.unshift(5);
document.write(`num1.unshift(5) : ${num1.length} <br/>`);//4
for (var i = 0; i < num1.length; i++) {
    document.write(`${num1[i]} `);//5 10 20 30
}
document.write(`<br/>`);


// 4. shift() method removes first item of an array.
num1.shift();
document.write(`num1.shift() : ${num1.length} <br/>`);//3
for (var i = 0; i < num1.length; i++) {
    document.write(`${num1[i]} `);//10 20 30
}
document.write(`<br/>`);


// 5. splice() method used to remove and add elements in array on index basis.
//             Syntax: - splice(Start, DeleteCount,item)
//             If we want to add or delete element in between array.

//multiple number add
num1.splice(0, 0, 5, 6, 7, 8);
document.write(`num1.splice(0, 0, 5, 6, 7, 8) : ${num1.length} <br/>`); //7
for (var i = 0; i < num1.length; i++) {
    document.write(`${num1[i]} `);//5 6 7 8 10 20 30
}
document.write(`<br/>`);

//multiple delete
num1.splice(0, 4); // 0 index start or 4 index tak delete
document.write(`um1.splice(0,4) : ${num1.length} <br/>`); //3
for (var i = 0; i < num1.length; i++) {
    document.write(`${num1[i]} `);//10 20 30
}
document.write(`<br/>`);

//add and delete one time m
num1.slice(1, 1, 15, 17);
document.write(`num1.slice(1,1,15,17) : ${num1.length} <br/>`); //3
for (var i = 0; i < num1.length; i++) {
    document.write(`${num1[i]} `);//10 20 30
}
document.write(`<br/>`);

// 6. reverse() method reverse the sequence of an array elements.
num1.reverse();




// 7. sort()
num2 = ['A', 'T', 'B'];
num2.sort();
for (var i = 0; i < num1.length; i++) {
    document.write(`${num2[i]} `);//A B T
}
document.write(`<br/>`);


// numbering sort number sort nahi honga uske liye function likhna padenga
num3 = [12, 335, 1, 456, 6, 78, 3,];
num3.sort(SortingNum);
document.write(`All number sorting <br/>`);
for (var i = 0; i < num1.length; i++) {
    document.write(`${num3[i]} `); //456 335 78
}
document.write(`<br/>`);

function SortingNum(a, b) {
    if (a < b) {
        return 1;
    }
    else if (a > b) {
        return -1;
    }
    else {
        return 0;
    }
}

// Filter()
number2 = [1, 2, 3, 4, 5, 6, 7, 8];
var result = number2.filter(filtering);
for (var i = 0; i < result.length; i++) {
    document.write(`${result[i]} `);//2 4 6 8
}
document.write(`<br/>`);

function filtering(value, index, array) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


// unique value from array useing filter

number3 = [1, 2, 3, 1, 3, 5, 6, 5];
var result1 = number3.filter(unique);
for (var i = 0; i < result1.length; i++) {
    document.write(`${result1[i]} `); //1 2 3 5 6     remove dublicate value
}
document.write(`<br/>`);

function unique(value, index, array) {
    var i = array.indexOf(value);
    if (i == index) {
        return true;
    } else {
        return false;
    }
}

//Map()
num = [1, 2, 3, 4, 5];
result = num.map(factorial);
for (var i = 0; i < result.length; i++) {
    document.write(`${result[i]} `); //1 4 9 16 25
}
document.write(`<br/>`);

function factorial(value, index, array) {
    return value * value;
}