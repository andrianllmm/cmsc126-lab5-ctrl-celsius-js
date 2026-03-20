import { time_now } from "./time.js";

// DOM Elements
const btnShowDate = document.getElementById("show-current-date-btn");
const dateOutput = document.getElementById("current-date-output");

// Show current time
btnShowDate?.addEventListener("click", () => {
  dateOutput.innerHTML = time_now();
});
