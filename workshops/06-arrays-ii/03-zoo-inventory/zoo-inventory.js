// YOUR CODE BELOW
function zooInventory(arr) {
  let narr = [];
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr)) {
      for (j = 0; j < arr[i].length; j++) {
        narr.push(`the ${arr[i]} is ${arr[i + 1]}.`);
      }
    } else {
      narr.push(arr[i]);
    }
    return narr;
  }
}
