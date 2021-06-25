let Airplane = {
  isFlying: false,
  takeOff() {
    this.isFlying = true;
  },
  land() {
    this.isFlying = false;
  },
};

let airplane1 = Object.create(Airplane);

airplane1.takeOff();
console.log(airplane1.isFlying);

airplane1.land();
console.log(airplane1.isFlying);

let airplane2 = Object.create(Airplane);

airplane2.takeOff();
console.log(airplane2.isFlying);

airplane2.land();
console.log(airplane2.isFlying);

console.log(airplane1.isFlying, airplane2.isFlying);
