type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type AccountDetail = {
  email: string;
  password: string;
};

const userDetail: UserInfo | AccountDetail = {
  firstName: "rahul",
  lastName: "rana",
  age: 78,
};

console.log(
  `my full name is : ${userDetail.firstName} ${userDetail.lastName} and my age is : ${userDetail.age}`
);

// Note : if we are using any one of the type we have to give all property once we can not make like some property is from one type and other is from another type

const items: (number | string)[] = [1, 5, 7, "ramesh"];
console.log(items);
