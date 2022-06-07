// YOUR CODE BELOW
function myOr(valu1, valu2, valu3) {
  if (valu1 == true) {
    return valu1;
  } else if (valu2 == true) {
    return valu2;
  } else if (valu3 == true) {
    return valu3;
  }
  return valu3;
}
function myAnd(valu1, valu2, valu3) {
  if (valu1 == false) {
    return valu1;
  } else if (valu2 == false) {
    return valu2;
  } else if (valu3 == false) {
    return valu3;
  }
  return valu3;
}
myOr(true, true, false) === (true || true || false);
myAnd(1, "apples", true) === (1 && "apples" && true);
