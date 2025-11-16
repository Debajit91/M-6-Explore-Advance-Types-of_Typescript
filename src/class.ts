// oop - class >>> object


class Animal {
     constructor(public name: string, public species: string, public sound: string){

     }

    makeSound(){
        console.log(`${this.name} is making ${this.sound}`)
    }
}

const dog = new Animal("Dogesh Bhai", "Dog", "Ghew Ghew");
console.log(dog.name);
// dog.makeSound();


const cat = new Animal("Cat Bhai", "Cat", "Mew Mew");
console.log(cat.species);
cat.makeSound();