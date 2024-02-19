// INTRODUCTION

const revenue: number = 1000;
let bonus: number = 500;
let res: number = revenue + bonus;
console.log(res);

//FUNCTIONS

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`;
}

function getFullName(firstname: string, surname: string): string{
    return `${firstname} ${surname}`;
}

console.log(getFullName('lola', 'ochilova'));

//OBJECTS

function getFullNameObj(userEntity: {firstname: string, surname: string}): string{
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const guest = {
    firstname : 'lola',
    surname : 'ochilova',
    city : 'tashkent',
    age : 18
}

console.log(getFullNameObj(guest));

//MASSIVE

const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for ( const skill of skills){
    console.log(skill.toLowerCase());
    // здесь будут доступны все методы как toLowerCase() и т.д

}

const result = skills
.filter((s : string) => s !== 'DevOps')
.map (s => s + '! ')
.reduce ((a , b) => a+b )

console.log(result);

//TUPLES

const skill: [number, string] = [1, "Dev"];

// длина skill ограничено и принимает только 2 значения - явление  Tuples
// удобно для поддерживания однотипных конструкций

// 1 way of destructuring
const idOfDev = skill[0];
const userNameOfDev = skill[1];

// 2 way of destructuring
const [id, userName] = skill;

//если хотим добавить доп значения, то используем оператор spread
const arr: [number, string, ...boolean[]] = [1, "dj", true, true, false];
const arr2: [number, string, ...boolean[]] = [1, "dj"];

// READONLY - нельзя модифицировать
const developer: readonly [number, string] = [18, "Lola"];
// developer[0] = 20;
//никакие изменения нельзя внести после включения readonly!!!

//ENUMS
// 1 - success
// 2 - in_process
// 3 - failed

function compute() {
  return 3;
}

enum PaymentStatus {
  SUCCESS = 1,
  PROCCESS = 2,
  FAILED = compute(),
}
console.log(PaymentStatus.FAILED);

//значение ENUM можем не давать или присвоить цифру, букву, function
//при компайлинге преобразуется в function

//есть const ENUM
const enum Roles {
  ADMIN,
  USER,
}

const userIndex = Roles.USER;
//при компайлинге исчезает, остается его присвоенное к variale значение

//UNION
function logId(id: number | string | boolean) {
  if (typeof id === "number") {
    console.log(id);
  } else if (typeof id === "string") {
    console.log(id);
  } else {
    console.log(id);
  }
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

// TYPE ALIESES
let user: {
  name: string;
  age: number;
  skills: string[];
} = {
  name: "lola",
  age: 18,
  skills: ["1", "2"],
};

//запись выше можно преобразовать с помощью TYPE ALIESES
type User = {
  name: string;
  age: number;
  skills: string[];
};

let user2: User = {
  name: "lola",
  age: 18,
  skills: ["1", "2"],
};

// объединение массивов INTERSECTION
type Role = {
  id: number;
};

type UserWithRole = User & Role;

let user3: UserWithRole = {
  name: "lola",
  age: 18,
  skills: ["1", "2"],
  id: 1,
};

type UserWithRole2 = {
    user: User,
    role: Role
}
//когда нужно объединить и сохранить свои данные у каждого объекта как NAME
