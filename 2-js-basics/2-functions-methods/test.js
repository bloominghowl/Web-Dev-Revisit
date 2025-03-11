const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(8, 20));

function examResult(student = "name", grade = "Not provided") {
    console.log(`Student: ${student}, Grade: ${grade}`);
}

examResult(); // Outputs: Student: name, Grade: Not povided
examResult("Alice", "A+"); // Outputs: Student: Alice, Grade: A+
examResult("Bob"); // Outputs: Student: Bob, Grade: Not provided
