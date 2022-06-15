// YOUR CODE BELOW
function mySplice(arr, start, count, elem) {
  let arrDel = [];
  let arrMan = [];
  let arr4 = arr.slice();
  for (i = 0; i < arr.length; i++) {
    let str = arr4[i];
    debugger;
    if (i === start && count != 0) {
      for (j = start; j < start + count; j++) {
        arrDel.push(arr[j]);
      }
      if (count > 0) {
        i = i + count - 1;
      } else i;
      if (elem) {
        arrMan.push(elem);
      }
    } else if (i === start && count === 0 && elem) {
      arrMan.push(elem);
      arrMan.push(str);
    } else {
      arrMan.push(str);
    }
  }
  while (arr.length) {
    arr.pop();
  }
  for (i = 0; i < arrMan.length; i++) {
    arr[i] = arrMan[i];
  }
  console.log(arr);
  return arrDel;
}
let funNums = [10, 20, 30, 40, 50, 60];
mySplice(funNums, 2, 3, "apples"); // => [2]
