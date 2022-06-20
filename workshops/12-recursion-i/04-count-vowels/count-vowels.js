// YOUR CODE BELOW
function countVowels(str) {
  let count = 0;
  debugger;
  if (str.length === 0) {
    return 0;
  }
  let st = str[str.length - 1];
  if (
    st == "a" ||
    st == "e" ||
    st == "i" ||
    st == "o" ||
    st == "u" ||
    st == "A" ||
    st == "E" ||
    st == "I" ||
    st == "O" ||
    st == "U"
  ) {
    count = 1;
  } else {
    count = 0;
  }

  return count + countVowels(str.slice(0, -1));
}
countVowels("Four score and seven years");
