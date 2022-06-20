// YOUR CODE BELOW
function cacheSavings(callback) {
  let count = {};
  function newFunc(a) {
    if (!(a in count)) {
      let result = callback(a);
      return (count[a] = result);
    } else {
      return count[a];
    }
  }
  return newFunc;
}
