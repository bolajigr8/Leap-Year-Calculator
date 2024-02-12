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
Single Leap Calculations
===============
*/
const form = document.querySelector(".form");
const randomBtn = document.querySelector(".random-btn");
const text = document.querySelector(".text");
const resultText = document.querySelector("#result-text");
const alert = document.querySelector(".alert");
/*
=============== 
Event Listeners
===============
*/
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = text.value;
  if (value !== "") {
    resultText.textContent = leapCalc(value);
    refreshBtn.classList.add("btn-index");
    setBackToDefault();
  } else {
    displayAlert(`please input a year`, `danger`);
  }
});
randomBtn.addEventListener("click", function () {
  let randomYear = randomYearGenerator();
  text.value = randomYear;
  resultText.textContent = leapCalc(randomYear);
  refreshBtn.classList.add("btn-index");
});

/*
=============== 
functions 
===============
*/

// leapYear function
function leapCalc(year) {
  if (dataTypeChecker(year)) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return ` Year ${year} is a leap year.`;
        } else {
          return `Year ${year} is not a leap year.`;
        }
      } else {
        return `Year ${year} is a leap year.`;
      }
    } else {
      return `Year ${year} is not a leap year.`;
    }
  } else {
    displayAlert(`${year} is not a year`, `danger`);
  }
}
// set back to default
function setBackToDefault() {
  text.value = "";
}

// function to check if value is a number or text
function dataTypeChecker(value) {
  return !isNaN(value) && typeof value !== "boolean";
}

// alert
function displayAlert(text, type) {
  alert.textContent = text;
  alert.classList.add(`alert-${type}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${type}`);
  }, 1000);
}

// random function
function randomYearGenerator() {
  const currentYear = new Date().getFullYear();
  const randomYear = Math.floor(Math.random() * (currentYear + 500));
  return randomYear;
}

// refresh btn
const refreshBtn = document.querySelector(".refresh-btn");
refreshBtn.addEventListener("click", function () {
  text.value = "";
  resultText.textContent = "";
  refreshBtn.classList.remove("btn-index");
});
