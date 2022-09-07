// variables
let seconds = 00;
let tens = 00;
let min = 00;
let hr = 00;
// selectors 
// How are you getting an elementby id tens and there is no tens in the html ??? 
// let appendTens = document.getElementById("tens")
// console.log(appendTens)
let appendSeconds = document.getElementById("seconds")
let appendMin = document.getElementById("min")
let appendHr = document.getElementById("hr")
let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let buttonReset = document.getElementById('reset');
let timeInterval;

// events 
buttonStart.addEventListener("click", () => {
  console.log("hey")
  timeInterval = setInterval(timer, 1000)
})


buttonStop.addEventListener("click", () => {
  console.log("stop")
  clearInterval(timeInterval)
});


buttonReset.addEventListener('click', () => {
  clearInterval(timeInterval);
  tens = "00";
  seconds = "00";
  min = "00";
  hr = "00";
  // appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMin.innerHTML = min;
  appendHr.innerHTML = hr;
})

function timer() {
  //tens++;


  // if (tens <= 9) {
  //   appendTens.innerHTML = "0" + tens;
  // }

  // if (tens > 9) {
  //   appendTens.innerHTML = tens;

  // }
seconds++;
  if (seconds > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    seconds = 0;
    // appendTens.innerHTML = "0"+0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds <= 59) {
    min++;
    appendMin.innerHTML = "0" + min;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (min > 9) {
    appendMin.innerHTML = min;

  }
  if (min > 59) {
    hr++;
    appendHr.innerHTML = "0" + hr;
    min = 0;
    appendMin.innerHTML = "0" + 0;
  }
  if (hr > 9) {
    appendHr.innerHTML = hr;

  }


}
