// YOUR CODE BELOW
function mostVowels(stri) {
  let stri1 = "";
  let count = 0;
  for (i = 0; i < stri; i++) {
    stri1 += stri[i];
    if (stri[i] === " ") {
      if (stri === "a" || "e" || "i" || "o" || "u") {
        count += 1;
      }
    }
  }
}
mostVowels("try my gym");
