```javascript
function myFunction(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('NaN values are not allowed.');
  } else if (a === 0 || b === 0) {
    return 0; 
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Output: 0
console.log(myFunction(10, NaN)); // Throws an error
```