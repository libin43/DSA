let person = {
    name: "Libin",
    age: 25,
    place: {
        native: "pta",
        reside: "kochi"
    }
}

let person2 = structuredClone(person)
person2.place.native = "tvm"
person2.age = 30

console.log(person, 'person');
console.log(person2, 'peron2');

