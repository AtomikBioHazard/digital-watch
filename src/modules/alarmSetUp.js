const d = document,
  $hours = d.getElementById("alarm-hrs"),
  $mins = d.getElementById("alarm-mins"),
  $secs = d.getElementById("alarm-secs"),
  $ampm = d.getElementById("alarm-ampm");

let mySound = new Audio("assets/alarma.mp3");
// "https://raw.githubusercontent.com/Xiija/TestFiles/master/Yuki%20%26%20Tako%2001.mp3";
mySound.loop = true;

let alarmTempo;

function addZero(params) {
  return params < 10 ? "0" + params : params;
}

function fillOptions(opt, val, params) {
  opt = opt;
  val = val;
  params = params;
  console.log(opt, val, params)
  for (let i = val; i <= params; i++) {
    opt[opt.options.length] = new Option(i < 10 ? "0" + i : i, i)
  }
}

function hoursMenu() {
  let hrs = 12;
  fillOptions($hours, 1, hrs);
}

function minsMenu() {
  let mins = 59;
  fillOptions($mins, 0, mins);
}

function secsMenu() {
  let secs = 59;
  fillOptions($secs, 0, secs);
}

function alarmSet() {
  let alarmHour = $hours.value,
    alarmMins = $mins.value,
    alarmSecs = $secs.value,
    alarmAMPM = $ampm.value;
  console.log(alarmHour, alarmMins, alarmSecs, alarmAMPM)

  let alarmTime = alarmHour + addZero(alarmMins) + addZero(alarmSecs) + alarmAMPM;

  alarmTempo = setInterval(() => {
    let currHr = d.getElementById("hrs").innerHTML,
      currMin = d.getElementById("minutes").innerHTML,
      currSec = d.getElementById("seconds").innerHTML,
      currAMPM = d.getElementById("ampm").innerHTML;

    let currTime = currHr + currMin + currSec + currAMPM;

    console.log(currTime);

    if (alarmTime === currTime) mySound.play();
  }, 1000);

  // console.log(alarmTime, currTime);
  // if (alarmTime === currTime) sound.play();

  $hours.disabled = true;
  $mins.disabled = true;
  $secs.disabled = true;
  $ampm.disabled = true;
}

function alarmClear() {
  clearTimeout(alarmTempo);
  mySound.pause();
  $hours.disabled = false;
  $mins.disabled = false;
  $secs.disabled = false;
  $ampm.disabled = false;
}

export {hoursMenu, minsMenu, secsMenu, alarmSet, alarmClear};