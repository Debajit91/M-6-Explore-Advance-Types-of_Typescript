// constraint : strict rule set kore deya
// If we want that some property must be include, we can set it in function declaration with <T extends ...>

const addStudentToCourse = <T extends {
    id: number;
    name: string;
    class: string;
    mobile: string;
}>(studentInfo:T)=>{
    return {
        course: "Next Level",
        ...studentInfo
    }
}

// We can use type alias or type interface for clean code if the size of data is large 

type Student = {
    id: number;
    name: string;
    class: string;
    mobile: string;
    address: string;
}

interface IStudent {
     id: number;
    name: string;
    class: string;
    mobile: string;
    address: string;
    hasPen: boolean;
}

const addStudentToCourse2 = <T extends IStudent>(studentInfo:T)=>{
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const student1 ={
    id: 123,
    name: "Dev",
    hasLaptop: true,
}

const student2 = {
    id: 124,
    name: "Jeet",
    hasCar: true,
    isMarried: true,
    class: '11',
    mobile: '0178'
}

const student3 = {
    id: 125,
    name: "Joy",
    hasCar: true,
    isMarried: true,
    class: '11',
    mobile: '0178',
    address: "df",
    hasPen: true
}


const result = addStudentToCourse(student2);
console.log(result);

const result2 = addStudentToCourse2(student3);
console.log(result2);