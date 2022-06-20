// YOUR CODE BELOW
function getDogBreeder(name, age) {
  debugger;
  function dogBreeder(a, b) {
    let obj = {};
    if (a && b) {
      obj.name = a;
      obj.age = b;
    } else if (typeof a === "number") {
      obj.name = name;
      obj.age = a;
    } else if (typeof a === "string") {
      obj.name = a;
      obj.age = age;
    } else {
      obj.name = name;
      obj.age = age;
    }

    return obj;
  }
  return dogBreeder;
}

let puppyFarm = getDogBreeder("Snoopy", 0);
let rescueShelter = getDogBreeder("Odie", 3);

// puppyFarm("Olaf", 3); // => {name: 'Olaf', age: 3};
// puppyFarm(2); // => {name: 'Snoopy', age: 2}
