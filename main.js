// console.log('Class study')

// function Car() {};

// const car = new Car();

// Car.prototype.status = 'New';
// Car.prototype.wheels = 4;
// Car.prototype.avail = function() {
//     console.log('available');
// }
// Car.prototype.parameter = function(p) {
//     console.log(p)
// }

// console.log(car.__proto__)
// console.log(car.status);
// console.log(car.wheels)
// car.avail()
// car.parameter('hi')

// const ford = new Car();

// console.log(ford.__proto__);

// class Car {
//     constructor({status, wheels, avail, test}) {
//         this.status = status;
//         this.wheels = wheels;
//         this.avail = avail;
//         this.test = test
//      }
// }



// const ford = new Car({
//     status: 'New',
//     wheels: 4,
//     avail: () => {
//         console.log('available');
//     },
//     test: 'testing ford'
// })

// const Perodua = new Car({
//     status: 'New',
//     wheels: 4,
//     avail: () => {
//         console.log('available');
//     },
//     test: 'testing Perodua'
// })

// Perodua.avail();
// console.log(Perodua.test)
// console.log(ford.test)

class Car {
    constructor() {
        this.condition = 'New';
        this.wheels = '4';
        this.avail = () => {
            console.log('avail');
        }
        this.test = (p) => {
            console.log(p)
        }
    }

    otherfunction() {
        console.log('hey')
    }
}

class Ford extends Car {
    constructor() {
        super();
        this.country = 'usa';
    }

    otherfunction2() {
        console.log('super hey')
    }
}

const car = new Car();
const ford = new Ford();

ford.color = 'red';
// console.log(ford);

ford.otherfunction()

// car.test('car')
// console.log(car)

// car.test('Ford')
// console.log(ford);
