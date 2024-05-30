// putting asterisk end of the 'function' will let JS know it is generator
function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    // 'yield' keyword in JavaScript is used in generator functions to pause and resume the execution of a function.
    yield teams[i];
  }
}

const teams = ["Red Sox", "Yankees", "Astros", "Dodgers"];

const iterator = createTeamIterator(teams);

// we don't have to create next()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next()); // done: true, value: undefined

// and it is iterable
// for (const team of createTeamIterator(teams)) {
//   console.log(team);
// }

// we can use spread (...) operator
// console.log([...createTeamIterator(teams)]);

const [first, second, third] = createTeamIterator(teams);

console.log(first, second, third);
