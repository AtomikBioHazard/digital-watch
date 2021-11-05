import { updateHour } from "./Component";
import { alarmClear, alarmSet, hoursMenu, minsMenu, secsMenu } from "./modules/alarmSetUp";

const d = document,
  $set = d.getElementById("set-button"),
  $clear = d.getElementById("clear-button");

d.addEventListener("DOMContentLoaded", e => {
  updateHour();
  hoursMenu();
  minsMenu();
  secsMenu();
});
d.addEventListener("click", e => {
  if (e.target === $set) {
    alarmSet();
  } else if (e.target === $clear) {
    alarmClear();
  }
});

let interval = setInterval(updateHour, 1000);