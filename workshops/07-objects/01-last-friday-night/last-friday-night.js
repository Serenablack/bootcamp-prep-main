// YOUR CODE BELOW
function lastFridayNight(transactions) {
  let sum = 0;
  for (i = 0; i < transactions.length; i++) {
    num = transactions[i];

    sum += num.amount;
  }
  return sum;
}
