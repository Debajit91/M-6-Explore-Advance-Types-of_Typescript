// Generic Function
// here every time we have to write a function when to change the value type. For this we can write a generic function 

const createArrayWithString = (value: string) => [value];

const createArrayWithNum = (value: number)=>[value];

const createArrayWithObj = (value: {id: number, name: string})=>{[value]};


const arrString = createArrayWithString('Apple');
const arrNumber = createArrayWithNum(222);
const arrObj = createArrayWithObj({
    id: 123,
    name: "Mr. Dev"
})

const createArrayWithGeneric = <T>(value: T)=>[value]

const arrString2 = createArrayWithGeneric('Apple');
const arrNumber2 = createArrayWithGeneric(222);
const arrObj2 = createArrayWithGeneric({
    id: 234,
    name: "Mr. C"
})


// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
    param1,
    param2,
];

const createArrayTupleWithGeneric = <X, Y> (param1: X, param2: Y) =>[
    param1,
    param2,
]

const res1 = createArrayTupleWithGeneric("Dev",24);
const res2 = createArrayTupleWithGeneric(24, "Dev")


// 
const addStudentToCourse = <T>(studentInfo:T)=>{
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
}


const result = addStudentToCourse(student2);
console.log(result);
console.log(result.id);
