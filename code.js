// Create your function here
// Log your output to the console.
function snapCrackle(maxValue) {
  let string1 = "";
  for (i = 1; i <= maxValue; i++) {
    if (i % 2 != 0 && i % 5 == 0) {
      string1 += "SnapCrackle, ";
    } else if (i % 2 != 0) {
      string1 += "Snap, ";
    } else if (i % 5 == 0) {
      string1 += "Crackle, ";
    } else {
      string1 += i + ", ";
    }
  }
  console.log(string1);
}

// Bonus snapCracklePrime function
function snapCracklePrime(maxValue) {
  let string1 = "";
  for (i = 1; i <= maxValue; i++) {
    if (
      i > 1 &&
      (i % 2 != 0 || i == 2) &&
      (i % 3 != 0 || i == 3) &&
      (i % 5 != 0 || i == 5) &&
      (i % 7 != 0 || i == 7)
    ) {
      string1 += "Prime, ";
    } else if (i % 2 != 0 && i % 5 == 0) {
      string1 += "SnapCrackle, ";
    } else if (i % 2 != 0) {
      string1 += "Snap, ";
    } else if (i % 5 == 0) {
      string1 += "Crackle, ";
    } else {
      string1 += i + ", ";
    }
  }
  console.log(string1);
}
// Tests with maxValue = 100
snapCrackle(100);
snapCracklePrime(100);
