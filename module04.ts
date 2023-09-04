//Funciones Nombradas
// const addNumber =(x: number, y: number): number => {
//     return x +y
// };

// function addNumber (x: number, y: number): number{
//     return x + y;
// }

// addNumber(1,2);

//Funciones anónimas
let addNumbersAnonymous = function (x: number, y: number): number {
    return x + y;
}

addNumbersAnonymous(1,2)

let sum = function (input: number[]): number {
    let total: number = 0
     for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i])
        
    }
    return total
}

console.log(sum([]))

//arrow functions
let addNumber2 = (x: number, y:number): number => x +y;

//arrow functions wirh anonymous function

// let total2 = (input: number[]): number[] => {
//     let total: number[] = [];
//     for (let i = 0; i < input.length; i++) {
//         if (isNaN(input[i])) {
//             continue;
//         }
//         total.push(i)
//     }

//     return total;
// }

let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        console.log(input[i])
        if(isNaN(input[i])) {
            
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total2([10, 9, 8 , 3, 5]))

// required parameters

// function addNumbers (x: number, y: number): number {
//     return x + y;
//  }
 
//  addNumbers(1, 2); // Returns 3
//  addNumbers(1);    // Returns an error

//optional parameters

function addNumbersOptional (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbersOptional(1, 2); // Returns 3
addNumbersOptional(1);    // Returns 1

//Parámetros predeterminados
// function addNumbers (x: number, y = 25): number {
//     return x + y;
//  }
 
//  addNumbers(1, 2);  // Returns 3
//  addNumbers(1);     // Returns 26

 //Parámetros de descanso
 let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number =>{
    let total: number = firstNumber;
    for(let i = 0; i < restOfNumbers.length; i++){
        if (isNaN(restOfNumbers[i])) {
            continue;
        }

        total += restOfNumbers[i];
    }

    return total
 }

 addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
 addAllNumbers(2);                    // returns 2
 addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

 //console.log("EMPEZO: " + addAllNumbers(1,2,3,4))

 //-- Parámetros de objetos deconstruidos
 //para el uso de un los parámetros deconstruidos, debemos hacer uso de interfaces

 interface Message {
    text: string;
    sender: string;
 }

 function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
 }

 displayMessage({
    sender: 'Dylan',
    text: 'Hoy he aprendido al desestructuración en TY'
 })

//excercise divirtiendome con parametros
let numberOption = (x: number, y:number, z?:number):number  {
    if((z === undefined)) {
        return x + y;
    } else {
        return x +y +z;
    }
};

//Parámetros predeterminados

let subtractThreeNumbers = (x: number, y: number, z: number = 100): number => x - y - z;

// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number
}

let addNumbers2: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - z;

console.log(addNumbers2(1,2))
console.log(subtractNumbers(1,2))

let doCalculation = (operation: 'add' | 'substract'): Calculator => {
    if (operation === 'add') {
        return addNumber2
    }else {
        return subtractNumbers
    }
}

let addNumbers3: Calculator = (x, y): number => x + y;
let addNumbers4: Calculator = (number1, number2): number => number1 + number2;
let addNumbers5: Calculator = (num1, num2) => num1 + num2;

console.log(doCalculation('add', ))



