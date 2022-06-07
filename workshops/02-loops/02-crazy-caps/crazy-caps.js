// YOUR CODE BELOW
function crazyCaps(str) {
  let conc = "";

  conc += str[0];
  for (i = 1; i < str.length; i++) {
    if (i % 2 != 0 && str[i] != " ") {
      conc += str[i].toUpperCase();
    } else {
      conc += str[i];
    }
  }
  return conc;
}
console.log(crazyCaps("fullstack is amazing")); // => fUlLsTaCk iS AmAzInG!
