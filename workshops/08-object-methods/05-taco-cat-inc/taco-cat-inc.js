let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

// YOUR CODE BELOW
tacoCatInc["currentInventory"] = function () {
  let num = 0;
  for (let keys in this) {
    let curr = this[keys];
    for (let dish in curr) {
      let dish2 = curr[dish];
      num += dish2.cost * dish2.quantity;
    }
  }
  return num;
};
tacoCatInc["sale"] = function (order) {
  for (let keys in this) {
    let curr = this[keys];
    for (curr in order) {
      for (let x in curr) {
        let curr1 = curr[x];
        if (x === order.key) {
          this.cash = curr1.cost;
          debugger;
          curr1.cost;
          return this.quantity - 1;
        }
      }
    }
  }
};
