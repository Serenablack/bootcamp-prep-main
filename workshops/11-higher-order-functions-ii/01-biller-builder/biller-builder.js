// YOUR CODE BELOW
function billerBuilder(state) {
  function calcPrice(pri) {
    let total = 0;
    if (state === "NY") {
      total += pri * 1.03 * 1.04;
    } else {
      total += pri * 1.05 * 1.06625;
    }
    return total;
  }
  return calcPrice;
}

let newYorkBiller = biller("NY");
newYorkBiller(100); // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = biller("NJ");
newJersBiller(100);
