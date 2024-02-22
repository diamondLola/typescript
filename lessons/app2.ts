// LYTERAL TYPES
// исаользуется в frontend, чтобы задать Props как primary | secondary button
function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
  return 1;
}

fetchWithAuth("s", "post");

const a = 1;
//присваивается к `a` тип `1` из-за ключевого слова const

let method = "post";
//  fetchWithAuth('s', method);
// не работает, потому что второй аргумент принимает значение только в ТИПЕ `post` or `get`
// у нас на данный момент method имеет TYPE `string`
fetchWithAuth("s", method as "post");
//присвоили к method TYPE 'post', а не ЗНАЧЕНИЕ!!!

// INTRODUCTION TO INTERFACES
// пишется как TYPE, но без знака '='
// starts with key word 'interface'
interface InterfaceUser {
  name: string;
  age: number;
  skills: string[];
  log: (id: number) => string;
}

interface InterfaceRole {
  id: number;
}

interface InterUserWithRole extends InterfaceUser, InterfaceRole {
  date: Date;
}

let interUser: InterUserWithRole = {
  name: "me",
  age: 18,
  skills: ["1", "2"],
  id: 1,
  date: new Date(),
  log(id) {
    return "";
  },
};
//объединение of INTERFACES
// key word 'extends'
// можно объединить 2 и более INTERFACES
// как и Types, Interface тоже в значении может вернуть methods(functions)

// INTERFACE VS TYPE
// FIRST DIFFERENCE
type idishnik = number | string;
//easy with unions

interface interIdishnik {
  ID: number | string;
}
//time consuming with unions

// SECOND DIFFERENCE
type ExUserType = {
  name: string;
};

//   type ExUserType ={
//     age: number
//   }
// будет показывать `Duplicate identifier 'ExUserType'.`
// НЕЛЬЗЯ на ходу дополнять, расширять

interface ExUser {
  name: string;
}

interface ExUser {
  age: number;
}
// МОЖНО на ходу дополнять, расширять

// type aliases, unions, working with primitives => TYPES
// working with libraries => INTERFACES

//OPTIONAL
interface Userjon {
  login: string;
  password?: string;
}
// password?: string => юзер не обязан отправлять password, его может и не быть
//`password?: string` IS NOT EQUAL TO `passward: string | undefined`
// при `passward: string | undefined` мы ОБЯЗАНЫ приприсать слово `password`, но его значение может отсутсвовать => undefined
// in TYPES happens exactly the same thing
const userPas: Userjon = {
  login: "lalala",
  // password: 'nanana'
};
// userPas не будет выдавать ошибку из-за отсутсвия password, because it's optional

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
// in functions `?` means `the given type` or `undefined`
// that's why use conditionals if

//VOID
//does not return ANYTHING
type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => {
  return true;
};

const b = f2;

const voidSkills = ["Dev", "DevOps"];

const voidUserSkills = {
  s: ["q"],
};

voidSkills.forEach((e) => voidUserSkills.s.push(e));
//forEach is void f-n, that's why it allows collaboration with other f-ns

//UNKNOWN
let input: unknown;

input = 3;
input = "suycduh";

// let unknownId: number = input
// `unknown` can't assign other types
// let anyId: any = input
// `any` can assign other types

function run(i: unknown) {
  if (typeof i == "number") {
    i++;
  } else {
    i;
  }
}
run(input);
//даже после сужения остается unknown

async function getDAta() {
  try {
    await fetch("");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
//после обновления `error` became `unknown` type
// before it was an `any` type
//рекомендуется использовать этот метод

async function getDAtaFetch() {
  try {
    await fetch("");
  } catch (error) {
    let e = error as Error;
    console.log(e.message);
  }
}
//the same as the previous f-n, but not recommended to use

//NEVER
function generatorError(message: string): never {
  throw new Error(message);
}
// f-n никогда не вернется

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

// const z: never = undefined
//никогда не будет присвоен
const z: void = undefined;
//присваивается и это главное отличие между VOID и NEVER

type paymentAction = "refund" | "checkout" | "reject";

function processAxction(action: paymentAction) {
  switch (action) {
    case "refund":
      //smth
      break;
    case "checkout":
      //smth
      break;
    case "reject":
      //smth
      break;
    default:
      const _: never = action;
      throw new Error("нет такого action");
  }
}
// ` const _:never = action;` загорится красным(говорит об ошибке), если в type добавить доп. опцию как 'failed'

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else {
    return false;
  }
}
// работает, не показыват ошибку

function isString2(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  generatorError("message");
}
// если оставить `else if` на конце => boolean загорится красным
// ошибку можно устранить, добавив на конец любую NEVER функцию

//ПРЕОБРАЗОВАНИЕ ТИПОВ
let f = 5;
let g: string = f.toString();
let e: string = new String(f).valueOf();
let h: boolean = new Boolean(f).valueOf();
// `toString` is NOT `String`
// `toString` converts value to string
// `String` returns the word (let e: `STRING` ) as an OBJ

let c = "hgcs";
let d: number = parseInt(c);
// `parseInt(c)` recommended way to convert to number rather than just `+`

interface ExGuest {
  name: string;
  email: string;
  login: string;
}
//1 way оформления
const userxon: ExGuest = {
  name: "string",
  email: "string",
  login: "string",
};

//2 way оформления
const userxon2 = {
  name: "string",
  email: "string",
  login: "string",
} as ExGuest;

//преобразование
interface Admin {
  name: string;
  role: number;
}

const admin: Admin = {
  ...userxon2,
  role: 1,
};
// spread operator передал все данные userxon2
//некоторые данные не нужны = тут не будет сайд эффектов, но при компайлинге в JS появятся

function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1,
  };
}
// это f-n mapping
// явное преобразование без лишних данных
// в случае перемен `name: user.name` можем с легкостью изменить на `name: user.login`

//TYPE GUARD
//it's a f-n

function isAdmin(user: ExGuest | Admin): user is Admin {
  return "role" in user;
}
//returns boolean
//иногда мы просто так не можем иметь доступ к свойствам user

function isAdminAlternative(user: ExGuest | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}
// широкий доступ к свойствам user

function setRoleZero(user: Admin | ExGuest) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("user is not Admin");
  }
}
//желательно не менять значение объектов (role=0)
