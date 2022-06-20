// YOUR CODE BELOW
function timesTable(num) {
  function prod(num2) {
    let total = 1;
    total = num * num2;
    return total;
  }
  return prod;
}
let ninesTable = timesTable(9);
ninesTable(8); // => 72

let twelvesTable = timesTable(12);
twelvesTable(100);
