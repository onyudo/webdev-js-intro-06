// Prevent us from attempting to use variables
// that are not declared
"use strict"

// Research the break and the continue keywords. Try to incorporate them in your experimentation.

/*

// a for loop with break

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        console.log('Found 5, breaking out of loop!');
        break; // Exit the loop when the number is 5
    }
    console.log(numbers[i]);
}

// a for loop with continue

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(numbers[i]); // Print only odd numbers 1, 3, 5, 7, 9
}

*/

// Simple while loop without break or continue

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
} // 1, 2, 3, 4, 5