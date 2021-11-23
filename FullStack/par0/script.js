console.log('Hello World');

let firstName = 'John';
firstName.toUpperCase();//no se puede modificar un string en si
let NombreCompleto = firstName.toUpperCase();//si le asignas a otra variable si cambia

const list = [];
list.push(1);//los arrays y obj son mutables
const another =list.concat(12);
console.log(list);
const persona={
    name: 'Pablo',
    instagram: '@sergio_09_02',
    age: '17',
    isDeveloper: true,
    links: ['https://google.com', 'https://facebook.com']
}

const sumar =(a,b)=>{
    console.log(a);
    console.log(b);
    return a+b;
}//function expression
console.log(sumar(1,2));

function restar (a,b){
    console.log(a);
    console.log(b);
    return a-b;
}