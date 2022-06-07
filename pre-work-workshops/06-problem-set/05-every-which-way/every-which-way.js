// YOUR CODE BELOW
function everyWhichWay(num1, num2, num3) {
  if (num1 + num2 === num3) {
    let sum = num1 + num2;
    return sum;
  } else if (num1 - num2 === num3) {
    return num1 - num2;
  } else if (num1 * num2 === num3) {
    return num1 * num2;
  } else if (num1 / num2 === num3) {
    return num1 / num2;
  } else {
    return null;
  }
}
everyWhichWay(10, 20, 30); // => sum

everyWhichWay(50, 20, 30); // => difference

everyWhichWay(4, 4, 16); // => product

everyWhichWay(100, 10, 10); // => fraction

everyWhichWay(1, 1000, 50);
