//Clock
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var month = document.getElementById("month");
var day = document.getElementById("day");
var year = document.getElementById("year");

function setDate() {
  var now = new Date();
  var mm = now.getMonth();
  var dd = now.getDate();
  var yyyy = now.getFullYear();
  var secs = now.getSeconds();
  var mins = now.getMinutes();
  var hrs = now.getHours();
  var monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  if (hrs > 12) {
    hours.innerHTML = hrs - 12;
  } else {
    hours.innerHTML = hrs;
  }

  if (secs < 10) {
    seconds.innerHTML = "0" + secs;
  } else {
    seconds.innerHTML = secs;
  }

  if (mins < 10) {
    minutes.innerHTML = "0" + mins;
  } else {
    minutes.innerHTML = mins;
  }

  month.innerHTML = monthName[mm];
  day.innerHTML = dd + ", ";
  year.innerHTML = yyyy;
}

setInterval(setDate, 1000);

//Stopwatch
var body = document.getElementById("body");
window.onload = function() {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens2");
  var appendSeconds = document.getElementById("seconds2");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
  };

  buttonStop.onclick = function() {
    clearInterval(Interval);
  };

  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};


//Countdown
function getTimeRemaining() {
  var endtime = document.getElementById("endtime").value;
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock() {
  var endtime = document.getElementById("endtime").value;
  var outputDays = document.getElementById("days3");
  var outputHours = document.getElementById("hours3");
  var outputMinutes = document.getElementById("minutes3");
  var outputSeconds = document.getElementById("seconds3");
  outputDays.innerHTML = "Calculating";

  var timeinterval = setInterval(function() {
    var t = getTimeRemaining(endtime);
    outputDays.innerHTML = t.days + " Days";
    outputHours.innerHTML = t.hours;
    outputMinutes.innerHTML = t.minutes;
    outputSeconds.innerHTML = t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}
var Submit = document.getElementById("Submit");
Submit.addEventListener("click", function(event) {
  initializeClock();
});