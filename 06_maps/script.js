const myMap = new Map();

myMap.set("name", "John");
myMap.set(1, "blue");
myMap.set(2, "red");

console.log(myMap.get("name"));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3));

// myMap.delete(2);
// console.log(myMap);

myMap.forEach((value, key) => console.log(value, key));

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

const iterator = myMap.values();

console.log(iterator.next()); // value: "John", done:false
console.log(iterator.next()); // value: "blue", done:false
console.log(iterator.next()); // value: "red", done:false
console.log(iterator.next()); // value: undefined, done:true

const mapArray = Array.from(myMap);
console.log(mapArray);
