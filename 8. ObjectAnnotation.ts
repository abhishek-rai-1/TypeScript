const Person: { name: string; age: number; email: string } = {
  name: "abhishek",
  age: 22,
  email: "abhishek@gmail.com",
};

console.log(Person);

type Animal = {
  name: string;
  ageOfDog: number;
};

const animal: Animal = {
  name: "dog",
  ageOfDog: 23,
};

console.log(animal);

function electricInfo(): { electricName: string; manufacturingDate: string } {
  return {
    electricName: "AC",
    manufacturingDate: "1/12/23",
  };
}

console.log(electricInfo());
