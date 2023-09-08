"use strict";
//CLASSES in typescript
class Car {
    //Constructor Los constructores si no son añadidos, la clase creara uno automatico
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if (doors % 2 === 0) { // aqui podemos ver que estamos colocando una condicion para que cuando se cree un objeto con el constructor este solo permita even numbers.
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++;
    }
    //Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return `The color of the car is: ${this._color}`;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    //Methods
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is bracking with the standard bracking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    worker() {
        return this._make;
    }
}
//properties
Car.numberOfCars = 0; // propiedad estatica
let myCar1 = new Car('Nissan', 'Dark Blue', 2); // instanciamos un objeto de tipo Car con todos los parámetros.
console.log(Car.getNumberOfCars());
console.log(myCar1.color);
// console.log(myCar1._color);
let myCar2 = new Car('Galaxy Motors', 'red');
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
//Ampliando las clases con extends y posiblemente anulando métodos.
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors); // Asi ejecutamos los parametros puesto al constructor de la super clase.
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Métodos
    charge() {
        console.log(this.worker() + " is charging.");
    } // returns "Spark Motors is charging"
}
//-> Fin clase ElectricCar
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge();
console.log(spark.brake());
