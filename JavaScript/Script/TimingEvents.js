function ShowCurrentTiming() {
    var date = Date();
    document.getElementById('CurrentTime').innerText = date;
}

function startclock() {
    intervalId = setInterval(ShowCurrentTiming, 4000); // set interval repeat karta rahata jitne
    //time second parameter me do or yah ek interval id bhi deta hai
}

function stopClock() {
    clearInterval(intervalId); //clear karta hai input me id mangta hai jisko clear karna ho
}

function start() {
    alert('Game Over');
}

function startsession() {
   TimeoutId = setTimeout(start, 5000);
}

function StopSession() {
    clearTimeout(TimeoutId);
}