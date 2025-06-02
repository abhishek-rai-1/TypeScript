// 1. [] notaion

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

const names: string[] = ["abhi", "raj", "rahul"];
console.log(names);

// names.push(67)  give the error as the array is of string type

// 2. Array<> notation
// now no one use this Array<>

const num: Array<number> = [2, 4, 5, 7, 8];
console.log(num);

// --------------------------------------------------------------

// multiDimentional array
const TwoDimentional: number[][] = [
  [1, 2, 3],
  [6, 7, 8],
];
console.log(TwoDimentional);

const ThreeDimentional: number[][][] = [
  [
    [1, 2, 3],
    [6, 7, 8],
  ],
];
console.log(ThreeDimentional);
