const cl = console.log.bind(console);

/*
=============== 
sidebar
===============
*/
const sidebar = document.querySelector(".sidebar");
const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
navBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

/*
=============== 
Range Calc.
===============
*/
const start = document.querySelector(".start");
const end = document.querySelector(".end");
const leapList = document.querySelector(".leap-list");
const showBtn = document.querySelector(".show-list");
const refreshBtn = document.querySelector(".refresh-btn");

/*
=============== 
Event Listeners
===============
*/
showBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const startYear = start.value;
  const endYear = end.value;
  if (startYear !== "" && endYear !== "") {
    if (
      dataTypeChecker(startYear) &&
      dataTypeChecker(endYear) &&
      startYear < endYear
    ) {
      if (getLeapYear(startYear, endYear).length === 1) {
        leapList.classList.add("showLeap-list");
        refreshBtn.classList.add("showRefresh-btn");
        getLeapYear(startYear, endYear);
        leapList.textContent = getLeapYear(startYear, endYear);
        displayAlert(
          `there is only ${
            getLeapYear(startYear, endYear).length
          } leap year between year ${startYear} and year ${endYear}`,
          "success"
        );
      } else {
        leapList.classList.add("showLeap-list");
        refreshBtn.classList.add("showRefresh-btn");
        getLeapYear(startYear, endYear);
        leapList.textContent = getLeapYear(startYear, endYear);
        displayAlert(
          `there are ${
            getLeapYear(startYear, endYear).length
          } leap years between year ${startYear} and year ${endYear}`,
          "success"
        );
      }
    } else {
      displayAlert("please enter valid years", "danger");
    }
  } else {
    displayAlert("please enter valid years", "danger");
  }
});
// refresh btn
refreshBtn.addEventListener("click", function () {
  start.value = "";
  end.value = "";
  leapList.classList.remove("showLeap-list");
  refreshBtn.classList.remove("showRefresh-btn");
  alert.textContent = "";
  alert.classList.remove("alert-success");
});

/*
=============== 
functions
===============
*/
function getLeapYear(start, end) {
  const leapYears = [];
  for (let year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }
  return leapYears;
}

// function to check if value is a number or text
function dataTypeChecker(value) {
  return !isNaN(value) && typeof value !== "boolean";
}

// alert
const alert = document.querySelector(".alert");
function displayAlert(text, type) {
  alert.textContent = text;
  alert.classList.add(`alert-${type}`);
  if (type == "success") {
    alert.textContent = text;
    alert.classList.add(`alert-${type}`);
  } else {
    // remove alert
    setTimeout(function () {
      alert.textContent = "";
      alert.classList.remove(`alert-${type}`);
    }, 1000);
  }
}
