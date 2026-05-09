// In this file, you'll implement the functionality for your stopwatch.
// Here's a general outline of what you need to do:

// 1. Create variables to keep track of the stopwatch state
//    (e.g., time, isRunning, interval)

// 2. Implement functions to:
//    - Start the stopwatch
//    - Stop the stopwatch
//    - Reset the stopwatch
//    - Update the display

// 3. Add event listeners to the buttons to trigger the appropriate functions

// 4. Create a function to format the time (convert milliseconds to MM:SS:MsMs i.e 00:00:00 format)

// Remember to use clear and descriptive variable names, and add comments to explain your code.
// Good luck, and happy coding!
let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);
    showButton("STOP");
}

function stop() {
    clearInterval(timerInterval);
    showButton("START");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("START");
}

function showButton(buttonKey) {
    if (buttonKey === "STOP") {
        startBtn.disabled = true;
        stopBtn.disabled = false;
    } else {
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

// Event Listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Initial State
stopBtn.disabled = true;
print("00:00:00");