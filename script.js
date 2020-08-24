// Current Day Jumbo

let m = moment().format("dddd" + ", " + "MMMM" + " " + "Do");
$("#currentDay").append(m);

const currentHour = moment().hour();
// Set Constants
const rows = document.querySelectorAll(".row");

// Set and retrieve local storage
function setLocalStorage(hour, value) {
  localStorage.setItem(hour, value);
}
function getLocalStorage(hour) {
  return localStorage.getItem(hour);
}

rows.forEach(row => {
  // split the label of the row to time and AM/PM
  const rowHourDetails = row.querySelector(".hour").innerHTML.split(" ");
  const rowHour = parseInt(rowHourDetails[0]);
  const isAfternoon = rowHourDetails[1] === "PM";
  const relativeHour = isAfternoon && rowHour !== 12 ? rowHour + 12 : rowHour;
  const textarea = row.querySelector(".timeBox");
  const submitBtn = row.querySelector(".submitBtn");

  // Set the color of the text area

  if (relativeHour === currentHour) {
    textarea.setAttribute("style", "background-color: red");
  } else if (relativeHour > currentHour) {
    textarea.setAttribute("style", "background-color: green");
  } else {
    textarea.setAttribute("style", "background-color: gray");
  }

  if (getLocalStorage(rowHour)) {
    textarea.innerHTML = getLocalStorage(rowHour);
  }
  submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    setLocalStorage(rowHour, textarea.value);
  });
});