/**
 * Feature module for displaying all students.
 */

import { students } from "./student.js";

/**
 * Displays all students in the table and updates the count badge.
 */
export function display_list() {
  const tbody = document.getElementById("students-tbody");
  const table = document.getElementById("students-table");
  const count = document.getElementById("student-count");

  // Clear previous rows
  tbody.innerHTML = "";

  // Populate rows
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.studentNumber}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
    `;
    tbody.appendChild(row);
  });

  // Update count badge
  count.textContent = students.length;

  // Show the table
  table.style.display = "table";
}