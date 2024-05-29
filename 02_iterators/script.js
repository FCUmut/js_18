// next method returns object with specific properties
// {value:value, done: boolean}
// {value:1, done: false}

// const app = {
//   nextIndex: 0,
//   teams: ["Red Sox", "Yankees", "Astros", "Dodgers"],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     }

//     const returnValue = {
//       value: this.teams[this.nextIndex],
//       done: false,
//     };
//     this.nextIndex++;
//     return returnValue;
//   },
// };

// console.log(app.next()); // Red Sox
// console.log(app.next()); // Yankees
// console.log(app.next()); // Astros
// console.log(app.next()); // Dodgers
// console.log(app.next()); // done: true

// for (const team of app) {
//   console.log(team); // app is not iterable
// }

const app = {
  teams: ["Red Sox", "Yankees", "Astros", "Dodgers"],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? {
              value: this.teams[nextIndex++],
              done: false,
            }
          : { done: true };
      },
    };
  },
};

const iterator = app[Symbol.iterator]();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// now app is iterable
for (const team of app) {
  console.log(team);
}
