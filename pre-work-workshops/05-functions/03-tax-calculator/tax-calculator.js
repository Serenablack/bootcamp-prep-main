// YOUR CODE BELOW
function taxCalculator(price, state) {
  if (state === "NY") {
    return price + 0.04 * price;
  } else {
    return price + 0.06625 * price;
  }
}
console.log(taxCalculator(100, "NY")); // => 104
taxCalculator(100, "NJ");
