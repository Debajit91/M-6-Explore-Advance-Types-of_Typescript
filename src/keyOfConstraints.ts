// keyof: type operator

type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle = 'bike' | 'car' | 'cng'
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle:MyVehicle2 = 'cng';