// YOUR CODE BELOW
//first code tried but not able to figure out my mistake
// function compareObjects(obj1, obj2) {
//   if (Object.keys(obj1).length === Object.keys(obj2).length) {
//     let count = 0;
//     for (let key in obj1) {
//       if (obj2[key] === obj1[key]) {
//         count++;
//       }
//       if (count === Object.keys(obj1).length) return true;
//       else return false;
//     }
//   } else {
//     return false;
//   }
// }
function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
compareObjects({ name: "nick" }, { name: "nick" }); // -> true

compareObjects({ name: "zeke" }, { name: "zeke", age: 12 });
