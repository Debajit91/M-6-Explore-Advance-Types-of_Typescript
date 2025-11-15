// dynamically generalized: generic

type GenericArray<T> = Array<T>;

// const friends : string[] = ["Mr. X", "Mr. Y", "Mr.Z"];
const friends : GenericArray<string> = ["Mr. X", "Mr. Y", "Mr.Z"];

// const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligible: boolean[] = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];


// tuple
type Coordinates<T, U> = [T, U];
const coordinates: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];

// Object
// We can not use Generic like that: 
// GenericArray<object>

const userList: GenericArray<{name: string, age: number}> = [
    {
        name: "Mr. Dev",
        age: 25
    },
    {
        name: "Mr. Roy",
        // age: '26' //if we write GenericArray<object> it does not catch error
        age: 25
    },

]


// we can also use type alias

type User = {name: string, age: number};

const userList2: GenericArray<User>=[
    {
        name: "Mr. X",
        age: 25
    },
    {
        name: "Mr. Y",
        age: 26
    }
];

console.log(userList2);