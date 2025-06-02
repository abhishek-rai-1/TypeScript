const addition = (x: number, y: number): number => {
  return x + y;
};

console.log(addition(5, 87));

// void in TS

function printInfo(message: string): void {
  console.log(`the message is : ${message}`);
}

printInfo("hello there, how are you");
