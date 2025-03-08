# Data Types Practice

## Instructions

Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?

## Rubric

Criteria | Exemplary | Adequate | Needs Improvement
--- | --- | --- | -- |
||The six data types are listed and explored in detail, documenting their use|Four datatypes are explored|Two data types are explored|
| | | |

## ASSIGNMENT SOLUTION

Data Type | Documentation | How choice was made | Example |
--- | ---| --- | --- |
| 1. String | Strings represent text data or sequence of characters that are single or double quoted. | Strings can be used for product names, and user information(e.g name, address). |  
```javascript
let ProductName = "Shea butter";
let productDescription = "Shea butter is a natural fat extracted from the nuts of the African shea tree, known for its moisturizing and healing properties."
```
|
| 2. Number | Numbers represent numerical data. | Numbers can be used for product prices, quantities, and total amount. | ```let productPrice = 9.99;```<br> ```let productQuantity = 4;``` <br> ```let totalPrice = productPrice * productQuantity;``` |
| 3. Boolean | Booleans represent true or false values. | Booleans can be used to indicate the non or availabilty of products, whether user is logged in or not, or if discount is applicable. | ```let isLoggedIn = false;``` <br> ```let isAvailable = true;``` |
| 4. Undefined | Undefined represents a declared variable with an unassigned value. | Undefined can be used for optional fields or data that has not been provided yet. | ```let discountCode;``` |
| 5. Null | Null represents the intentional absence of any object value. | Null can be used to reset values, or indicate that a field is intentionally left empty. | ```let selectedCoupon = null;``` |
| 6. Object | Objects are used to represent collections of data or more complex entities. | Object can be be used to respesent products, users, and even the shopping cart itself. | ```let product = {```<br>```name: "Shea butter,``` <br>```price: 9.99,``` <br>```quantity: 2,``` <br>```isAvailable: true ```<br>```};``` |
