// YOUR CODE BELOW
function sumDigits(num) {
  debugger;
  stri = String(num);
  if (stri.length === 1) {
    return num;
  }
  let result = Number(stri[stri.length - 1]);
  stri = Number(stri.slice(0, -1));
  let sum = result + sumDigits(stri);
  return sum;
}
sumDigits(3456);
