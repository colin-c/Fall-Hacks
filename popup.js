// defining time variables, starting at 0 for all
let hours = 0;
let minutes = 0;
let seconds = 0;

// defining variables for the current time on the timer
let hoursCurrent = document.getElementById("hoursTimer");
let minutesCurrent = document.getElementById("minutesTimer");
let secondsCurrent = document.getElementById("secondsTimer");

// variables
let time;
let timerCountdown;


// increasing timer button
let increaseHours = document.getElementById("increaseHoursButton");
let increaseMinutes = document.getElementById("increaseMinutesButton");
let increaseSeconds = document.getElementById("increaseSecondsButton");

increaseHours.addEventListener("click", () => {
  timerIncrease("hours");
});
increaseMinutes.addEventListener("click", () => {
  timerIncrease("minutes");
});
increaseSeconds.addEventListener("click", () => {
  timerIncrease("seconds");
});


// decreasing timer button
let decreaseHours = document.getElementById("decreaseHoursButton");
let decreaseMinutes = document.getElementById("decreaseMinutesButton");
let decreaseSeconds = document.getElementById("decreaseSecondsButton");

decreaseHours.addEventListener("click", () => {
  timerDecrease("hours");
});
decreaseMinutes.addEventListener("click", () => {
  timerDecrease("minutes");
});
decreaseSeconds.addEventListener("click", () => {
  timerDecrease("seconds");
});


// starting, pausing, and ending the timer
let startTimer = document.getElementById("startTimerButton");
let pauseTimer = document.getElementById("pauseTimerButton");
let endTimer = document.getElementById("endTimerButton");

startTimer.addEventListener("click", () => {
  time = (hours * 3600) + (minutes * 60) + (seconds);
  if (time == 0) {
    alert("Oops, there seems to be an error. Try again!");
  }
  else {
    // display timer every second
    timerCountdown = setInterval(timer, 1000);
    timerOn();
  }
});

pauseTimer.addEventListener("click", () => {
  window.clearInterval(timerCountdown);
  pauseOrResume();
});

stopTimer.addEventListener("click", () => {
  window.clearInterval(timerCountdown);
  hours = 0;
  minutes = 0;
  seconds = 0;
  hoursCurrent.innerHTML = hours;
  minutesCurrent.innerHTML = minutes;
  secondsCurrent.innerHTML = seconds;
  timerOff();
});



// function for increasing timer
function timerIncrease(button) {
  if (button == "hours") {
    if (hours >=999) {
      hours = 0;
    }
    else {
      hours++;
    }
    hoursCurrent.innerHTML = hours;
  }

  else if (button == "minutes") {
    if (minutes >=59) {
      minutes = 0;
    }
    else {
    minutes++;
    }
    minutesCurrent.innerHTML = minutes;
  }
  
  else if (button == "seconds") {
    if (seconds >=59) {
      seconds = 0;
    }
    else {
    seconds++;
    }
    secondsCurrent.innerHTML = seconds;
  }

}

// function for decreasing timer
function timerDecrease(button) {
  if (button == "hours") {
    if (hours <=0) {
      hours = 999;
    }
    else {
      hours--;
    }
    hoursCurrent.innerHTML = hours;
  }

  else if (button == "minutes") {
    if (minutes <=0) {
      minutes = 59;
    }
    else {
    minutes--;
    }
    minutesCurrent.innerHTML = minutes;
  }
  
  else if (button == "seconds") {
    if (seconds <=0) {
      seconds = 59;
    }
    else {
    seconds--;
    }
    secondsCurrent.innerHTML = seconds;
  }

}


// function for starting countdown
function timer() {
  // this is in seconds
  time = time - 1;
  // round down to nearest integer for each category of time
  hoursCurrent.innerHTML = Math.floor((time/3600) % 999);
  minutesCurrent.innerHTML = Math.floor((time/60) % 60);
  secondsCurrent.innerHTML = Math.floor(time % 60);

  if (time < 0) {
    window.clearInterval(timerCountdown);
    hours = 0;
    minutes = 0;
    seconds = 0;
    hoursCurrent.innerHTML = hours;
    minutesCurrent.innerHTML = minutes;
    secondsCurrent.innerHTML = seconds;
    // perhaps change to PNG instead of statement
    alert("Time is UP!");
    timerOff();
  }
}

// when timer is on, hide the +/- buttons
function timerOn() {
  increaseHours.style.visibility = "hidden";
  increaseMinutes.style.visibility = "hidden";
  increaseSeconds.style.visibility = "hidden";
  decreaseHours.style.visibility = "hidden";
  decreaseMinutes.style.visibility = "hidden";
  decreaseSeconds.style.visibility = "hidden";
  startTimer.style.display = "none";
  pauseTimer.style.visibility = "visible";
  endTimer.style.visibility = "visible";
}

// when timer is off, hide the pause/stop buttons
function timerOff() {
  increaseHours.style.visibility = "visible";
  increaseMinutes.style.visibility = "visible";
  increaseSeconds.style.visibility = "visible";
  decreaseHours.style.visibility = "visible";
  decreaseMinutes.style.visibility = "visible";
  decreaseSeconds.style.visibility = "visible";
  startTimer.style.display = "block";
  pauseTimer.style.visibility = "hidden";
  endTimer.style.visibility = "hidden";
}

// function for pause and resume
function pauseOrResume() {
  if (pauseTimer.innerHTML == "Pause") {
    pauseTimer.innerHTML == "Resume";
  }

  else if (pauseTimer.innerHTML == "Resume") {
    pauseTimer.innerHTML == "Pause";
  }
}