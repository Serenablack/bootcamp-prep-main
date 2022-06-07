// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
  let stri = "";
  if ((originalString, startIdx, endIdx)) {
    for (i = startIdx; i < endIdx; i++) {
      stri += originalString[i];
    }
    return stri;
  } else if ((originalString, startIdx)) {
    for (i = startIdx; i < originalString.length; i++) {
      stri += originalString[i];
    }
    return stri;
  } else {
    return originalString;
  }
}

mySlice("slice and dice", 2);
