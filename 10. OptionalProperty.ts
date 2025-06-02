type Person = {
  name: string;
  age: number;
  email?: string;
  readonly location: string;
};

let alias: Person = {
  name: "alias",
  age: 23,
  location: "India",
};

// alias.location = 'U.S.A'    this will give the error as we can not change the location as it is only the readonly property of location

console.log(`name : ${alias.name}, age : ${alias.age}`);

let bob: Person = {
  name: "bob",
  age: 56,
  email: "bob@gmail.com",
  location: "India",
};

console.log(`name : ${bob.name}, age : ${bob.age}, email : ${bob.email}`);

// in the above example the alias does not have the email property but the bob has the property of email because the email is marked as optional in the Person type definition
