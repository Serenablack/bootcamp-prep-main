// YOUR CODE BELOW
function backwardString(str) {
  if (str.length === 1) {
    console.log(str);
  } else {
    let str2 = str[str.length - 1];
    console.log(str2);
    str = str.slice(0, -1);
    backwardString(str);
  }
}
