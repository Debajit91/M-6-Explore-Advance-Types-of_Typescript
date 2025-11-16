// keyof: type operator

type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle = 'bike' | 'car' | 'cng'
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle:MyVehicle2 = 'cng';

// 
type User = {
    id: number;
    name: string;
    address:{
        city: string
    }
}


const user:User ={
    id: 123,
    name: 'Dev',
    address:{
        city: 'ctg'
    }
}

const developer = {
    id: 231,
    name: 'Devs',
    device:{
        brand:'HP',
        model: 'X-21'
    }
}

const getPropertyFromObj = <T>(obj:T, key: keyof T) =>{
    return obj[key];
}

const result = getPropertyFromObj(user, "address");
console.log(result);

const result1 = getPropertyFromObj(developer, 'device');

console.log(result1);
