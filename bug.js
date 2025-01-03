```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause issues when a or b is NaN
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Output: 0
console.log(myFunction(10, NaN)); // Output: 0 (Incorrect)
```