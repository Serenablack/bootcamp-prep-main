// YOUR CODE BELOW
function howEqual(num1, num2) {
  if (num1 === num2) {
    return "strictly";
  } else if (num1 == num2) {
    return "loosely";
  } else {
    return "not equal";
  }
}
howEqual(0, "0"); // => loosely
howEqual(3, 9 / 3); // => strictly
howEqual(true, "truthy");
