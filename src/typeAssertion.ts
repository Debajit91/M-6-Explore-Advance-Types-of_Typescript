let anything: any;

anything= 222;
console.log(anything);
const fix = (anything as number).toString();
console.log(fix);

let name:any;
name= "Devve";
const lastIndexOfe = (name as string).lastIndexOf('e');
console.log(lastIndexOfe);


const kgToGmConverter = (input: string | number): string | number | undefined =>{

    if(typeof input === 'number'){
        return input * 1000;
    } 
    else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`
    }
};

const result1 = kgToGmConverter(2) as number;
console.log({result1});

const result2 = kgToGmConverter("2 Kg") as string;
console.log({result2});