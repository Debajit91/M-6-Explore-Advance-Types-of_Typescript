// type interface is similar to type alias



type User = {
    id: string,
    name: string,
    age: number
}

interface IUser {
    id: string,
    name: string,
    age: number
}

const user1: User ={
    id: "A-01",
    name: "Dev",
    age: 34
}

const user2: IUser ={
    id: "A-01",
    name: "Dev",
    age: 34
}

// major difference is type interface can not be used in primitive data type. It only describe object shapes or function shapes

type IsAdmin = boolean;
const IsAdmin: IsAdmin = true;

// but we can not write like that
interface IIsAdmin = boolean;

// So that means type interface in only for Object Data type: object, array, function




// some more little difference with type alias: 
// 1) in type alias declared with '=' sign but type interface has no '=' sign.
// in the first example we see it

// 2) in type alias we use intersection between two type alias when we need to merge, in type interface if we have to merge two type we should use 'extends'

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role;

const user3: UserWithRole ={
    id: "C-32",
    name: "Deb",
    age: 33,
    role: 'user'
}


interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
};

const user4:IUserWithRole ={
    id: "C-34",
    name: "Debjit",
    age: 33,
    role: 'user'
}

// array & function: here when using interface we have declare the type of index

// in Array
type Friends = string[];
const friends: Friends = ['A', 'B', 'C'];

interface IFriends{
    [index: number] : number
}
const friends2 : IFriends = [2, 3, 5]


// in function
type Add = (num1: number, num2: number)=> number;

const add:Add = (num1, num2) => num1 + num2;


interface IAdd{
    (num1: number, num2: number): number
};

const add2 : IAdd = (num1, num2) => num1 + num2;


// suggested: we can use type alias for array and function because it looks more clean
// but when it needs to extends any type we should use type interface. mostly recommended for object and where needs to extends

