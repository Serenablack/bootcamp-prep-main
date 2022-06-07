// Edit the code below
let place = "Planet Earth";

function fullstackHQ() {
  return middleFunction("United States");

  function middleFunction(place2) {
    return innerFunction("New York State");

    function innerFunction(place3) {
      place4 = "New York City";
      return innermostFunction();

      function innermostFunction(place0) {
        return (
          "Fullstack HQ is at " +
          place +
          ", " +
          place2 +
          ", " +
          place3 +
          ", " +
          place4
        );
      }
    }
  }
}
fullstackHQ(); // => Fullstack HQ is at Planet Earth, United States, New York State, New York City
