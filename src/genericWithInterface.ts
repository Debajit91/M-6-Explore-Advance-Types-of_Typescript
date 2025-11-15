interface Developer<T, X> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface NonBranded {
  heartRate: string;
  stopWatch: boolean;
}

interface Branded {
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
  heartRate: string;
}

const Developer1: Developer<NonBranded,{
        brand: string;
        model: string;
}> = {
  name: "Mr. Dev1",
  salary: 20000,
  device: {
    brand: "lenovo",
    model: "A-23",
    releasedYear: "2017",
  },
  smartWatch: {
    heartRate: "70",
    stopWatch: true,
  },
};

console.log(Developer1);

const Developer2: Developer<
  Branded,
  {
    brand: string;
    model: string;
  }
> = {
  name: "Mr. Dev2",
  salary: 30000,
  device: {
    brand: "lenovo",
    model: "A-23",
    releasedYear: "2017",
  },
  smartWatch: {
    heartRate: "70",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: {
    brand: "Yamaha",
    model: "Y-30",
  },
};
