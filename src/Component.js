import { dateSetUpP } from "./modules/dateSetUp.js";
import { watchSetUpP } from "./modules/watchSetUp.js";

export function updateHour() {
  const d = document;

  // Date type obj to extract the values
  let myDate = new Date();

  const dateSetUp = {
      hrs: myDate.getHours(),
      ampm: "",
      minutes: myDate.getMinutes(),
      seconds: myDate.getSeconds(),
      weekDay: myDate.getDay(),
      day: myDate.getDate(),
      month: myDate.getMonth(),
      year: myDate.getFullYear(),
    },
    watchSetUp = {
      Hrs: d.getElementById("hrs"),
      AMPM: d.getElementById("ampm"),
      Minutes: d.getElementById("minutes"),
      Seconds: d.getElementById("seconds"),
      WeekDay: d.getElementById("weekDay"),
      Day: d.getElementById("day"),
      Month: d.getElementById("month"),
      Year: d.getElementById("year"),
    };

  dateSetUpP(dateSetUp, watchSetUp),
  watchSetUpP(dateSetUp, watchSetUp);
}
