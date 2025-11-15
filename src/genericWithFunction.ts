// Generic Function
// here every time we have to write a function when to change the value type. for this we can write a generic function 

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

