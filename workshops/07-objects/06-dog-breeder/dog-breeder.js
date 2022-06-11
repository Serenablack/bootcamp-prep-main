// YOUR CODE BELOW
function dogBreeder(name, age) {
  let obj = {};
  if (name && age) {
    obj.name = name;
    obj.age = age;
  } else if (typeOf (name) === "number") {
    obj.age = name;
    obj.name = "Steve";
  } else {
    obj.age = 0;
    obj.name = name;
  }
  return obj;
}
