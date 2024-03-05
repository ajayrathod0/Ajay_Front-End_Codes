
document.getElementById('btn1').onclick = btnclick;

function btnclick() {
    alert('external javascript function called');
}

document.write('<br/> Variable value <br/>')

var a = 12;
document.write(a + '<br/>');

a = 'Ajay';
document.write(a + '<br/');

var b = 10.23;
document.write(b + '<br/>');

a = 10, b = 10;
document.write(`Addition ${a} + ${b} = ${a + b} <br/>`)

var mail = 'ajayjathod@yahoo.in';
c = mail.substring(0, 10);
document.write(c + '<br/>');


var email = 'ajayjathod@gmail.com';
var index = email.indexOf('@');
document.write(index + '<br/>');


var username = email.substring(0, index);
var Domain = email.substring(index + 1, email.length);
document.write(`Email: ${email} ,  usename : ${username} , Domain : ${Domain} <br/>`);


var name = 'AjayJathod';
document.getElementById('text').value = name;
document.write(name.toUpperCase() + '<br/>');
document.write(name.toLowerCase() + '<br/>');


var santance = '.NET, developed by Microsoft, is a versatile and widely-used framework for building and running applications.It provides a programming model, a comprehensive set of libraries, and a runtime environment for developing various types of applications, including web, desktop, mobile, cloud, and more.The.NET framework supports multiple programming languages, such as C#, Visual Basic, and F#, allowing developers to choose the language that best suits their needs.Additionally, .NET offers features like cross - language interoperability, garbage collection, and a unified development experience across different platforms.With the advent of.NET Core, the framework has become more modular and cross - platform, extending its reach to a broader range of development scenarios '

document.getElementById('lines').innerHTML = santance;
var r = santance.replace(/.NET/gi, 'C Sharp')
document.write(r + '<br/>');
