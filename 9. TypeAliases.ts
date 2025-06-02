type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  const { name, age, location } = user;
  return `my name is ${name}, my age is ${age} and i live in ${location}`;
};

console.log(printUserInfo({ name: "raj", age: 22, location: "india" }));
