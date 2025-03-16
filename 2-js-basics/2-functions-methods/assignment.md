# Fun with Functions

## Instructions

Create different functions, both functions that return something and functions that don't return anything.

See if you can create a function that has a mix of parameters and parameters with default values.

## Rubric

| Criteria | Exemplary                                                                              | Adequate                                                         | Needs Improvement |
| -------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
|          | Solution is offered with two or more well-performing functions with diverse parameters | Working solution is offered with one function and few parameters | Solution has bugs |

*The code below logs a message to the console, but doesn't return a value.*
```javascript
// A function that doesn't return a value
function examResult(student = "name", grade = "Not provided") {
    console.log(`Student: ${student}, Grade: ${grade}`);
}
// Logged messages 
examResult(); // Outputs: Student: name, Grade: Not povided. ()
examResult("Alice", "A+"); // Outputs: Student: Alice, Grade: A+
examResult("Bob"); // Outputs: Student: Bob, Grade: Not provided
```
**Explanation:** The *examResult* function has default parameters *students* and *grade*, with the values *name* and *Not provided*, respectively. And as demonstrated on lines 22 to 24, if no arguments are provided, the default value is used.

 *The code below returns a value and logs a message to the console*
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum( 1, 2, 3, 4, 5)); // Outputs 15
console.log(sum(1, 2, 3)); // Outputs 6
console.log(sum(1, 2)); // Outputs 3
console.log(sum(1)); // Outputs 1
console.log(sum()); // Outputs 0
```