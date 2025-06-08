// without generic

/*
const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: boolean) => console.log(x);

printString("hello");
printNumber(45);
printBoolean(true);
*/

// in the above examples for just printing we make many functions but there task is same so it is just repeating just because of there parameter changed so to overcome this problem generics comes in picture.

const printValue = <Type>(x: Type) => console.log(x);

function uniqueDataTypeFunc<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

function reversePair<T, U>(value1: T, value2: U) {
  return [value2, value1];
}

printValue<string>("hello");
printValue<number>(67);
printValue<boolean>(true);

const res1 = uniqueDataTypeFunc<number>(2, 89);
console.log(res1);
const res2 = uniqueDataTypeFunc<string>("hello", "world");
console.log(res2);
const reversed = reversePair("hello", 34);
console.log(reversed);
