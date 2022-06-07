// YOUR CODE BELOW
function defaultGreet(str1, str2 = "Doe") {
  return "Hi" + " " + str1 + " " + str2 + "!";
}
defaultGreet("Chaka", "Khan"); // => 'Hi Chaka Khan!'
defaultGreet("John");
