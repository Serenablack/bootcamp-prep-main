// YOUR CODE BELOW
function maxOfThree(num1, num2, num3) {
  let max = num1;
  if (num1 <= num2 && num2 >= num3) {
    return (max = num2);
  } else if (num1 <= num3 && num2 <= num3) {
    return (max = num3);
  } else {
    return max;
  }
}
maxOfThree(5, 4, 10); // => 10

maxOfThree(7, 7, 4);
