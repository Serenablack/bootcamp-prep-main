let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW

function leetTranslator(str) {
  let str1 = "";
  let obj = {};
  for (i = 0; i < letters.length; i++) {
    let obj2 = letters[i];
    obj[obj2] = leetChars[i];
  }
  for (i = 0; i < str.length; i++) {
    let sto = str[i].toLowerCase();

    str1 += obj[sto];
  }
  return str1;
}
leetTranslator("Fullstack");
