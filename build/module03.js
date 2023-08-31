"use strict";
// aqui asignamos a una variable y luego le pasamos unos valores a las propiedades
let employee = {
    firstName: "Dylan",
    lastName: "Murillo Rios",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
// employee.firstName = 10 //error , expect a string
// aqui una excelente ejemplo de el uso de interfaces y algo util que seria:
let createSphere = (diameter, useInches) => {
    return { diameter: useInches ? diameter * 0.39 : diameter };
};
// let myIceCream: Sundae = { // esto arroja una advertencia.
//   flavor: 'Vanilla',
//   scoops: 2
// }
// let myIceCream: Sundae = {
//   flavor: 'Vanilla',
//   scoops: 2,
//   sauce: "chocolate",
//   nuts: true
// }
function tooManyScoops(dessert) {
    return dessert.scoops >= 4 ? `${dessert.scoops} is too many scoops!` : 'Your order will be ready soon!';
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
let myIceCream;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream[0];
console.log(myStr);
//Ejemplo con una pai usando interfaz
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
async function fetchPosts(url) {
    // let response = await fetch(url);
    // let body = await response.json();
    // return body as Post[]
}
// async function showPost() {
//   let posts = await fetchPosts(fetchURL);
//   //Muestra el contenido del primer item en la respuesta
//   // let post = posts[0];
//   // console.log(`Post # ${post.id}`)
//   // console.log(`Author ${(post.userId === 1 ? "Administrator" : post.userId.toString())}`)
//   // console.log(`Title ${post.title}`);
//   // console.log(`Body ${post.body}`)
// }
// showPost();
