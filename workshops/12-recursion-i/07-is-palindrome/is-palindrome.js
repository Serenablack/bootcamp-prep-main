// YOUR CODE BELOW
function isPalindrome(str) {
  if (str.length === 1) {
    return str;
  }
  debugger;
  let result = str[str.length - 1];
  str = str.slice(0, -1);
  result = result.concat(isPalindrome(str));

  if (str2.toLowerCase() === result.toLowerCase()) {
    return true;
  } else return false;
}
isPalindrome("abbba");
