// YOUR CODE BELOW
let me2 = {
  name: "Sandhya",
  getGreeting: function (its) {
    return `Hi ${its.name}, my name is ${this.name}.`;
  },
};
console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
