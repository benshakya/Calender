const monthHeader = document.querySelector("h1");
const monthHeaderDetail = document.querySelector("p");
const daysEl = document.querySelector(".dates-section");

const currentDate = new Date();
const monthIndex = currentDate.getMonth();
const lastDay = new Date(
  currentDate.getFullYear(),
  monthIndex + 1,
  0
).getDate();
const firstDay = new Date(currentDate.getFullYear(), monthIndex, 1).getDay();

const monthName = [
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

const currentMonth = monthName[monthIndex];

monthHeader.textContent = monthName[monthIndex];
monthHeaderDetail.textContent = currentDate.toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === currentDate.getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
