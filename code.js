// Create your function here
// Log your output to the console.
function snapCrackle(maxValue) {
  let string1 = "";
  for (i = 1; i <= maxValue; i++) {
    if (i % 2 != 0) {
      string1 += "Snap, ";
    } else if (i % 5 == 0) {
      string1 += "Crackle, ";
    } else if (i % 2 != 0 && i % 5 == 0) {
      string1 += "SnapCrackle, ";
    } else {
      string1 += i + ", ";
    }
  }
  console.log(string1);
}

function snapCracklePrime(maxValue) {
  let string1 = "";
  for (i = 1; i <= maxValue; i++) {
    if (i % 2 != 0) {
      string1 += "Snap, ";
    } else if (i % 5 == 0) {
      string1 += "Crackle, ";
    } else if (i % 2 != 0 && i % 5 == 0) {
      string1 += "SnapCrackle, ";
    } else if (i > 1 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      string += "Prime, ";
    } else {
      string1 += i + ", ";
    }
  }
  console.log(string1);
}
