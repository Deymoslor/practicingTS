"use strict";
//Tipo boolean
let flag;
let yes = true;
let no = false;
//Tipo number y bigint
//let x: number;
//let y = 0;
let z = 123.456;
let big = 100n; //importante saber que esto solo es permitido cuando se trata de ES2020
//Tipo string
let s;
let empty = "";
let abc = 'abc';
//embeber expresiones
//let firstName: string = "Dylan";
let sentence = `My name is ${firstName}.
    i am new to TypeScript.`;
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
// let employeeStatus: ContractStatus = ContractStatus.Apprentice;
// console.log(employeeStatus);
// //Tipos any y unknown
// let randomValue: any;
// //randomValue = "Dylan";
// randomValue = true;
// console.log(randomValue.name);  // Logs "undefined" to the console
//randomValue();                  // Returns "randomValue is not a function" error
//randomValue.toUpperCase();      // Returns "randomValue is not a function" error
//Asercion de tipos, cuando por ejemplo un any lo queremos volver momentaneamente string
// (randomValue as string).toUpperCase();
// //La otra versión es la sintaxis de "corchetes angulares":
// (<string>randomValue).toUpperCase();
// let randomValue2: unknown = 10;
// randomValue2 = true;
// randomValue2 = "Dylan";
// if (typeof randomValue === "string") {
//     console.log((randomValue as string).toUpperCase());
// }else{
//     console.log("Error - A string was expected here.");
// }
//Tipos de unión
// let multiType: number | boolean;
// multiType = 29;
// multiType = true;
// //multiType = "holamundo"; //MAL
// function add(x: number | string, y: number | string) {
//     if (typeof x === 'number' && typeof y === 'number') {
//         return x + y;
//     }
//     if (typeof x === 'string' && typeof y === 'string') {
//         return x.concat(y);
//     }
//     throw new Error('Parameters must be numbers or strings');
// }
// console.log(add('one', 'two'));  //* Returns "onetwo"
// console.log(add(1, 2));          //* Returns 3
// console.log(add('one', 2));      //* Returns error
//TIPOS de interseccion unir pero ahora sale un resultado de sus propiedades, util para la creacion de interfaces
// interface Employee {
//     employeID: number;
//     age: number;
// }
// interface Manager {
//     stockPlan: boolean;
// }
// type ManagementEmployee = Employee & Manager;
// let newManager: ManagementEmployee = {
//     employeID: 12345,
//     age: 34,
//     stockPlan: true
// }
// console.log(newManager)
//----------Tipos Literales-----------------
// type testResult = "pass" | "fail" | "incomplete";
// let myResult: testResult;
// myResult = "incomplete";
// myResult = "pass";
// //myResult = "failure"; ERROR
// type dice = 1 | 2 | 3 | 4 | 5 | 6;
// let diceRoll: dice;
// diceRoll = 1;    //* Valid
// diceRoll = 2;    //* Valid
//diceRoll = 7;    //* Invalid ERROR
//------------------Tipos de colección en typescript------------------
//matrices
// let list: number[] = [1,2,3];
// let list2: Array<number> = [1,2,3];
//tuplas
// let person1: [string, number] = ["Marcia", 35];
//--------------------Ejercico de tipos----------------------
