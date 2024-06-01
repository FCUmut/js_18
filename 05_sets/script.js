const set = new Set([1, 2, 2, 2, 3, 4, 4, 4]);
set.add(5);
set.add(5);

console.log(set.has(3)); // true
console.log(set.has(6)); // false

console.log(set); // 1,2,3,4,5

set.delete(5);
console.log(set.has(5)); // false
console.log(set); // 1,2,3,4

const setArray = Array.from(set);
console.log(setArray);

// set is iterable
for (let item of set) {
  console.log(item);
}

const iterator = set.values();

console.log(iterator.next()); // object with value:1 and done:false
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // value:undefined done:true

set.clear();
console.log(set); // size:0
