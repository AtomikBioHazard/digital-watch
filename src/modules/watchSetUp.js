export function watchSetUpP(date, watch) {

  let {hrs, ampm, minutes, seconds} = date,
    {Hrs, Minutes, Seconds, AMPM} = watch;
  
  // Watch setUp
  if (hrs >= 12) {
    hrs -= 12;
    ampm = "PM";
  } else ampm = "AM";

  if (hrs === 0) hrs = 12;

  Hrs.textContent = hrs;
  AMPM.textContent = ampm;

  if (minutes < 10) minutes = "0" + minutes;

  if (seconds < 10) seconds = "0" + seconds;

  Minutes.textContent = minutes;
  Seconds.textContent = seconds;
}