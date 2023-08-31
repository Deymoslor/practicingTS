// Con las interfaces buscamos solamente definir tipos para luego esta pueda ser usada.
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string; //Esto es un metodo.
}

// aqui asignamos a una variable y luego le pasamos unos valores a las propiedades

let employee: Employee = {
    firstName: "Dylan",
    lastName: "Murillo Rios",
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// employee.firstName = 10 //error , expect a string

// aqui una excelente ejemplo de el uso de interfaces y algo util que seria:
let createSphere = (diameter: number, useInches: boolean) => {
    return { diameter: useInches ? diameter * 0.39 : diameter };
  };


  //Ejercicio: declarar y crear una instancia de una interfaz en TypeScript

  interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
  }

  // let myIceCream: IceCream = {
  //   flavor: 'Vanilla',
  //   scoops: 2
  // }

  //console.log(myIceCream.flavor)

  // function tooManyScoops(dessert: IceCream ) {
  //   return  dessert.scoops >= 4 ? `${dessert.scoops} is too many scoops!` : 'Your order will be ready soon!'
  // }

  // console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));

//   Ejercicio: ampliar una interfaz en TypeScript
// Hay varios tipos de postres que puedes crear desde la IceCreaminterfaz (sundaes, batidos, etc.), pero todos tienen propiedades diferentes además de las declaradas en IceCream. Extendamos la interfaz con una nueva llamada Sundaey declaremos sus propiedades.

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry'
  nuts?: boolean
  whippedCream?: boolean;
  instructions?: string;
}


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

function tooManyScoops(dessert: Sundae ) {
  return  dessert.scoops >= 4 ? `${dessert.scoops} is too many scoops!` : 'Your order will be ready soon!'
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

//tipos indexables

interface IceCreamArray {
  [index: number] : string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0]
console.log(myStr);

//Ejemplo con una pai usando interfaz

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
//La interfaz describiendo la forma de la data como lo trae el json
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
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


