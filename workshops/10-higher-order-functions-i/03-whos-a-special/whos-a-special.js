// YOUR CODE BELOW
function whosASpecial(arr) {
  let str = "";
  debugger;
  function special(obj) {
    str += `${obj.name} the ${obj.species} is very special! `;
  }
  let y = arr.forEach(special);

  return str.trim();
}
let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];

console.log(whosASpecial(specialPets));
