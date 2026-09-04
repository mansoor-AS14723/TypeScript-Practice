let id1 = Symbol()
let id2 = Symbol()

console.log(id1 === id2);
let users =
{
    id1 : 1,
    id2 : 2
}
let id3 = Symbol("id")
let id4 = Symbol("id")

let user_id = {
    [id3]: 2,
    [id4]: 3
}
console.log(user_id[id3]);

// Explicit symbol type 
let token : symbol = Symbol("token")


