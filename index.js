let assignedScheduleDay = prompt("Ingrese el dia del turno que le habia sido asignado.");
let assignedScheduleMonth = prompt("Ingrese el mes del turno que le habia sido asignado.");
let assignedYearSchedule = prompt("Ingrese el año del turno que le habia sido asignado.")

let day = prompt("Ingrese el dia actual.")
let month = prompt ("Ingrese el mes actual.")
let year = prompt("Ingrese el año actual.");

const yourSchedule = (assignedScheduleDay, assignedScheduleMonth, assignedYearSchedule) => {
  if (passSchedule(assignedScheduleDay, assignedScheduleMonth, assignedYearSchedule)) {
    return "Lo sentimos, el turno asignado ya ha caducado";
  } else if (scheduleToday(assignedScheduleDay, assignedScheduleMonth, assignedYearSchedule)) {
    return "Usted tiene un turno el dia de hoy";
  } else {
    return "El turno asignado es dentro de " + (day - assignedScheduleDay) + " dias y " + (month - assignedScheduleMonth) + " meses.";
  }
};

const scheduleToday = (assignedScheduleDay, assignedScheduleMonth) => {
  if (assignedScheduleDay == day && assignedScheduleMonth == month) {
    return true;
  } else {
    return false;
  }
};

const passSchedule = (assignedScheduleDay, assignedScheduleMonth) => {
  if (assignedScheduleMonth > month || (assignedScheduleMonth == month && assignedScheduleDay > day)) {
    return true;
  } else {
    return false;
  }
};

console.log(yourSchedule (assignedScheduleDay, assignedScheduleMonth, year));
