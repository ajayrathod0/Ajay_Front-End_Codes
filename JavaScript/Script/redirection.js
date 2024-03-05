function redirectionPage() {
    window.open('http://www.google.com'); //new tab me google ka page open ho jayenga
}

function redirectionAnotherPage() {
    //  window.open('getsetcontent.html'); //onclick par new tab par ye html ka page open honga
    // window.open('getsetcontent.html', '_self'); // same tab me open honga page
    //  window.open('getsetcontent.html','mywindow');//second parameter jo usme window ka name de sakate hai
    // window.open('getsetcontent.html','mywindow','height:200px, width:200px;'); //3rd parameter features hai usko cutmize kar sakte hai
    // window.open('getsetcontent.html','mywindow','height:200px,width:200px;',true); // 4th parameter history wala hai jo purane history ki jagah currant replace karta hai

    //code to execute before redirection 
    alert('you will be redirection to new page'); //pahale alert massage aayenga alert massage ko ok bolne ke bad  
    window.open('getsetcontent.html', 'mywindow');//getsetcontent.html page open honga

}