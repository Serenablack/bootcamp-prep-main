// YOUR CODE BELOW
function frequencyAnalysis(str) {
  let obj = {};
  let str1 = "";
  for (i = 0; i < str.length; i++) {
    str1 = str[i];
    console.log(str1);
    if (str1 in obj) {
      obj[str1]++;
    } else {
      obj[str1] = 1;
    }
  }
  return obj;
}
frequencyAnalysis("abca"); // => {a: 2, b: 1, c: 1}
