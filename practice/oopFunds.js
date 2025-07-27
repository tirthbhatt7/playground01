class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }

  eat() {
    console.log(`${this.name} is eating..`);
  }
}

const dog = new Animal("Dog");
// dog.speak();
// dog.eat();

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
  eat() {
    console.log(`${this.name} is eating pedigree..`);
  }
}

const myDog = new Dog("Panther");
// myDog.speak();
// myDog.eat();

function makeItSpeak(animal) {
  animal.speak();
}



class Vehicle {
  constructor(brand, wheels) {
    this.brand = brand;
    this.wheels = wheels;
  }

  drive() {
    console.log(`A ${this.brand} vehicle is driving on ${this.wheels} wheels..`)
  }
}

// const bike = new Vehicle("Yahama", "2");
// bike.drive();

class Car extends Vehicle{
  constructor(brand, wheels, mileage) {
    super(brand, wheels);
    this.mileage = mileage;
  }

  driven() {
    console.log(`A ${this.brand} car has been driven on ${this.wheels} wheels for ${this.mileage} miles..`)
  }
}

// const car = new Car("maruti", "4", "1000");
// car.driven();

function driving(vehicle) {
  vehicle.drive();
  if (vehicle instanceof Car) {
    vehicle.driven();
  }
}

const RX100 = new Vehicle("honda", "2");
const XUV500 = new Car("mahindra", "4", "2000");

// driving(RX100);
// driving(XUV500);


class Property {
  constructor(location, area) {
    this.location = location;
    this.area = area;
  }
  describe() {
    console.log(`this property is in ${this.location} and has area of ${this.area}.`);
  }
}

class Flat extends Property {
  constructor(location, area, rooms) {
    super(location, area);
    this.rooms = rooms;
  }
  describeRooms() {
    console.log(`this property has ${this.rooms} rooms.`);
  }
}

function describeProperty(property) {
  property.describe();
  if (property instanceof Flat) {
    property.describeRooms();
  }
} 

const myLand = new Property("mumbai", "1000sqm");
const myFlat = new Flat("delhi", "1000sqft", "3");

// describeProperty(myLand);
describeProperty(myFlat);


class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  study() {
    console.log(`${this.name} is ${this.age} years old and is studying.`);
  }
}

class GraduateStudent extends Student{
  constructor(name, age, thesisTopic) {
    super(name, age);
    this.thesisTopic = thesisTopic;
  }
  research() {
    console.log(`${this.name} is doing research in ${this.thesisTopic}`);
  }
}

function makeItStudy(student) {
  student.study();
  if (student instanceof GraduateStudent) {
    student.research();
  }
} 

const kid = new Student("Tirth", "26");
const man = new GraduateStudent("Bhatt", "30", "nanotechnology");
makeItStudy(kid);
makeItStudy(man);