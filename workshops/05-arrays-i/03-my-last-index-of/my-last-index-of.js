// YOUR CODE BELOW

function myLastIndexOf(arr, search, start) {
  let num = -1;
  if ((arr, search, start)) {
    // for (i = start + 1; i < arr.length; i++) {// for initial wrong question
    for (i = 0; i < start; i++) {
      if (arr[i] === search) {
        num = i;
      }
    }
  } else {
    //for (i = 0; i < arr.length; i++) {for intial wrong question }
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === search) {
        //num = arr.length - i - 1; =>for initial wrong question
        num = i;
      }
    }
  }
  return num;
}
myLastIndexOf(["the", "girls", "bring", "the", "boys", "out"], "the", 2); // => 0
