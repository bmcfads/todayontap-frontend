const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function getWeekdayFromDatetime(datetime) {
  const date = new Date(datetime);
  return weekdays[date.getDay()];
}

export function getMonthFromDatetime(datetime) {
  const date = new Date(datetime);
  return months[date.getMonth()];
}

export function getDayFromDatetime(datetime) {
  const date = new Date(datetime);
  return String(date.getDate()).padStart(2, "0");
}

export function getFullDateFromDatetime(datetime) {
  const weekday = getWeekdayFromDatetime(datetime);
  const month = getMonthFromDatetime(datetime);
  const day = getDayFromDatetime(datetime);
  return weekday + ", " + month + ", " + day;
}

export function getHoursFromDatetime(datetime) {
  const date = new Date(datetime);
  return String(date.getHours() % 12 || 12);
}

export function getMinutesFromDatetime(datetime) {
  const date = new Date(datetime);
  return String(date.getMinutes()).padStart(2, "0");
}

export function getMeridiemFromDatetime(datetime) {
  const date = new Date(datetime);
  return date.getHours() >= 12 ? "PM" : "AM";
}

export function getTimeFromDatetime(datetime) {
  const hours = getHoursFromDatetime(datetime);
  const minutes = getMinutesFromDatetime(datetime);
  const meridiem = getMeridiemFromDatetime(datetime);
  return hours + ":" + minutes + " " + meridiem;
}

export function getFullAddress(address) {
  return (
    address.street +
    ", " +
    address.city +
    ", " +
    address.postal_code.toUpperCase()
  );
}
