"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// LYTERAL TYPES
// исаользуется в frontend, чтобы задать Props как primary | secondary button
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth("s", "post");
const a = 1;
//присваивается к `a` тип `1` из-за ключевого слова const
let method = "post";
//  fetchWithAuth('s', method);
// не работает, потому что второй аргумент принимает значение только в ТИПЕ `post` or `get`
// у нас на данный момент method имеет TYPE `string`
fetchWithAuth("s", method);
let interUser = {
    name: "me",
    age: 18,
    skills: ["1", "2"],
    id: 1,
    date: new Date(),
    log(id) {
        return "";
    },
};
// password?: string => юзер не обязан отправлять password, его может и не быть
//`password?: string` IS NOT EQUAL TO `passward: string | undefined`
// при `passward: string | undefined` мы ОБЯЗАНЫ приприсать слово `password`, но его значение может отсутсвовать => undefined
// in TYPES happens exactly the same thing
const userPas = {
    login: "lalala",
    // password: 'nanana'
};
// userPas не будет выдавать ошибку из-за отсутсвия password, because it's optional
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
const f1 = () => { };
const f2 = () => {
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
let input;
input = 3;
input = "suycduh";
// let unknownId: number = input
// `unknown` can't assign other types
// let anyId: any = input
// `any` can assign other types
function run(i) {
    if (typeof i == "number") {
        i++;
    }
    else {
        i;
    }
}
run(input);
//даже после сужения остается unknown
function getDAta() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch("");
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
//после обновления `error` became `unknown` type
// before it was an `any` type
//рекомендуется использовать этот метод
function getDAtaFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch("");
        }
        catch (error) {
            let e = error;
            console.log(e.message);
        }
    });
}
//the same as the previous f-n, but not recommended to use
//NEVER
function generatorError(message) {
    throw new Error(message);
}
// f-n никогда не вернется
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
// const z: never = undefined
//никогда не будет присвоен
const z = undefined;
function processAxction(action) {
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
            const _ = action;
            throw new Error("нет такого action");
    }
}
// ` const _:never = action;` загорится красным(говорит об ошибке), если в type добавить доп. опцию как 'failed'
function isString(x) {
    if (typeof x === "string") {
        return true;
    }
    else {
        return false;
    }
}
// работает, не показыват ошибку
function isString2(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    generatorError("message");
}
// если оставить `else if` на конце => boolean загорится красным
// ошибку можно устранить, добавив на конец любую NEVER функцию
//ПРЕОБРАЗОВАНИЕ ТИПОВ
let f = 5;
let g = f.toString();
let e = new String(f).valueOf();
let h = new Boolean(f).valueOf();
// `toString` is NOT `String`
// `toString` converts value to string
// `String` returns the word (let e: `STRING` ) as an OBJ
let c = "hgcs";
let d = parseInt(c);
//1 way оформления
const userxon = {
    name: "string",
    email: "string",
    login: "string",
};
//2 way оформления
const userxon2 = {
    name: "string",
    email: "string",
    login: "string",
};
const admin = Object.assign(Object.assign({}, userxon2), { role: 1 });
// spread operator передал все данные userxon2
//некоторые данные не нужны = тут не будет сайд эффектов, но при компайлинге в JS появятся
function userToAdmin(user) {
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
function isAdmin(user) {
    return "role" in user;
}
//returns boolean
//иногда мы просто так не можем иметь доступ к свойствам user
function isAdminAlternative(user) {
    return user.role !== undefined;
}
// широкий доступ к свойствам user
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error("user is not Admin");
    }
}
//желательно не менять значение объектов (role=0)
