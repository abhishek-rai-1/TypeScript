class Dog {
  bark(): void {
    console.log("woff woff");
  }
}

class Cat {
  meow(): void {
    console.log("meow meow");
  }
}

function AnimalSound(Animal: Dog | Cat) {
  if (Animal instanceof Dog) Animal.bark();
  else Animal.meow();
}

const myDog = new Dog();
const myCat = new Cat();

AnimalSound(myDog);
AnimalSound(myCat);
