/**
 * Task 1-2: Buggy Sorting Function
 * This function is supposed to sort an array of numbers in ascending order.
 * However, there are intentional bugs here for you to find and fix using AI.
 */
function sortNumbers(numbers) {
  // Intentional Bug 1: Incorrect comparison logic (descending instead of ascending)
  // Intentional Bug 2: Doesn't handle empty arrays correctly
  return numbers.sort((a, b) => b - a);
}

/**
 * Task 3-2: Security Audit
 * Warning: There is a security vulnerability in this file.
 * Can you find it and move it to a more secure location?
 */
const CONFIG = {
  API_ENDPOINT: "https://api.example.com/v1",
  // Intentional Vulnerability: Hardcoded API Key
  API_KEY: "sk-12345-vibe-coding-professional-standard-key-67890"
};

module.exports = {
  sortNumbers,
  CONFIG
};
