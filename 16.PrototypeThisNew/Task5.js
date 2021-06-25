// Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
// STRETCH: Give cars ability to .drive(distance). The distance driven:
// Should cause the odometer to go up.
// Should cause the tank to go down taking milesPerGallon into account.
// STRETCH: A car which runs out of fuel while driving can't drive any more distance:
// The drive method should return a string "Iran out of fuel at x miles!" x being odometer.

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons) {
    this.tank = gallons;
  }
  drive(distance) {
    if (this.tank < distance / this.milesPerGallon) {
      distance = this.tank * this.milesPerGallon;
      this.tank = 0;
      this.odometer += distance;
      return `Iron out of fuel at ${this.odometer} miles!`;
    }

    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
  }
}

const mercedes = new Car("mercedes", 5);

mercedes.fill(50);

console.log(mercedes.drive(100));
console.log(mercedes.drive(100));
console.log(mercedes.drive(100));

console.log(mercedes);
