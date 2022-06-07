// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  time = 0;
  if (currentNum <= targetNum) {
    for (i = 0; i < targetNum; i++) {
      time += 20;
    }
    return time;
  } else {
    return "targetNum must be larger than currentNum";
  }
}
console.log(bacteriaTime(1, 8)); // => 60
