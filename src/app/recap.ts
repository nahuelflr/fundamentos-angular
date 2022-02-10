const username: string = 'nawe';
const sum = (a: number, b: number) => {
    return a + b;
}
sum(1,2);

class Person {
    constructor(public age: number,public lastnme: string){
    }
}

const nahuel = new Person(21, 'Flores');
nahuel.age;