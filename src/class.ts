// oop - class >>> object
// parameter properties : public

class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // constructor(name:string, species:string, sound:string){
    //     this.name = name;
    //     this.species = species;
    //     this.sound = sound;
    // }


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