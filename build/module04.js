"use strict";
//Funciones Nombradas
// const addNumber =(x: number, y: number): number => {
//     return x +y
// };
// function addNumber (x: number, y: number): number{
//     return x + y;
// }
// addNumber(1,2);
//Funciones anónimas
let addNumbersAnonymous = function (x, y) {
    return x + y;
};
addNumbersAnonymous(1, 2);
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([]));
//arrow functions
let addNumber2 = (x, y) => x + y;
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
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total2([10, 9, 8, 3, 5]));
// required parameters
// function addNumbers (x: number, y: number): number {
//     return x + y;
//  }
//  addNumbers(1, 2); // Returns 3
//  addNumbers(1);    // Returns an error
//optional parameters
function addNumbersOptional(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbersOptional(1, 2); // Returns 3
addNumbersOptional(1); // Returns 1
//Parámetros predeterminados
// function addNumbers (x: number, y = 25): number {
//     return x + y;
//  }
//  addNumbers(1, 2);  // Returns 3
//  addNumbers(1);     // Returns 26
//Parámetros de descanso
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let i = 0; i < restOfNumbers.length; i++) {
        if (isNaN(restOfNumbers[i])) {
            continue;
        }
        total += restOfNumbers[i];
    }
    return total;
};
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
addAllNumbers(2, 3, "three"); // flags error due to data type at design time, returns 5
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({
    sender: 'Dylan',
    text: 'Hoy he aprendido al desestructuración en TY'
});
