export function dateSetUpP(date, watch) {
  let {weekDay, day, month, year} = date,
    {WeekDay, Day, Month, Year} = watch;

  // Date setUp
  let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  WeekDay.textContent = weekDays[weekDay];

  Day.textContent = day;

  let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  Month.textContent = months[month];

  Year.textContent = year;
}