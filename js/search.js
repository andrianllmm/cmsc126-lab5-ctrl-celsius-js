/**
 * Feature module for searching students.
 */

import { students } from "./student.js";

/**
 * Searches for a student by Student ID and renders their
 * properties into #search-result as a card, or shows an error
 * message if the record does not exist.
 */
export function find_student() {
  const input = document.getElementById("search-input").value.trim();
  const resultContainer = document.getElementById("search-result");

  // Clear previous result
  resultContainer.innerHTML = "";

  if (!input) return;

  const student = students.find((s) => s.studentNumber === input);

  if (!student) {
    resultContainer.innerHTML = `
      <p class="not-found">Student record does not exist.</p>
    `;
    return;
  }

resultContainer.innerHTML = `
    <div class="student-card">
      <div class="student-card-header">
        <h3 class="student-card-name">${student.name}</h3>
        <span class="student-card-id">${student.studentNumber}</span>
      </div>
      <div class="student-card-body">
        <p><span class="student-card-label">Age:</span> ${student.age}</p>
        <p><span class="student-card-label">Email:</span> ${student.email}</p>
        <p><span class="student-card-label">Course:</span> ${student.course}</p>
      </div>
    </div>
  `;
}