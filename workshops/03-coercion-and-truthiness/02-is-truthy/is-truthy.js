// YOUR CODE BELOW
function isTruthy(stri) {
  if (stri) {
    return true;
  }
  if (stri === false) {
    return "The boolean value false is falsey";
  }
  if (stri === null) {
    return "The null value is falsey";
  }
  if (stri === undefined) {
    return "undefined is falsey";
  }
  if (stri === 0) {
    return "The number 0 is falsey (the only falsey number)";
  }
  if (stri === "") {
    return "The empty string is falsey (the only falsey string)";
  }
}
isTruthy("I yearn for truth"); // => true
isTruthy(null);
