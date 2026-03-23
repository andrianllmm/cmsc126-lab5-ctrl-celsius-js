/**
 * Entry point
 * Initializes app by attaching event listeners to DOM elements
 */

import { time_now } from "./time.js";
import { find_student } from "./search.js";
import { display_list } from "./display.js";


// DOM Elements
const btnShowDate = document.getElementById("show-current-date-btn");
const dateOutput = document.getElementById("current-date-output");
const btnSearch = document.getElementById("search-btn");
const inputSearch = document.getElementById("search-input");
const btnDisplayAll = document.getElementById("display-all-btn");

// Show current time
btnShowDate?.addEventListener("click", () => {
  dateOutput.innerHTML = time_now();
});

// Search student by ID
btnSearch?.addEventListener("click", find_student);

inputSearch?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") find_student();
});

// Display all students
btnDisplayAll?.addEventListener("click", display_list);