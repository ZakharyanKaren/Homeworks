function CoffeeShop(shopName, menu) {
  this.name = shopName;
  this.menu = menu;
  this.orders = [];
  this.price = 0;
  this.cheapestItemName = "";
  this.cheapestItemPrice = 0;
  this.rdyOrdersCount = 0;
}

CoffeeShop.prototype.addOrder = function (order) {
  for (const key of this.menu) {
    if (key.name === order) {
      this.orders.push(key.name);
      this.price += key.price;

      if (this.cheapestItemName === "") {
        this.cheapestItemName = key.name;
        this.cheapestItemPrice = key.price;
      } else {
        if (this.cheapestItemPrice > key.price) {
          this.cheapestItemName = key.name;
          this.cheapestItemPrice = key.price;
        }
      }

      return "Order added!";
    }
  }

  if (this.orders[this.orders.length - 1] !== order) {
    return `This item is currently unavailable!
Coffee House does not sell ${order}`;
  } else return "";
};

CoffeeShop.prototype.fulfillOrder = function () {
  if (this.rdyOrdersCount === this.orders.length) {
    return "All orders have been fulfilled!";
  } else {
    let availableOrder = this.orders[this.rdyOrdersCount];
    this.rdyOrdersCount++;
    return `The ${availableOrder} is ready!`;
  }
};
CoffeeShop.prototype.listOrders = function () {
  if (this.orders === []) {
    return this.orders;
  } else {
    return `The list of all the items in the current order
${this.orders}`;
  }
};
CoffeeShop.prototype.dueAmount = function () {
  return this.price;
};
CoffeeShop.prototype.cheapestItem = function () {
  return `Cheapest item is - ${this.cheapestItemName}`;
};
CoffeeShop.prototype.drinksOnly = function () {
  let onlyDrinks = [];
  for (const key of this.menu) {
    if (key.type === "drink") {
      onlyDrinks.push(key.name);
    }
  }
  return onlyDrinks;
};
CoffeeShop.prototype.foodOnly = function () {
  let onlyFood = [];
  for (const key of this.menu) {
    if (key.type === "food") {
      onlyFood.push(key.name);
    }
  }
  return onlyFood;
};

let shopName = "CoffeeHouse";
let menu = [
  { name: "Dolce", type: "drink", price: 400 },
  { name: "Browny", type: "food", price: 2000 },
  { name: "Cappuccino", type: "drink", price: 600 },
  { name: "Creeps", type: "food", price: 3500 },
  { name: "Ice tea", type: "drink", price: 350 },
];

const coffeeHouse = new CoffeeShop(shopName, menu);
console.log(coffeeHouse.addOrder("Dolce"));
console.log(coffeeHouse.addOrder("Browny"));
console.log(coffeeHouse.addOrder("Cappuccino"));
console.log(coffeeHouse.addOrder("Creeps"));
console.log(coffeeHouse.addOrder("Ice tea"));
console.log(coffeeHouse.fulfillOrder());
console.log(coffeeHouse.fulfillOrder());
console.log(coffeeHouse.fulfillOrder());
console.log(coffeeHouse.fulfillOrder());
console.log(coffeeHouse.fulfillOrder());
console.log(coffeeHouse.fulfillOrder());
console.log(coffeeHouse.listOrders());
console.log(coffeeHouse.dueAmount());
console.log(coffeeHouse.cheapestItem());
console.log(coffeeHouse.drinksOnly());
console.log(coffeeHouse.foodOnly());
