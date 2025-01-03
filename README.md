# Incorrect NaN Handling in Division Function

This repository demonstrates a common subtle bug in JavaScript related to the handling of NaN (Not a Number) values.  The `myFunction` in `bug.js` incorrectly handles division by zero and NaN, returning 0 in both scenarios. The corrected version in `bugSolution.js` provides a more robust solution.

## Bug
The original `myFunction` uses a simple check for 0 but doesn't account for NaN, resulting in unexpected behavior. 

## Solution
The improved function employs `Number.isNaN()` to explicitly check for NaN before performing the division, leading to better error handling. It now throws an error for NaN values, giving a clearer indication of the problematic input.
