/*
class PersonDetail{

    age : number;
    name : string;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
}

const person = new PersonDetail('rahul', 23);
*/

// --------------------------------------------------------------

// Access Modifiers
class Human {
  public first: string;
  private last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName(): string {
    return `${this.first} ${this.last} Age : ${this.age}`;
  }
}

class PersonDetail extends Human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
    this.age = age;
  }
}

let abhi = new PersonDetail("abhi", "rai", 23);
console.log(abhi.getName());
