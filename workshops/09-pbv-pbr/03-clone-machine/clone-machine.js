// YOUR CODE BELOW
function cloneMachine(obj) {
  let obj2 = {};
  let name = obj["name"];

  obj2 = {
    name: `${obj.name}Clone`,
    species: obj.species,
    offspring: [],
  };
  obj["offspring"].push(obj2.name);
  return obj2;
}
let dolly = {
  name: "Dolly",
  species: "sheep",
  offspring: [],
};
let dollyClone = cloneMachine(dolly);
