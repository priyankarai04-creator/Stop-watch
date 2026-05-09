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

/**
 * Converts time in milliseconds to MM:SS:mm string format
 * @param {number} time - Time in milliseconds
 */
function timeToString(time) {
    // Calculate total minutes
    let mm = Math.floor(time / 60000);
    
    // Calculate remaining seconds
    let ss = Math.floor((time % 60000) / 1000);
    
    // Calculate remaining centiseconds (1/100th of a second)
    let ms = Math.floor((time % 1000) / 10);

    // Pad with leading zeros
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    // Interval changed to 10ms to support centisecond updates
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10); 
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Event Listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Initial State
stopBtn.disabled = true;
