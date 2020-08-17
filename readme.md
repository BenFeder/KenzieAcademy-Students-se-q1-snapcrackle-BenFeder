# SnapCrackle

Write a function named `snapCrackle` that takes one parameter: `maxValue`.

This function should loop through 1 up to `maxValue` (inclusive) and build a string with the following conditions:

1. If a number is odd, concatenate `"Snap, "` to the end of the string.
2. If a number is a multiple of 5, concatenate `"Crackle, "` to the end of the string.
3. If a number is both odd and a multiple of 5 concatenate `"SnapCrackle, "` to the end of the string.
4. If a number is neither odd or a multiple of 5, concatenate the number and `", "` to the end of the string.
5. This function should `console.log()` the final string after `maxValue` iterations of the loop.

## Example

`snapCrackle(12)` should display the string:

```
Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12,
```

## Bonus

Write a second function named `snapCracklePrime` with 1 additional rule: If a number is a prime number, concatenate `"Prime, "` to the end of your string
