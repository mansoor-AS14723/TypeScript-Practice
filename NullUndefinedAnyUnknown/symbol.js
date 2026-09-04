"use strict";
// let id1 = Symbol()
// let id2 = Symbol()
// console.log(id1 === id2);
// let users =
// {
//     id1 : 1,
//     id2 : 2
// }
let id1 = Symbol("id");
let id2 = Symbol("id");
let user_id = {
    [id1]: 2,
    [id2]: 3
};
console.log(user_id[id1]);
