//CLASSES in typescript


class Car {
    //properties
    _make: string;
    _color: string;
    _doors: number;
    //Constructor Los constructores si no son añadidos, la clase creara uno automatico
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }

    //Accessors
    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make
    }

    get color() {
        return `The color of the car is: ${this._color}`
    }

    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors
    }

    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors;
        }else {
            throw new Error('Doors must be an even number');
        }
    }

    //Methods
    accelerate (speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake (): string {
        return `${this.worker()} is bracking with the standard bracking system.`
    }
    turn (direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`
    }


    worker(): string {
        return this._make
    }

}