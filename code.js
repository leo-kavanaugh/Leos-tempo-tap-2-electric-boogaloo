//function that converts a time duration in ms to BPM

function convert(f) {
    return 60/(f/1000);
}
console.log(convert(1000))

/* 60 (beats in one minute) divided by a time difference in seconds is equal to the BPM
The function takes into account the conversion from milliseconds to seconds
Milliseconds are just an easier way to measure the time differential than fractions of a second */

//function that counts time between mouse clicks in milliseconds
/* function will act as a stopwatch that is started by a mouse click, and will count upwards in 
miliseconds up until 60,000ms (1 bpm) until the mouse is clicked again, and then bind that miliseconds value to a variable */

function clickCounter() {
    onclick
    document.getElementById()
}




//duplicate function that also counts time between mouse clicks in milliseconds
