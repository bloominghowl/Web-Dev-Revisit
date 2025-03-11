# Fun with Functions

## Instructions

Create different functions, both functions that return something and functions that don't return anything.

See if you can create a function that has a mix of parameters and parameters with default values.

## Rubric

| Criteria | Exemplary                                                                              | Adequate                                                         | Needs Improvement |
| -------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
|          | Solution is offered with two or more well-performing functions with diverse parameters | Working solution is offered with one function and few parameters | Solution has bugs |

```javascript
// A function that doesn't return a value
function examResult(student = "name", grade = "Not provided") {
    console.log(`Student: ${student}, Grade: ${grade}`);
}
// Log 
examResult(); // Outputs: Student: name, Grade: Not povided
examResult("Alice", "A+"); // Outputs: Student: Alice, Grade: A+
examResult("Bob"); // Outputs: Student: Bob, Grade: Not provided
```