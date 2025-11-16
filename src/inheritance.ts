class Person {
     name: string;
    age: number;
    address: string;

    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // ghorer property this. diye access korte hoi r bairer property argument diye pathiye parameter diye receive korte hoi

    getSleep(numOfHours: number){
        console.log(`${this.name} ${numOfHours} ghonta ghumai`)
    }
}

class Student extends Person {}

const studnet1 = new Student(`Mr. Fakibaaz`, 18, 'Bangladesh');

studnet1.getSleep(10);


class Teacher extends Person {
    
    designation: string;

    constructor(name:string, age:number, address:string, designation: string,){
         super(name, age, address,)
        this.designation = designation;
    }

   


    takeClass(numOfClass: number){
        console.log(`${this.name} ${numOfClass} ta class ney`)
    }
}

const teacher1 = new Teacher('Mr. Smart', 34, 'Chittagong', 'Senior Teacher')
teacher1.takeClass(4)
teacher1.getSleep(5);



