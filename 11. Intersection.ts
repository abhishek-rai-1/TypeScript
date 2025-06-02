type PersonInfo = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type PersonAndEmployee = PersonInfo & Employee;

const raj: PersonAndEmployee = {
  name: "raj",
  age: 67,
  id: 2,
  title: "engineer",
};

console.log(
  `name : ${raj.name}, age : ${raj.age}, id : ${raj.id}, title : ${raj.title}`
);
