/*const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(8, 20));*/

/*function examResult(student = "name", grade = "Not provided") {
    console.log(`Student: ${student}, Grade: ${grade}`);
}

examResult(); // Outputs: Student: name, Grade: Not povided
examResult("Alice", "A+"); // Outputs: Student: Alice, Grade: A+
examResult("Bob"); // Outputs: Student: Bob, Grade: Not provided
*/

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum( 1, 2, 3, 4, 5)); // Outputs 15
console.log(sum(1, 2, 3)); // Outputs 6
console.log(sum(1, 2)); // Outputs 3
console.log(sum(1)); // Outputs 1
console.log(sum()); // Outputs 0