// YOUR CODE BELOW
function myMnemonic(str1, str2 = " ", str3 = " ", str4 = " ") {
  let sum = "";
  // if ((str1, str2, str3, str4)) {
  let num = (sum += str1[0] + str2[0] + str3[0] + str4[0]);
  return num.trim(); // trims the spaces at the end or beginning of the string
  //}
  //   } else if ((str1, str2, str3)) {
  //     return (sum += str1[0] + str2[0] + str3[0]);
  //   } else if ((str1, str2)) {
  //     return (sum += str1[0] + str2[0]);
  //   } else {
  //     return (sum += str1[0]);
  //   }
}

console.log(myMnemonic("Must", "Accept", "Sugar", "Happiness")); // => MASH
console.log(myMnemonic("We", "Eat", "Eggs"));

console.log(myMnemonic("We", "Eat"));
console.log(myMnemonic("We"));
