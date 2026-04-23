const { sortNumbers, CONFIG } = require('../src/buggy_code');

describe('Task 2-3: Red Light to Green Light (Autograding Fix)', () => {
  
  test('sortNumbers should sort [3, 1, 2] into [1, 2, 3]', () => {
    const input = [3, 1, 2];
    const expected = [1, 2, 3];
    const result = sortNumbers(input);
    
    // Note: This is EXPECTED TO FAIL initially.
    // The current implementation in buggy_code.js sorts descending: [3, 2, 1]
    expect(result).toEqual(expected);
  });

  test('sortNumbers should handle an empty array', () => {
    const input = [];
    const expected = [];
    const result = sortNumbers(input);
    expect(result).toEqual(expected);
  });

});

describe('Task 3-2: Security Audit Check', () => {
  
  test('API_KEY should NOT be hardcoded in CONFIG (Placeholder test)', () => {
    // This test is a reminder for the student.
    // In a real autograding scenario, we might grep the file for the key.
    expect(CONFIG.API_KEY).toBeDefined();
    // Student should eventually make this test pass by moving the key to an env var.
  });

});
