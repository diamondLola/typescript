"use strict";
// INTRODUCTION
const revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
//FUNCTIONS
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
console.log(getFullName('lola', 'ochilova'));
//OBJECTS
function getFullNameObj(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const guest = {
    firstname: 'lola',
    surname: 'ochilova',
    city: 'tashkent',
    age: 18
};
console.log(getFullNameObj(guest));
//MASSIVE
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
    // здесь будут доступны все методы как toLowerCase() и т.д
}
const result = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(result);
//TUPLES
const skill = [1, "Dev"];
// длина skill ограничено и принимает только 2 значения - явление  Tuples
// удобно для поддерживания однотипных конструкций
// 1 way of destructuring
const idOfDev = skill[0];
const userNameOfDev = skill[1];
// 2 way of destructuring
const [id, userName] = skill;
//если хотим добавить доп значения, то используем оператор spread
const arr = [1, "dj", true, true, false];
const arr2 = [1, "dj"];
// READONLY - нельзя модифицировать
const developer = [18, "Lola"];
// developer[0] = 20;
//никакие изменения нельзя внести после включения readonly!!!
//ENUMS
// 1 - success
// 2 - in_process
// 3 - failed
function compute() {
    return 3;
}
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["SUCCESS"] = 1] = "SUCCESS";
    PaymentStatus[PaymentStatus["PROCCESS"] = 2] = "PROCCESS";
    PaymentStatus[PaymentStatus["FAILED"] = compute()] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
console.log(PaymentStatus.FAILED);
const userIndex = 1 /* Roles.USER */;
//при компайлинге исчезает, остается его присвоенное к variale значение
//UNION
function logId(id) {
    if (typeof id === "number") {
        console.log(id);
    }
    else if (typeof id === "string") {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
// TYPE ALIESES
let user = {
    name: "lola",
    age: 18,
    skills: ["1", "2"],
};
let user2 = {
    name: "lola",
    age: 18,
    skills: ["1", "2"],
};
let user3 = {
    name: "lola",
    age: 18,
    skills: ["1", "2"],
    id: 1,
};
//когда нужно объединить и сохранить свои данные у каждого объекта как NAME
