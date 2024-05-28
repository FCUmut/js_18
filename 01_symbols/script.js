const sym = Symbol();
const sym1 = Symbol("foo");
const sym2 = Symbol("bar");

console.log(sym, sym1, sym2);
console.log(typeof sym);
console.log(sym.description); // undefined
console.log(sym1.description); // to get 'foo'

// Because Symbols are always unique
console.log(Symbol("sym") === Symbol("sym")); // returns false

const user = {
  [Symbol("id")]: 1, // if you are going to use a variable or something for a key in an object property, you need to use [brackets]
  name: "John Doe",
  email: "john@gmail.com",
};

user.id = 2; // it won't change id of symbol but it will add propert of id
console.log(user);
console.log(user["name"]); // John Doe
console.log(user[Symbol("id")]); // undefined
// console.log(user[[Symbol("id")]]); // cannot convert a Symbol value to a string

// Symbols are NOT enumerable
console.log(Object.keys(user)); // it won't show Symbol, just name and email

for (let key in user) {
  console.log(key);
}

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)); // this will show symbol id

// Symbol.for() - it uses global registry
const sym3 = Symbol.for("foo");
const sym4 = Symbol.for("foo");

console.log(sym3 === sym4); // true

console.log(Symbol.keyFor(sym3)); // foo
console.log(Symbol.keyFor(sym1)); // undefined

console.log(sym1.toString()); // Symbol(foo)
console.log(sym3.toString()); // Symbol(foo)
console.log(sym.toString()); // Symbol()

// actual value will be presented
console.log(sym1.valueOf()); // Symbol(foo)
console.log(sym3.valueOf()); // Symbol(foo)
console.log(sym.valueOf()); // Symbol()

console.log(Object.getOwnPropertyNames(Symbol)); // ['length', 'name', 'prototype', 'for', 'keyFor', 'asyncIterator', 'hasInstance', 'isConcatSpreadable', 'iterator', 'match', 'matchAll', 'replace', 'search', 'species', 'split', 'toPrimitive', 'toStringTag', 'unscopables', 'dispose']
