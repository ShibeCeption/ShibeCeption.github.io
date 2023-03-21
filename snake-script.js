// Javascript.info course

function test() {
  let result = confirm("0.1 > 0.0333 * 2 * 0.5 * 2 - 0.1 = 1.0? Click OK if you agree");
  alert(`The answer is yes it is equal to 1.0 Your answer was ${result}`);
}

function test2() {
  let origVal = prompt("Put in a value", "")
  return alert(`Converted to boolean: ${Boolean(origVal)}`)
}

function test3() {
  check = prompt("What is a Synonym to JavaScript?", "");
  let result = (check == "EcmaScript") ? "Correct!" : "Wrong.";
  alert(result);
}

// Check the login

function test4() {
  let userName = prompt("Who's there", '')

  if (userName === "Admin") {

    let pass = prompt("Password?", '')

    if (pass === "TheMaster") {
      alert("Welcome!")
    } else if (pass === "") {
      alert("Canceled")
    } else {
      alert("Wrong password.")
    }
  } else if (userName === "") {
    alert("Canceled")
  } else {
    alert("I don't know you")
  }
}

function test5() {

  let userName = prompt("Name please?", "")

  if (userName === "") {
    userName = undefined
  }

  alert(`Hello ${userName ?? "User"}!`)
}

function test6() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 1) {
      continue
    } else {
      alert(i)
    }
  }
}

function test7() {
  do {
    input = prompt("Enter a number greater than 100", "");
  } while (input <= 100 && input)
}

function test8() {
  let n = prompt("Enter a number", "")
  let primeArr = [];

  nextPrime:
  for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++)
      if (i % j == 0) continue nextPrime;

    primeArr.push(i)
  }
  alert(primeArr)

}

const obj1 = {
  key1: 0,
  key2: 1,
  key3: 2,
}

let cloneObj = structuredClone(obj1)

function test9(obj) {
  let objData = []
  for (let key in obj) {
    objData.push(key);
    objData.push(obj[key]);
  } alert(objData)
}

// methods

let calculatorOld = {
  sum() {
    alert(`summed = ${this.a + this.b}`);
  },

  mul() {
    alert(`multiplied = ${this.a * this.b}`)
  },

  read() {
    this.a = +prompt("put in a number", "");
    this.b = +prompt("put in a number", "");
  }
}

// chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function () {
    return this.step;
  },
};

// new

function Calculator() {

  this.read = function () {
    this.a = +prompt("Put in a number", "");
    this.b = +prompt("Put in another number", "");
  }

  this.sum = function () {
    return this.a + this.b;
  }

  this.mul = function () {
    return this.a * this.b;
  }
}

let calculator = new Calculator()

/*
calculator.read()
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul()); */

// acumulator

function Accumulator(startingVal) {
  this.value = startingVal

  this.read = function () {
    this.value += +prompt("How much would you like to add?", 0);
  };
}

let accumulator = new Accumulator(1);

/*
accumulator.read();
accumulator.read();

alert(accumulator.value);
*/

// Optional chaining

const objTest = {
  tested() {
    alert("method tester exists!")
  },
}

/* alert(objTest.tested?.()) */

// Symbol type

let testObj = {
  randomProp: "50"
}

testObj["randomerProp"] = 5
testObj["randomerProp"] = "value"

testObj[Symbol("value")] = "value2"
testObj[Symbol("value2")] = "value3"

// console.log(testObj)

// conversion to primitives

let objTest2 = {
  name: "Doggo",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

/*
alert(objTest2); // hint: string -> {name: "John"}
alert(+objTest2); // hint: number -> 1000
alert(objTest2 + 500); // hint: default -> 1500
*/

const objTest3 = {
  name: "Shibeception",
  money: 2000,

  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },

};

/*
alert(objTest3);
alert(+objTest3);
alert(objTest3 + 500);
*/

let objTest4 = {
  name: "Doggorineta",

  toString() {
    return this.name;
  }
};

/*
alert(objTest4);
alert(objTest4 + 44);
*/

// Pixel art Test

/*
alert(`
🟧🟧🟧🟧🟧🟧🟧🟧
🟧🟧🟧🟧🟧🟧🟧🟧
🟧🟧⬛️🟧🟧⬛️🟧🟧
🟧🟧🟧🟧🟧🟧🟧🟧
🟧🟧⬜⬛️⬛️⬛️⬜🟧
🟧⬜⬜⬜⬛️⬜⬜⬜
⬜⬜⬛️⬜⬛️⬜⬛️⬜
⬜⬜⬜⬛️⬛️⬛️⬜⬜`);

alert(`
⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬛️⬜⬜⬛️⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬛️⬛️⬛️⬜⬜
⬜⬜⬜⬜⬛️⬜⬜⬜
⬜⬜⬛️⬜⬛️⬜⬛️⬜
⬜⬜⬜⬛️⬛️⬛️⬜⬜
`);
*/

// Data types
// Numbers

// let number = 3e8
// console.log(5.34534.toFixed(2))
// console.log(number)
// console.log(5e-6)
// console.log(0xff)

function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//  alert( randomInteger(1, 3) );

let stringTest = "Hello there"
let stringTestArr = []

for (let char of stringTest) {
  stringTestArr.push(char)
}

// alert(stringTestArr)

let stringTest2 = "Last letter"

// alert(stringTest2.at(-1))

// toUppercase() and toLowercase()

// substrings

let strTest = "Racoon-dog"

/*
alert(strTest.indexOf("Racoon"))
alert(strTest.includes("Racoon", 7))
alert(strTest.startsWith("Raco"))
alert(strTest.endsWith("og"))
alert(strTest.slice(2, 6))
alert(strTest.slice(-10, -4))
alert(strTest.substring(2, 6))
alert(strTest.substr(-4))
alert("A".codePointAt(0))
*/

let arrTest = ["dog", "Dog", "Dogs", "dogs", "Doggos"]
// for of
for (let dog of arrTest) {
  // alert(dog)
}

function arrFunc() {
  let nums = [];

  while (true) {

    let value = prompt("Put in a number", "");

    if (value === "" || value === null || !isFinite(value)) break;

    nums.push(+value)
  }

  let sum = 0
  for (let number of nums) {
    sum += number;
  }

  alert(sum)
}

// arrFunc()

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

/* alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0 */

// Splice()

let arrTest2 = ["Pear", "Apple", "Cat?!", "Tomato"]
/*alert(arrTest2.splice(2, 2, "Orange", "Lemon"));
alert(arrTest2.slice(1, 3));
alert(arrTest2);
alert(arrTest2.concat(["Pineapple", "Lemon", "Orange"])); */

let arrTest3 = [
  { id: 1, username: "Test" },
  { id: 2, username: "Agent" },
  { id: 3, username: "User" },
  { id: 4, username: "Test" }
]

let arrTest4 = arrTest3.find(item => item.id === 1)
let arrTest5 = arrTest3.findIndex(item => item.username == 'Test');
let arrTest6 = arrTest3.findLastIndex(item => item.username == 'User');
let arrTest7 = arrTest3.filter(item => item.username == "Test")
/* alert(arrTest4.username);
alert(arrTest5)
alert(arrTest6)
console.log(arrTest7)
alert(arrTest7.length) */
let lengths = ["Pine", "Apple", "Tree"].map(item => item.length);
// alert(lengths);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);
arr.sort((a, b) => a - b);

// alert(arr);

let names1 = 'Doggo, Shibeception, CatIsLazy';

let arrTest8 = names1.split(', ');

for (let name of arrTest8) {
  // alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

let arrTest9 = [9, 6, 5, 49, 258];

let result = arrTest9.reduce((sum, current) => sum + current, 0 /* 0 isn't neccesary */);
let result2 = arrTest9.reduceRight((sum, current) => sum + current, 0 /* 0 isn't neccesary */);
/*
alert(result);
alert(result2);
*/

// tasks

function camelize(str) {
  alert(str
    .split("-")
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''))
}

/* camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'; */

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arrTest10 = [5, 3, 8, 1];

filterRangeInPlace(arrTest10, 1, 4);

// alert(arrTest10);


let arrTest11 = [5, 2, 1, -10, 8];

arrTest11.sort((a, b) => b - a);

// alert(arrTest11);

function copySorted(arr) {
  return arr.slice().sort()
}

let arrTest12 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrTest12);

// alert(sorted);
// alert(arrTest12);

function smartCalculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function (str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new smartCalculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result3 = powerCalc.calculate("2 ** 3");
// alert(result3);

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

// alert(names);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

for (let key in count) {
  // alert(`${key}: ${count[key]}`);
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john2 = { name: "John", age: 27 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arrTest13 = [john2, pete2, mary2];

// alert(getAverageAge(arrTest13));

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O", ":-C"
];

// alert(unique(strings));

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let users2 = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users2);

// console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// iterables

let range = {
  from: 1,
  to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {

  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

let range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range2) {
  /// alert(num); // 1, then 2, 3, 4, 5
}

for (let num of range) {
  /// alert(num); // 1, then 2, 3, 4, 5
}

for (let char of "Dogs") {
  // triggers 4 times: once for each character
  // alert(char); // t, then e, then s, then t
}

let str2 = '𝒳😂';
for (let char of str2) {
  // alert( char ); // 𝒳, and then 😂
}

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  // alert(result.value); // outputs characters one by one
}

let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// Error (no Symbol.iterator)
// for (let item of arrayLike) { }

let arrayLike2 = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr2 = Array.from(arrayLike2); // (*)
// alert(arr2.pop()); // World (method works)
// alert(Array.from(range)) // Shortcut

let str3 = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str3);

/* alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2 */

// same as

let str4 = '𝒳😂';

let chars2 = []; // Array.from internally does the same loop
for (let char of str4) {
  chars2.push(char);
}

// alert(chars2);

// We can even build surrogate-aware slice on it:

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str5 = '𝒳😂𩷶';

// alert( slice(str5, 1, 3) ); // 😂𩷶

// the native method does not support surrogate pairs
// alert( str5.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)

// Map and Set

let mapTest = new Map()

mapTest
  .set(1, 'Dogs')
  .set('1', 'Are')
  .set(true, 'Cool')

/*
alert(mapTest.get(1));
alert(mapTest.get('1'));
alert(mapTest.get(true))
mapTest.delete(true)
alert(mapTest.size)
mapTest.clear()
alert(mapTest.has(1))
*/

// console.log(mapTest.values())

// iterables for maps

/*
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}

// map.entries

let objTest5 = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(objTest5));

alert(map.get('name')); // John */

// object.fromEntries

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

// alert(prices.orange); // 2

/*

    new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    set.add(value) – adds a value, returns the set itself.
    set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    set.has(value) – returns true if the value exists in the set, otherwise false.
    set.clear() – removes everything from the set.
    set.size – is the elements count.
*/

let set = new Set();

let john5 = { name: "John" };
let pete5 = { name: "Pete" };
let mary5 = { name: "Mary" };

// visits, some users come multiple times
set.add(john5);
set.add(pete5);
set.add(mary5);
set.add(john5);
set.add(mary5);

// set keeps only unique values
// alert(set.size); // 3

for (let user of set) {
  // alert(user.name); // John (then Pete and Mary)
}

// destructuring

let testArr = ["Ben", "Dover"]

let [firstName, surname] = testArr
let [firstName2, surname2] = "Grantas Mineikis".split(' ')
/* alert(firstName)
alert(surname)
alert(firstName2)
alert(surname2) */

// second element is not needed

let [firstName3, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); // Consul

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

// alert(user.name); // John
// alert(user.surname); // Smith

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

// alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

let [name4, name5, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// default values
let [name6 = "Guest", surname3 = "Anonymous"] = ["Julius"];

// alert(name6);    // Julius (from array)
// alert(surname3); // Anonymous (default used)

//let [name7 = prompt('name?'), surname4 = prompt('surname?')] = ["Julius"];

//alert(name7);    // Julius (from array)
//alert(surname4); // whatever prompt gets

let { height, width, title2 } = { title: "Menu", height: 200, width: 100 }

let options2 = {
  title: "Menu"
};

let { width2 = 100, height2 = 200, title3 } = options2;



let title4, width3, height3;

// okay now
({ title4, width3, height3 } = { title: "Menu", width: 200, height: 100 });

// nested objects

let options3 = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width5,
    height5
  },
  items: [item1, item2], // assign items here
  title6 = "Menu" // not present in the object (default value is used)
} = options3;



// we pass object to function
let options4 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
  // title, items – taken from options,
  // width, height – defaults used
  alert(`${title} ${width} ${height}`); // My Menu 200 100
  alert(items); // Item1, Item2
}

// showMenu(options4);
/*
let options5 = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
}) {
    alert(`${title} ${w} ${h}`); // My Menu 100 200
    alert(item1); // Item1
    alert(item2); // Item2
}


function({
  incomingProperty: varName = defaultValue
  ...
})

 showMenu({}); // ok, all values are default

showMenu(); // this would give an error

/*

We can fix this by making {} the default value for the whole object of parameters:

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200 */

/*
let dateTest = new Date("2012-01-09")
alert(dateTest.getFullYear())
alert(dateTest.getMonth())
alert(dateTest.getDate())
alert(dateTest.getDay())
alert(dateTest.getTime())
console.log(dateTest.getTimezoneOffset())
alert(Date.now())

let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates
*/

// Benchmarks

/*

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

alert('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
alert('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');



function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

alert( 'Total time for diffSubtract: ' + time1 );
alert( 'Total time for diffGetTime: ' + time2 );

Modern JavaScript engines start applying advanced optimizations only to “hot code” that executes many times (no need to optimize rarely executed things). So, in the example above, first executions are not well-optimized. We may want to add a heat-up run:

// added for "heating up" prior to the main loop
bench(diffSubtract);
bench(diffGetTime);

// now benchmark
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

*/

// Mini project

/*
function DateTest() {
    let dateInput = prompt(
        `Please put in a date using the YYYY-MM-DD Format
Example: 2012-01-09
P.S You may exclude the month and or day`, ``)

    alert(`${Date.parse(dateInput)} Milliseconds have gone since 1970`)
}

// json methods

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

// alert(typeof json); // we've got a string!

// alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}

// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3] */

/*
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
{"title":"Conference","participants":[{},{}]}

let room2 = {
    number: 23
};

let meetup2 = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );

{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}


let room3 = {
    number: 23
};

let meetup3 = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

/* alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]

*/

let user4 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

// alert(JSON.stringify(user4, null, 2));
/* two-space indents:
{
    "name": "John",
        "age": 25,
            "roles": {
        "isAdmin": false,
            "isEditor": true
    }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

/*
let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

let meetup = {
    title: "Conference",
    room
};

// alert( JSON.stringify(room) ); // 23

// alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }


// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

// alert(numbers[1]); // 1

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user5 = JSON.parse(userData);

// alert(user5.friends[1]); // 1

let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;

let str_ = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let str9 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup9 = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup9.date.getDate() ); // now works! */

let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;

schedule = JSON.parse(schedule, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

// alert(schedule.meetups[1].date.getDate()); // works!

let user10 = {
  name: "John Smith",
  age: 35
};

let user11 = JSON.parse(JSON.stringify(user10))

// recursion and stack

function pow(x, n) {
  if (n == 1) {
    return x
  }
  return x * pow(x, n - 1);
}

/* let prompt1 = prompt("Put in a number", "")
let prompt2 = prompt("Put in another number", "")

alert(pow(parseInt(prompt1), parseInt(prompt2))); */

let company = { // the same object, compressed for brevity
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// Recursive function calling sure does work I can understand it perfectly -Shibeception
// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

// alert(sumSalaries(company)); // 7700

// Quick reduce() test

let reduceTest1 = [5, 10, 50]
let initialValue = 0
let resultReduce = reduceTest1.reduce((accumulator, currentValue) => accumulator + currentValue,
  initialValue)

// alert(resultReduce)

// Recursive structures

let linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert(list.value);

  if (list.next) {
    printList(list.next);
  }

}

// printList(list);

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    // printReverseList(list.next);
  }

  // alert(list.value);
}

// printReverseList(list);

// Speard and Rest operators

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

/* alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6 */

function showName() {
  /* alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] ); */

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

let arr14 = [3, 5, 1];

// alert( Math.max(...arr14) ); // 5 (spread turns array into a list of arguments)

let arr15 = [3, 5, 1];
let arr16 = [8, 9, 15];

let merged = [0, ...arr15, 2, ...arr16];

// alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

let str1 = "Hello";

// Array.from converts an iterable into an array
// alert(Array.from(str1)); // H,e,l,l,o

// closure

{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  // alert(message); // Hello
}

// alert(message); // Error: message is not defined

if (true) {
  let phrase = "Hello!";

  // alert(phrase); // Hello!
}

// alert(phrase); // Error, no such variable!

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  /* alert("Hello, " + getFullName());
  alert("Bye, " + getFullName()); */

}

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

/* alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2 */

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

// sayHi(); // Hello, Guest

// But this won't work:
// func(); // Error, func is not defined (not visible outside of the function)

{
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // Now all fine
    }
  };

  let welcome = sayHi;
  sayHi = null;

  // welcome(); // Hello, Guest (nested call works)
}

// New functions

let sum = new Function('a', 'b', 'return a + b');

// alert( sum(1, 2) ); // 3

/*
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined

Compare it with the regular behavior:

function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc

new Function('a', 'b', 'return a + b'); // basic syntax
new Function('a,b', 'return a + b'); // comma-separated
new Function('a , b', 'return a + b'); // comma-separated with spaces */

// timers

/* setTimeout(snekStep, 1000) waits 1000ms / 1s before running

function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John)

setTimeout("alert('Hello')", 1000);

But using strings is not recommended, use arrow functions instead of them, like this:

setTimeout(() => alert('Hello'), 1000);
// wrong!
setTimeout(sayHi(), 1000);

let timerId = setTimeout(...);
clearTimeout(timerId);
*/

let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier

clearTimeout(timerId);
// alert(timerId); // same identifier (doesn't become null after canceling)
let i = 0;

function snekStep() {
  i++
  alert(`Snek has walked ${i} steps`)
};

// setInterval(snekStep, 3000);

// setTimeout() is more flexible than setInterval

// use ClearInterval() and ClearTimeout() to get rid of them since they take up alot of cpu

/*
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }

  // usage:
  printNumbers(5, 10);

  function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// usage:
printNumbers(5, 10);

Note that in both solutions, there is an initial delay before the first output. The function is called after 1000ms the first time.

If we also want the function to run immediately, then we can add an additional call on a separate line, like this:

function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10)

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
} */

// transparent caching

{
  function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {    // if there's such key in cache
        return cache.get(x); // read the result from it
      }

      let result = func(x);  // otherwise call func

      cache.set(x, result);  // and cache (remember) the result
      return result;
    };
  }

  slow = cachingDecorator(slow);

  /* alert(slow(1)); // slow(1) is cached and the result returned
  alert("Again: " + slow(1)); // slow(1) result returned from cache

  alert(slow(2)); // slow(2) is cached and the result returned
  alert("Again: " + slow(2)); // slow(2) result returned from cach */
}

// func.call

/* function sayHi() {
    alert(this.name);
  }

  let user = { name: "John" };
  let admin = { name: "Admin" };

  // use call to pass different objects as "this"
  sayHi.call( user ); // John
  sayHi.call( admin ); // Admin

  let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // works
alert( worker.slow(2) ); // works, doesn't call the original (cached)

let worker = {
    slow(min, max) {
      alert(`Called with ${min},${max}`);
      return min + max;
    }
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments); // (**)

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + ',' + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  alert( worker.slow(3, 5) ); // works
  alert( "Again " + worker.slow(3, 5) ); // same (cached) */

// func.apply

/*
let wrapper = function() {
  return func.apply(this, arguments);
};

function hash() {
  alert( [].join.call(arguments) ); // 1,2
}

hash(1, 2); */

// function binding

/*
let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(function() {
    user.sayHi(); // Hello, John!
  }, 1000);

  Now it works, because it receives user from the outer lexical environment, and then calls the method normally.

  The same, but shorter:

  setTimeout(() => user.sayHi(), 1000); // Hello, John!


  binding

  let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

let user = {
  firstName: "John"
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

Now let’s try with an object method:

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};



bind all things

for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}

*/

// Partial functions

function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

/* alert( triple(3) ); // = mul(3, 3) = 9
 alert( triple(4) ); // = mul(3, 4) = 12
 alert( triple(5) ); // = mul(3, 5) = 15

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method with fixed time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// Something like:
// [10:00] John: Hello! */

/*

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(?, ?); // ?

Your changes should only modify the highlighted fragment.

    Either use a wrapper function, an arrow to be concise:

askPassword(() => user.login(true), () => user.login(false));

Now it gets user from outer variables and runs it the normal way.

Or create a partial function from user.login that uses user as the context and has the correct first argument:

askPassword(user.login.bind(user, true), user.login.bind(user, false)); */



// Object properties configuration

/* let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

    let user = {
        name: "John"
    };

    let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

    alert(JSON.stringify(descriptor, null, 2));
    /* property descriptor:
    {
      "value": "John",
      "writable": true,
      "enumerable": true,
      "configurable": true
    }
    
    let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );

{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete";

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString

If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one:

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// Now our toString disappears:
for (let key in user) alert(key); // name

Non-enumerable properties are also excluded from Object.keys:

alert(Object.keys(user)); // name

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );

{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}


So, a programmer is unable to change the value of Math.PI or overwrite it.

Math.PI = 3; // Error, because it has writable: false

// delete Math.PI won't work either

We also can’t change Math.PI to be writable again:

// Error, because of configurable: false
Object.defineProperty(Math, "PI", { writable: true });

let editBlocker = {
    value: "This is unchangable",
};

Object.defineProperty(editBlocker, "value", { writable: false });

editBlocker.value = "This won't be changed";
alert(editBlocker.value)

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false,
  configurable: false
});

// won't be able to change user.name or its flags
// all this won't work:
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });



There’s a minor exception about changing flags.

We can change writable: true to false for a non-configurable property,
 thus preventing its value modification (to add another layer of protection).
 Not the other way around though. */

/*
Object.defineProperties(user, {
 name: { value: "John", writable: false },
 surname: { value: "Smith", writable: false },
 // ...
});
*/
{
  let tests = {
    prop: "val",
    prop2: "val2"
  }
  Object.defineProperties(tests, {
    prop: { prop: "val", writable: false },
    prop2: { prop2: "val2", writable: false },
  });

  let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(tests));
  // console.log(Object.getOwnPropertyDescriptors(clone))
  // Normally when we clone an object, we use an assignment to copy properties, like this:

  for (let key in user) {
    clone[key] = user[key]
  }
}

// Object.preventExtensions(obj) prevent changing properties

// Object.seal(obj) adding/removing from properties for all objects

// Object.freeze(obj) forbids everything like changing properties for all objects

// Object.isExtensible(obj) Returns false if adding properties is forbidden, otherwise true.

// Object.isSealed(obj) Returns true if adding/removing properties is forbidden,
// and all existing properties have configurable: false.

// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties
// is forbidden, and all current properties are configurable: false, writable: false.
// These methods are rarely used in practice.



// Getters and setters

/*
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};



let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
*/

{
  let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };

  // set fullName is executed with the given value.
  // user.fullName = prompt("Put in a full name", "")

  // alert(user.name); // Alice
  // alert(user.surname); // Cooper
}

/*
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname



// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
  get() {
    return 1
  },

  value: 2
});
*/


{
  let user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };

  // user.name = "Pete";
  // alert(user.name); // Pete

  // user.name = ""; // Name is too short...
}

/*
So, the name is stored in _name property, and the access is done via getter and setter.
Technically, external code is able to access the name directly by using user._name. But there is a widely known
 convention that properties starting with an underscore "_"
 are internal and should not be touched from outside the object. */



/*
One of the great uses of accessors is that they allow to take control over a “regular” data property at any moment by replacing it with a getter and a setter and tweak its behavior.

Imagine we started implementing user objects using data properties name and age:

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User("John", 25);

alert( john.age ); // 25

…But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s more precise and convenient:

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john = new User("John", new Date(1992, 6, 1));

Now what to do with the old code that still uses age property?

We can try to find all such places and fix them, but that takes time and can be hard to do if that code is used by many other people. And besides, age is a nice thing to have in user, right?

Let’s keep it.

Adding a getter for age solves the problem:

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age

Now the old code works too and we’ve got a nice additional property. */



// Prototypal inheritence

/*
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true



let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk



let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)



let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected



An interesting question may arise in the example above: what’s the value of this inside set fullName(value)? Where are the properties this.name and this.surname written: into user or admin?

The answer is simple: this is not affected by prototypes at all.

No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

So, the setter call admin.fullName= uses admin as this, not user.

That is actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.

For instance, here animal represents a “method storage”, and rabbit makes use of it.

The call rabbit.sleep() sets this.isSleeping on the rabbit object:

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
*/

{
  let animal = {
    eats: true
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  // Object.keys only returns own keys
  // alert(Object.keys(rabbit)); // jumps

  // for..in loops over both own and inherited keys
  for (let prop in rabbit) { }// alert(prop); // jumps, then eats
}



{
  let animal = {
    eats: true
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
      // alert(`Our: ${prop}`); // Our: jumps
    } else {
      // alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }
}

/*
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)

There should be 3 answers.

    true, taken from rabbit.
    null, taken from animal.
    undefined, there’s no such property any more.




    Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
    Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

    Let’s add __proto__:

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined

In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe.



Where does it write?
importance: 5

We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

The answer: rabbit.

That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, then executed with this=rabbit.



let hamster = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing> */

// F.prototype

{
  let animal = {
    eats: true
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

  // alert( rabbit.eats ); // true
}

{
  function Rabbit2(name) {
    this.name = name;
    // alert(name);
  }

  let rabbit = new Rabbit2("White Rabbit");

  let rabbit2 = new rabbit.constructor("Black Rabbit");
}

/*
So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:

function Rabbit() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved

Or, alternatively, recreate the constructor property manually:

Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

// now constructor is also correct, because we added it */



/*
We can use such approach if we are sure that "constructor" property has the correct value.

For instance, if we don’t touch the default "prototype", then this code works for sure:

function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // Pete (worked!)

It worked, because User.prototype.constructor == User.

…But if someone, so to speak, overwrites User.prototype and forgets to recreate constructor to reference User, then it would fail.

For instance:

function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // undefined

Why user2.name is undefined?

Here’s how new user.constructor('Pete') works:

    First, it looks for constructor in user. Nothing.
    Then it follows the prototype chain. The prototype of user is User.prototype,
     and it also has no constructor (because we “forgot” to set it right!).
    Going further up the chain, User.prototype is a plain object, its prototype is the built-in Object.prototype.
    Finally, for the built-in Object.prototype, there’s a built-in Object.prototype.constructor == Object. So it is used.

Finally, at the end, we have let user2 = new Object('Pete').

Probably, that’s not what we want. We’d like to create new User, not new Object. That’s the outcome of the missing constructor.

(Just in case you’re curious, the new Object(...) call converts its argument to an object. That’s a theoretical thing, in practice
 no one calls new Object with a value, and generally we don’t use new Object to make objects at all). */



/*
Native prototypes

The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.

First we’ll look at the details, and then how to use it for adding new capabilities to built-in objects.
Object.prototype

Let’s say we output an empty object:

let obj = {};
alert( obj ); // "[object Object]" ?

Where’s the code that generates the string "[object Object]"? That’s a built-in toString method, but where is it? The obj is empty!

…But the short notation obj = {} is the same as obj = new Object(), where Object is a built-in object constructor function, with its own prototype referencing a huge object with toString and other methods.

Here’s what’s going on:

When new Object() is called (or a literal object {...} is created), the [[Prototype]] of it is set to Object.prototype according to the rule that we discussed in the previous chapter:

So then when obj.toString() is called the method is taken from Object.prototype.

We can check it like this:

let obj = {};

alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true

Please note that there is no more [[Prototype]] in the chain above Object.prototype:

alert(Object.prototype.__proto__); // null



/*
let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null */



/*
Primitives

The most intricate thing happens with strings, numbers and booleans.

As we remember, they are not objects. But if we try to access their properties,
 temporary wrapper objects are created using built-in constructors String,
  Number and Boolean. They provide the methods and disappear.

These objects are created invisibly to us and most
engines optimize them out, but the specification describes it exactly this way.
 Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and Boolean.prototype.
Values null and undefined have no object wrappers

Special values null and undefined stand apart.
 They have no object wrappers, so methods and properties
  are not available for them. And there are no corresponding prototypes either. */

/*
Chaning native Prototypes

Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes available to all strings:

String.prototype.show = function() {
alert(this);
};

"BOOM!".show(); // BOOM!

During the process of development, we may have ideas for new built-in methods we’d like to have, and we may be tempted to add them to native prototypes. But that is generally a bad idea.
Important:

Prototypes are global, so it’s easy to get a conflict. If two libraries add a method String.prototype.show, then one of them will be overwriting the method of the other.

So, generally, modifying a native prototype is considered a bad idea.

In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.

Polyfilling is a term for making a substitute for a method that exists in the JavaScript specification, but is not yet supported by a particular JavaScript engine.

We may then implement it manually and populate the built-in prototype with it.

For instance:

if (!String.prototype.repeat) { // if there's no such method
// add it to the prototype

String.prototype.repeat = function(n) {
  // repeat the string n times

  // actually, the code should be a little bit more complex than that
  // (the full algorithm is in the specification)
  // but even an imperfect polyfill is often considered good enough
  return new Array(n + 1).join(this);
};
}

alert( "La".repeat(3) ); // LaLaLa */

/*
Borrowing from prototypes
In the chapter Decorators and forwarding, call/apply we talked about method borrowing.

That’s when we take a method from one object and copy it into another.

Some methods of native prototypes are often borrowed.

For instance, if we’re making an array-like object, we may want to copy some Array methods to it.

E.g.

let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!

It works because the internal algorithm of the built-in join method only cares about the correct indexes and the length property. It doesn’t check if the object is indeed an array. Many built-in methods are like that.

Another possibility is to inherit by setting obj.__proto__ to Array.prototype, so all Array methods are automatically available in obj.

But that’s impossible if obj already inherits from another object. Remember, we only can inherit from one object at a time.

Borrowing methods is flexible, it allows to mix functionalities from different objects if needed.
Summary

    All built-in objects follow the same pattern:
        The methods are stored in the prototype (Array.prototype, Object.prototype, Date.prototype, etc.)
        The object itself stores only the data (array items, object properties, the date)
    Primitives also store methods in prototypes of wrapper objects: Number.prototype, String.prototype and Boolean.prototype. Only undefined and null do not have wrapper objects
    Built-in prototypes can be modified or populated with new methods. But it’s not recommended to change them. The only allowable case is probably when we add-in a new standard, but it’s not yet supported by the JavaScript engine
*/

{
  Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };

  function f() {
    alert("Hello!");
  }

  // f.defer(1000); // shows "Hello!" after 1 sec
}

{
  Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };

  // check it
  function f(a, b) {
    alert(a + b);
  }

  // f.defer(1000)(1, 2); / / shows 3 after 1 sec
}

// Prototype methods, objects without __proto__

/*
In the first chapter of this section, we mentioned that there are modern methods to setup a prototype.

Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat deprecated
 (moved to the so-called “Annex B” of the JavaScript standard, meant for browsers only).

The modern methods to get/set a prototype are:

    Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
    Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

The only usage of __proto__, that’s not frowned upon, is as a property when creating a new object: { __proto__: ... }.

Although, there’s a special method for this too:

    Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
*/

{
  let animal = {
    eats: true
  };

  // create a new object with animal as a prototype
  let rabbit = Object.create(animal); // same as {__proto__: animal}

  // alert(rabbit.eats); // true

  // alert(Object.getPrototypeOf(rabbit) === animal); // true

  Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
}

{
  let animal = {
    eats: true
  };

  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });

  // alert(rabbit.jumps); // true
}

// True clones

{
  /* let clone = Object.create(
      Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
  ); */
}

// plain objects

let map = new Map();

// let key = prompt("What's the key?", "__proto__");
// map.set(key, "some value");

// alert(map.get(key)); // "some value" (as intended)

{
  let obj = Object.create(null);
  // or: obj = { __proto__: null }

  //    let key = prompt("What's the key?", "__proto__");
  //    obj[key] = "some value";

  // alert(obj[key]); // "some value"
}

{
  let chineseDictionary = Object.create(null);
  chineseDictionary.hello = "你好";
  chineseDictionary.bye = "再见";

  // alert(Object.keys(chineseDictionary)); // hello,bye
}

{
  let dictionary = Object.create(null, {
    toString: { // define toString property
      value() { // the value is a function
        return Object.keys(this).join();
      }
    }
  });

  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";

  // apple and __proto__ is in the loop
  for (let key in dictionary) {
    //       alert(key); // "apple", then "__proto__"
  }

  // comma-separated list of properties by toString
  // alert(dictionary); // "apple,__proto__"
}

{
  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function () {
    alert(this.name);
  }

  let rabbit = new Rabbit("Rabbit");

  /* rabbit.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
  Object.getPrototypeOf(rabbit).sayHi(); // undefined
  rabbit.__proto__.sayHi();              // undefined */
}


// introduction callbacks

{
  class User {

    constructor(name) {
      this.name = name;
    }

    sayHi() {
      alert(this.name);
    }

  }

  // Usage:
  let user = new User("John");
  // user.sayHi();
}

/*
No comma between class methods

A common pitfall for novice developers is to put a comma between class methods, which would result in a syntax error.

The notation here is not to be confused with object literals. Within the class, no commas are required.
*/

/*
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi */

/*
class User {
  constructor() {}
}

alert(User); // class User { ... } */

/*
    Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

    That’s good, because if we for..in over an object, we usually don’t want its class methods.

    Classes always use strict. All code inside the class construct is automatically in strict mode.

Besides, class syntax brings many other features that we’ll explore later. */



/*
    let User = class {
        sayHi() {
            alert("Hello");
        }
    };
*/

/*
// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
sayHi() {
alert(MyClass); // MyClass name is visible only inside the class
}
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class */



function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// Create a new class
let User = makeClass("Hello");

// new User().sayHi(); // Hello



{
  class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }

  }

  let user = new User("John");
  // alert(user.name); // John

  // user = new User(""); // Name is too short.
}

// Technically, such class declaration works by creating getters and setters in User.prototype.

// Computed names […]

{
  class User {

    ['say' + 'Hi']() {
      alert("Hello");
    }

  }

  // new User().sayHi();
}

// Class fields

/*
Class fields
Old browsers may need a polyfill

Class fields are a recent addition to the language.

Previously, our classes only had methods.

“Class fields” is a syntax that allows to add any properties.

For instance, let’s add name property to class User:

class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!

So, we just write " = " in the declaration, and that’s it.

The important difference of class fields is that they are set on individual objects, not User.prototype:

class User {
  name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined

We can also assign values using more complex expressions and function calls:

class User {
  name = prompt("Name, please?", "John");
}

let user = new User();
alert(user.name); // John

Making bound methods with class fields

As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.

So if an object method is passed around and called in another context, this won’t be a reference to its object any more.

For instance, this code will show undefined:

class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

The problem is called "losing this".

There are two approaches to fixing it, as discussed in the chapter Function binding:

    Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
    Bind the method to object, e.g. in the constructor.

Class fields provide another, quite elegant syntax:

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello

The class field click = () => {...} is created on a per-object basis, there’s a separate function for each Button object, with this inside it referencing that object. We can pass button.click around anywhere, and the value of this will always be correct.

That’s especially useful in browser environment, for event listeners.
Summary

The basic class syntax looks like this:

class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}

MyClass is technically a function (the one that we provide as constructor),
 while methods, getters and setters are written to MyClass.prototype.

In the next chapters we’ll learn more about classes, including inheritance and other features. */

{
  class User {
    name = "John";

    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
  }

  // new User().sayHi(); // Hello, John!
}

{
  class User {
    name = prompt("Name, please?", "John");
  }

  // let user = new User();
  // alert(user.name); // John
}

// Making bound methods with class fields

{
  class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }

  let button = new Button("hello");

  // setTimeout(button.click, 1000); // hello
}

// clock

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// Class inheritence

{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }

  let animal = new Animal("My animal");

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }

  let rabbit = new Rabbit("White Rabbit");

  // rabbit.run(5); // White Rabbit runs with speed 5.
  // rabbit.hide(); // White Rabbit hides!
}

{
  function f(phrase) {
    return class {
      sayHi() { alert(phrase); }
    };
  }

  class User extends f("Hello") { }

  // new User().sayHi(); // Hello
}

{
  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }

  }

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }

    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }

  let rabbit = new Rabbit("White Rabbit");

  // rabbit.run(5); // White Rabbit runs with speed 5.
  // rabbit.stop(); // White Rabbit stands still. White Rabbit hides!


  // Alternative
  /* class Rabbit extends Animal {
      stop() {
          setTimeout(() => super.stop(), 1000); // call parent stop after 1sec instead of Rabbit stop
      }
  } */

  /*
  The super in the arrow function is the same as in stop(),
   so it works as intended. If we specified a “regular” function here, there would be an error:
  // Unexpected super

  setTimeout(function() { super.stop() }, 1000); */
}

// Overriding constructor

/*
    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
        // ...
    }

    class Rabbit extends Animal {

        constructor(name, earLength) {
            this.speed = 0;
            this.name = name;
            this.earLength = earLength;
        }

        // ...
    }

    // Doesn't work!
    let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.
*/

{
  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    // ...
  }

  class Rabbit extends Animal {

    constructor(name, earLength) {
      super(name); // super goes before this
      this.earLength = earLength;
    }

    // ...
  }

  // now fine
  /* let rabbit = new Rabbit("White Rabbit", 10);
  alert(rabbit.name); // White Rabbit
  alert(rabbit.earLength); // 10 */
}

/*
Overriding class fields: a tricky note
Advanced note

This note assumes you have a certain experience with classes, maybe in other programming languages.

It provides better insight into the language and also explains the behavior that might be a source of bugs (but not very often).

If you find it difficult to understand, just go on, continue reading, then return to it some time later.

We can override not only methods, but also class fields.

Although, there’s a tricky behavior when we access an overridden field in parent constructor, quite different from most other programming languages.

Consider this example:

class Animal {
  name = 'animal';

  constructor() {
    alert(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal

Here, class Rabbit extends Animal and overrides the name field with its own value.

There’s no own constructor in Rabbit, so Animal constructor is called.

What’s interesting is that in both cases: new Animal() and new Rabbit(), the alert in the line (*) shows animal.

In other words, the parent constructor always uses its own field value, not the overridden one.

What’s odd about it?

If it’s not clear yet, please compare with methods.

Here’s the same code, but instead of this.name field we call this.showName() method:

class Animal {
  showName() {  // instead of this.name = 'animal'
    alert('animal');
  }

  constructor() {
    this.showName(); // instead of alert(this.name);
  }
}

class Rabbit extends Animal {
  showName() {
    alert('rabbit');
  }
}

new Animal(); // animal
new Rabbit(); // rabbit

Please note: now the output is different.

And that’s what we naturally expect. When the parent constructor is called in the derived class, it uses the overridden method.

…But for class fields it’s not so. As said, the parent constructor always uses the parent field.

Why is there a difference?

Well, the reason is the field initialization order. The class field is initialized:

    Before constructor for the base class (that doesn’t extend anything),
    Immediately after super() for the derived class.

In our case, Rabbit is the derived class. There’s no constructor() in it. As said previously, that’s the same as if there was an empty constructor with only super(...args).

So, new Rabbit() calls super(), thus executing the parent constructor, and (per the rule for derived classes) only after that its class fields are initialized. At the time of the parent constructor execution, there are no Rabbit class fields yet, that’s why Animal fields are used.

This subtle difference between fields and methods is specific to JavaScript.

Luckily, this behavior only reveals itself if an overridden field is used in the parent constructor. Then it may be difficult to understand what’s going on, so we’re explaining it here.

If it becomes a problem, one can fix it by using methods or getters/setters instead of fields. */

// Static properties and methods

{
  class User {
    static staticMethod() {
      alert(this === User);
    }
  }

  // User.staticMethod(); // true
}
//     Same things
{
  class User { }

  User.staticMethod = function () {
    alert(this === User);
  };

  // User.staticMethod(); // true
}

{
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }

  // usage
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];

  articles.sort(Article.compare);

  // alert(articles[0].title); // CSS
}

{
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date());
    }
  }

  let article = Article.createTodays();

  // alert(article.title); // Today's digest
}

// article.createTodays(); /// Error: article.createTodays is not a function

{
  class Animal {
    static planet = "Earth";

    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }

    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }

  }

  // Inherit from Animal
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }

  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];

  rabbits.sort(Rabbit.compare);

  //  rabbits[0].run(); // Black Rabbit runs with speed 5.

  // alert(Rabbit.planet); // Earth
}

{
  class Animal { }
  class Rabbit extends Animal { }

  // for statics
  // alert(Rabbit.__proto__ === Animal); // true

  // for regular methods
  // alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
}

/*
class Rabbit extends Object {
  constructor(name) {
    super(); // need to call the parent constructor when inheriting
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // true */



// Private and protected properties and methods

{
  class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }

    get waterAmount() {
      return this._waterAmount;
    }

    constructor(power) {
      this._power = power;
    }

  }

  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);

  // add water
  // coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
}







{
  class CoffeeMachine {
    // ...

    constructor(power) {
      this._power = power;
    }

    get power() {
      return this._power;
    }

  }

  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);

  // alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

  // coffeeMachine.power = 25; // Error (no setter)
}

// Alternative

{
  class CoffeeMachine {
    _waterAmount = 0;

    setWaterAmount(value) {
      if (value < 0) value = 0;
      this._waterAmount = value;
    }

    getWaterAmount() {
      return this._waterAmount;
    }
  }

  // new CoffeeMachine().setWaterAmount(100);
}






{
  class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }

  }

  let coffeeMachine = new CoffeeMachine();

  // can't access privates from outside of the class
  // coffeeMachine.#fixWaterAmount(123); // Error
  // coffeeMachine.#waterLimit = 1000; // Error
}



{
  class CoffeeMachine {

    #waterAmount = 0;

    get waterAmount() {
      return this.#waterAmount;
    }

    set waterAmount(value) {
      if (value < 0) value = 0;
      this.#waterAmount = value;
    }
  }

  let machine = new CoffeeMachine();

  // machine.waterAmount = 100;
  // alert(machine.#waterAmount); // Error

  class MegaCoffeeMachine extends CoffeeMachine {
    method() {
      // alert(this.#waterAmount); // Error: can only access from CoffeeMachine
    }
  }
}



/*
    class User {
  ...
        sayHi() {
            let fieldName = "name";
            alert(`Hello, ${this[fieldName]}`);
        }
    }
*/



// Extending built-in classes

{
  // add one more method to it (can do more)
  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }

  let arr = new PowerArray(1, 2, 5, 10, 50);
  // alert(arr.isEmpty()); // false

  let filteredArr = arr.filter(item => item >= 10);
  // alert(filteredArr); // 10, 50
  // alert(filteredArr.isEmpty()); // false
}

{
  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }

    // built-in methods will use this as the constructor
    static get [Symbol.species]() {
      return Array;
    }
  }

  let arr = new PowerArray(1, 2, 5, 10, 50);
  // alert(arr.isEmpty()); / / false

  // filter creates new array using arr.constructor[Symbol.species] as constructor
  let filteredArr = arr.filter(item => item >= 10);

  // filteredArr is not PowerArray, but Array
  // alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
}

// Other collections, such as Map and Set, work alike. They also use Symbol.species.



/*
For example, both Array and Date inherit from Object, so their instances have methods from Object.prototype.
 But Array.[[Prototype]] does not reference Object,
  so there’s no, for instance, Array.keys() (or Date.keys()) static method.
*/



// Class checking: "instanceof"

{
  class Rabbit { }
  let rabbit = new Rabbit();

  // is it an object of Rabbit class?
  // alert( rabbit instanceof Rabbit ); // true
}
// Works too
{
  // instead of class
  /* function Rabbit() {}
  
  alert( new Rabbit() instanceof Rabbit ); // true */
}

{
  let arr = [1, 2, 3];
  // alert(arr instanceof Array); // true
  // alert(arr instanceof Object); // true
}



{
  // setup instanceOf check that assumes that
  // anything with canEat property is an animal
  class Animal {
    static [Symbol.hasInstance](obj) {
      if (obj.canEat) return true;
    }
  }

  let obj = { canEat: true };

  // alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called

}

{
  class Animal { }
  class Rabbit extends Animal { }

  let rabbit = new Rabbit();
  // alert(rabbit instanceof Animal); // true

  // rabbit.__proto__ === Animal.prototype (no match)
  // rabbit.__proto__.__proto__ === Animal.prototype (match!)
}



{
  function Foo() { }
  function Bar() { }

  Bar.prototype = Object.create(Foo.prototype);

  const bar = new Bar();

  console.log(Foo.prototype.isPrototypeOf(bar));
  // Expected output: true
  console.log(Bar.prototype.isPrototypeOf(bar));
  // Expected output: true

}



{
  function Rabbit() { }
  let rabbit = new Rabbit();

  // changed the prototype
  Rabbit.prototype = {};

  // ...not a rabbit any more!
  // alert(rabbit instanceof Rabbit); // false
}



{
  // copy toString method into a variable for convenience
  let objectToString = Object.prototype.toString;

  // what type is this?
  let arr = [];

  // alert(objectToString.call(arr)); // [object Array]
}


// Symbol.toStringTag

{
  let user = {
    [Symbol.toStringTag]: "User"
  };

  // alert( {}.toString.call(user) ); // [object User]
}

{
  // toStringTag for the environment-specific object and class:
  // alert(window[Symbol.toStringTag]); // Window
  // alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

  // alert({}.toString.call(window)); // [object Window]
  // alert({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]
}

{
  function A() { }
  function B() { }

  A.prototype = B.prototype = {};

  let a = new A();

  // alert(a instanceof B); // true
}

/*
Yeah, looks strange indeed.

But instanceof does not care about the function, but rather about its prototype, that it matches against the prototype chain.

And here a.__proto__ == B.prototype, so instanceof returns true.

So, by the logic of instanceof, the prototype actually defines the type, not the constructor function.
*/



// Mixins

{
  // mixin
  let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };

  // usage:
  class User {
    constructor(name) {
      this.name = name;
    }
  }

  // copy the methods
  Object.assign(User.prototype, sayHiMixin);

  // now User can say hi
  // new User("Dude").sayHi(); // Hello Dude!
}

{
  let sayMixin = {
    say(phrase) {
      alert(phrase);
    }
  };

  let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)

    sayHi() {
      // call parent method
      super.say(`Hello ${this.name}`); // (*)
    },
    sayBye() {
      super.say(`Bye ${this.name}`); // (*)
    }
  };

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  // copy the methods
  Object.assign(User.prototype, sayHiMixin);

  // now User can say hi
  // new User("Dude").sayHi(); // Hello Dude!
}



{
  let eventMixin = {
    /**
     * Subscribe to event, usage:
     *  menu.on('select', function(item) { ... }
    */
    on(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },

    /**
     * Cancel the subscription, usage:
     *  menu.off('select', handler)
     */
    off(eventName, handler) {
      let handlers = this._eventHandlers?.[eventName];
      if (!handlers) return;
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i--, 1);
        }
      }
    },

    /**
     * Generate an event with the given name and data
     *  this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
      if (!this._eventHandlers?.[eventName]) {
        return; // no handlers for that event name
      }

      // call the handlers
      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
  };



  // Make a class
  class Menu {
    choose(value) {
      this.trigger("select", value);
    }
  }
  // Add the mixin with event-related methods
  Object.assign(Menu.prototype, eventMixin);

  let menu = new Menu();

  // add a handler, to be called on selection:
  menu.on("select", value => alert(`Value selected: ${value}`));

  // triggers the event => the handler above runs and shows:
  // Value selected: 123
  // menu.choose("123");
}



// Try... catch Error handling


try {
  // insert code that needs to be tested
} catch (err) {
  console.log(err)
}



try {
  setTimeout(function () {
    // noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert("won't work");
}



setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    // alert("error is caught here!");
  }
}, 1000);



try {
  lalala; // error, variable is not defined!
} catch (err) {
  // alert(err.name); // ReferenceError
  // alert(err.message); // lalala is not defined
  // alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  // alert(err); // ReferenceError: lalala is not defined
}



/*
If we don’t need error details, catch may omit it:

try {
  // ...
} catch { // <-- without (err)
  // ...
} */



// Detecting errors

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert(user.name); // doesn't work

} catch (err) {
  // ...the execution jumps here
  // alert("Our apologies, the data has errors, we'll try to request it one more time.");
  // alert(err.name);
  // alert(err.message);
}



// let error = new Error(message);
// or
// let error2 = new SyntaxError(message);
// let error3 = new ReferenceError(message);
// ...



{
  let error = new Error("Things happen o_O");

  // alert(error.name); // Error
  // alert(error.message); // Things happen o_O
}



{
  try {
    JSON.parse("{ bad json o_O }");
  } catch (err) {
    // alert(err.name); // SyntaxError
    // alert(err.message); // Unexpected token b in JSON at position 2
  }
}



{
  let json = '{ "age": 30 }'; // incomplete data

  try {

    let user = JSON.parse(json); // <-- no errors

    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name"); // (*)
    }

    alert(user.name);

  } catch (err) {
    // alert("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
  }
}



// Rethrowing
{
  let json = '{ "age": 30 }'; // incomplete data

  try {
    user = JSON.parse(json); // <-- forgot to put "let" before user

    // ...
  } catch (err) {
    alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
    // (no JSON Error actually)
  }
}

{
  try {
    user = { /*...*/ };
  } catch (err) {
    if (err instanceof ReferenceError) {
      alert('ReferenceError'); // "ReferenceError" for accessing an undefined variable
    }
  }
}


/*
{
    let json = '{ "age": 30 }'; // incomplete data
    try {

        let user = JSON.parse(json);

        if (!user.name) {
            // throw new SyntaxError("Incomplete data: no name");
        }

        blabla(); // unexpected error

        alert(user.name);

    } catch (err) {

        if (err instanceof SyntaxError) {
            alert("JSON Error: " + err.message);
        } else {
            throw err; // rethrow (*)
        }

    }
}
*/

/*
function readData() {
    let json = '{ "age": 30 }';

    try {
        // ...
        blabla(); // error!
    } catch (err) {
        // ...
        if (!(err instanceof SyntaxError)) {
            throw err; // rethrow (don't know how to deal with it)
        }
    }
}

try {
    readData();
} catch (err) {
    alert("External catch got: " + err); // caught it!
}
*/


// Try.. catch...finally

/* try {
    alert('try');
    if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
    alert('catch');
} finally {
    alert('finally');
} */



{
  // let num = +prompt("Enter a positive integer number?", 35)

  let diff, result;

  function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
      throw new Error("Must not be negative, and also an integer.");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  let start = Date.now();

  try {
    result = fib(num);
  } catch (err) {
    result = 0;
  } finally {
    diff = Date.now() - start;
  }

  // alert(result || "error occurred");

  // alert(`execution took ${diff}ms`);
}

function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}



/*
Global error

<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script>
*/

/*
try {
  // run this code
} catch (err) {
  // if an error happened, then jump here
  // err is the error object
} finally {
  // do in any case after try/catch
}

There may be no catch section or no finally, so shorter constructs try...catch and try...finally are also valid. */


function f() {
  try {
    alert('start');
    throw new Error("an error");
  } catch (err) {
    // ...
    if ("can't handle the error") {
      throw err;
    }

  } finally {
    // alert('cleanup!')
  }
}

f(); // cleanup!

function f2() {
  try {
    // alert('start');
    return "result";
  } catch (err) {
    /// ...
  } finally {
    // alert('cleanup!');
  }
}

f2(); // cleanup!



// adding custom errors

/*
{
    class ValidationError extends Error {
        constructor(message) {
            super(message); // (1)
            this.name = "ValidationError"; // (2)
        }
    }

    function test() {
        throw new ValidationError("Whoops!");
    }



    try {
        test();
    } catch (err) {
        // alert(err.message); // Whoops!
        // alert(err.name); // ValidationError
        // alert(err.stack); // a list of nested calls with line numbers for each
    }

    try {
        let user = readUser('{ "age": 25 }');
    } catch (err) {
        if (err instanceof ValidationError) {
            alert("Invalid data: " + err.message); // Invalid data: No field: name
        } else if (err instanceof SyntaxError) { // (*)
            alert("JSON Syntax Error: " + err.message);
        } else {
            throw err; // unknown error, rethrow it (**)
        }
    }
}


// ...
// instead of (err instanceof SyntaxError)
// } else if (err.name == "SyntaxError") { // (*)
// ... */



// Further inheritence

/*
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super("No property: " + property);
            this.name = "PropertyRequiredError";
            this.property = property;
        }
    }

    // Usage
    function readUser(json) {
        let user = JSON.parse(json);

        if (!user.age) {
            throw new PropertyRequiredError("age");
        }
        if (!user.name) {
            throw new PropertyRequiredError("name");
        }

        return user;
    }

    // Working example with try..catch

    try {
        let user = readUser('{ "age": 25 }');
    } catch (err) {
        if (err instanceof ValidationError) {
            alert("Invalid data: " + err.message); // Invalid data: No property: name
            alert(err.name); // PropertyRequiredError
            alert(err.property); // name
        } else if (err instanceof SyntaxError) {
            alert("JSON Syntax Error: " + err.message);
        } else {
            throw err; // unknown error, rethrow it
        }
    }



    class MyError extends Error {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
        }
    }

    class ValidationError extends MyError { }

    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super("No property: " + property);
            this.property = property;
        }
    }

    // name is correct
    alert(new PropertyRequiredError("field").name); // PropertyRequiredError
    */

// Wrapping exceptions

/*
try {
    // ...
    readUser()  // the potential error source
    // ...
} catch (err) {
    if (err instanceof ValidationError) {
        // handle validation errors
    } else if (err instanceof SyntaxError) {
        // handle syntax errors
    } else {
        throw err; // unknown error, rethrow it
    }
} */


/*
class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*//* }
class PropertyRequiredError extends ValidationError { /* ... *//* }

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            // throw new ReadError("Syntax Error", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        } else {
            throw err;
        }
    }

}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        alert(e);
        // Original error: SyntaxError: Unexpected token b in JSON at position 1
        // alert("Original error: " + e.cause);
    } else {
        throw e;
    }
}



class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("formatting error");

alert(err.message); // formatting error
alert(err.name); // FormatError
alert(err.stack); // stack

alert(err instanceof SyntaxError); // true
*/



// DOM

function sayHi3() {
  alert("Hello");
}

// global functions are methods of the global object:
// window.sayHi2();

function sayHi4() {
  alert("Hello");
}

// global functions are methods of the global object:
// window.sayHi4();

// BOM Browser object model

// alert(location.href); // shows current URL
/* if (confirm("Go to Wikipedia?")) {
    location.href = "https://wikipedia.org"; // redirect the browser to another URL
} */

// document.body.style.background = 'black'; // make the background red

// setTimeout(() => document.body.style.background = '', 3000); // return back

/*

<html> = document.documentElement
    The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.
<body> = document.body
    Another widely used DOM node is the <body> element – document.body.
<head> = document.head
    The <head> tag is available as document.head. */

// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

// elem.hasChildNodes()

// alert(Array.from(document.body.childNodes).filter); // function



// Use elem.firstChild or elem.lastChild to get access to the elements



// parent of <body> is <html>
// alert( document.body.parentNode === document.documentElement ); // true

// after <head> goes <body>
// alert( document.head.nextSibling ); // HTMLBodyElement

// before <body> goes <head>
// alert( document.body.previousSibling ); // HTMLHeadElement



/*
    children – only those children that are element nodes.
    firstElementChild, lastElementChild – first and last element children.
    previousElementSibling, nextElementSibling – neighbor elements.
    parentElement – parent element.
*/

/* while (elem = elem.parentElement) { // go up till <html>
    alert(elem);
} */


for (let elem of document.body.children) {
  // console.log(elem); // DIV, UL, DIV, SCRIPT
}



/*
The <table> element supports (in addition to the given above) these properties:

    table.rows – the collection of <tr> elements of the table.
    table.caption/tHead/tFoot – references to elements <caption>, <thead>, <tfoot>.
    table.tBodies – the collection of <tbody> elements (can be many according to the standard, but there will always be at least one – even if it is not in the source HTML, the browser will put it in the DOM).

<thead>, <tfoot>, <tbody> elements provide the rows property:

    tbody.rows – the collection of <tr> inside.

<tr>:

    tr.cells – the collection of <td> and <th> cells inside the given <tr>.
    tr.sectionRowIndex – the position (index) of the given <tr> inside the enclosing <thead>/<tbody>/<tfoot>.
    tr.rowIndex – the number of the <tr> in the table as a whole (including all table rows).

<td> and <th>:

    td.cellIndex – the number of the cell inside the enclosing <tr>.

An example of usage:

<table id="table">
  <tr>
    <td>one</td><td>two</td>
  </tr>
  <tr>
    <td>three</td><td>four</td>
  </tr>
</table>

<script>
  // get td with "two" (first row, second column)
  let td = table.rows[0].cells[1];
  td.style.backgroundColor = "red"; // highlight it
</script>

The specification: tabular data.

There are also additional navigation properties for HTML forms. We’ll look at them later when we start working with forms. */



// If an element has the id attribute,
// we can get the element using the method document.getElementById(id), no matter where it is.



/*
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // get the element
  let elem = document.getElementById('elem');

  // make its background red
  elem.style.background = 'red';
</script>

Also, there’s a global variable named by id that references the element:

<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // elem is a reference to DOM-element with id="elem"
  elem.style.background = 'red';

  // id="elem-content" has a hyphen inside, so it can't be a variable name
  // ...but we can access it using square brackets: window['elem-content']
</script> */



/*
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script> */



/*
Pseudo-classes in the CSS selector like :hover and :active are also supported. For instance,
 document.querySelectorAll(':hover') will return the collection with elements that the pointer
  is over now (in nesting order: from the outermost <html> to the most nested one). */



/*
The call to elem.querySelector(css) returns the first element for the given CSS selector.

In other words, the result is the same as elem.querySelectorAll(css)[0],
 but the latter is looking for all elements and picking one,
 while elem.querySelector just looks for one. So it’s faster and also shorter to write. */



/*
The elem.matches(css) does not look for anything, it merely checks if
 elem matches the given CSS-selector. It returns true or false.

The method comes in handy when we are iterating over elements
 (like in an array or something) and trying to filter out those that interest us.

For instance:

<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script> */



/*
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script> */



/*
// get all divs in the document
let divs = document.getElementsByTagName('div');
*/



/*
<table id="table">
  <tr>
    <td>Your age:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked> less than 18
      </label>
      <label>
        <input type="radio" name="age" value="mature"> from 18 to 50
      </label>
      <label>
        <input type="radio" name="age" value="senior"> more than 60
      </label>
    </td>
  </tr>
</table>

<script>
  let inputs = table.getElementsByTagName('input');

  for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
  }
</script> */



/*
Another widespread novice mistake is to write:

// doesn't work
document.getElementsByTagName('input').value = 5;

That won’t work, because it takes a collection of inputs and assigns the value to it rather than to elements inside it.

We should either iterate over the collection or get an element by its index, and then assign, like this:

// should work (if there's an input)
document.getElementsByTagName('input')[0].value = 5; */



/*
<form name="my-form">
  <div class="article">Article</div>
  <div class="long article">Long article</div>
</form>

<script>
  // find by name attribute
  let form = document.getElementsByName('my-form')[0];

  // find by class inside the form
  let articles = form.getElementsByClassName('article');
  alert(articles.length); // 2, found two elements with class "article"
</script> */



/*
All methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.

In the example below, there are two scripts.

    The first one creates a reference to the collection of <div>. As of now, its length is 1.
    The second scripts runs after the browser meets one more <div>, so its length is 2.

<div>First div</div>

<script>
  let divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script>

In contrast, querySelectorAll returns a static collection. It’s like a fixed array of elements.

If we use it instead, then both scripts output 1:

<div>First div</div>

<script>
  let divs = document.querySelectorAll('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 1
</script>

Now we can easily see the difference. The static collection did not increase after the appearance of a new div in the document. */



/*
// 1. The table with `id="age-table"`.
let table = document.getElementById('age-table')

// 2. All label elements inside that table
table.getElementsByTagName('label')
// or
document.querySelectorAll('#age-table label')

// 3. The first td in that table (with the word "Age")
table.rows[0].cells[0]
// or
table.getElementsByTagName('td')[0]
// or
table.querySelector('td')

// 4. The form with the name "search"
// assuming there's only one element with name="search" in the document
let form = document.getElementsByName('search')[0]
// or, form specifically
document.querySelector('form[name="search"]')

// 5. The first input in that form.
form.getElementsByTagName('input')[0]
// or
form.querySelector('input')

// 6. The last input in that form
let inputs = form.querySelectorAll('input') // find all inputs
inputs[inputs.length-1] // take the last one */


/*
let goto = prompt("Search or put in a url", "")
if (goto == null) {
    console.log("search cancelled")
}
else {
    location.href = `https://www.google.com/search?q=${goto}&oq=${goto}&aqs=chrome..69i57j0i512l3j46i10i512j69i61l3.3229j1j7&sourceid=chrome&ie=UTF-8`
}

*/

let divs = document.querySelectorAll('div')
// console.log(divs)
let gameContainer = document.querySelector('.container-game')
// console.log(gameContainer)

// There's also .getElementById()



// alert( document.body.constructor.name ); // HTMLBodyElement
// alert( document.body ); // [object HTMLBodyElement]
/*
alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true
*/



// console.dir shows more things about DOM then console.log
// console.dir(document.body)



/*
// Define HTMLInputElement
// The colon ":" means that HTMLInputElement inherits from HTMLElement
interface HTMLInputElement: HTMLElement {
  // here go properties and methods of <input> elements

  // "DOMString" means that the value of a property is a string
  attribute DOMString accept;
  attribute DOMString alt;
  attribute DOMString autocomplete;
  attribute DOMString value;

  // boolean value property (true/false)
  attribute boolean autofocus;
  ...
  // now the method: "void" means that the method returns no value
  void select();
  ...
} */



let elem = document.body;

// let's examine: what type of node is in elem?
// alert(elem.nodeType); // 1 => element

// and its first child is...
// alert(elem.firstChild.nodeType); // 3 => text

// for the document object, the type is 9
// alert(document.nodeType); // 9



// alert( document.body.nodeName ); // BODY
// alert( document.body.tagName ); // BODY



/*
<body><!-- comment -->

  <script>
    // for comment
    alert( document.body.firstChild.tagName ); // undefined (not an element)
    alert( document.body.firstChild.nodeName ); // #comment

    // for document
    alert( document.tagName ); // undefined (not an element)
    alert( document.nodeName ); // #document
  </script>
</body> */



// alert(document.body.innerHTML); // read the current contents
// document.body.innerHTML = 'The new BODY!'; // replace it

// document.body.innerHTML = '<b>test'; // forgot to close the tag
// alert(document.body.innerHTML); // <b>test</b> (fixed)



/*
Scripts don’t execute

If innerHTML inserts a <script> tag into the document – it becomes a part of HTML, but doesn’t execute.
*/

// use elem.innerHTML = elem.innerHTML + "..." instead of += because it doesn't work in DOM



/*
Beware: unlike innerHTML, writing to outerHTML does not change the element. Instead, it replaces it in the DOM.

We can write to elem.outerHTML, but should keep in mind that it doesn’t change the element we’re writing to (‘elem’).
It puts the new HTML in its place instead. We can get references to the new elements by querying the DOM. */



/*
<body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body>
*/



/*
For text nodes we can imagine a reason to read or modify them, but why comments?

Sometimes developers embed information or template instructions into HTML in them, like this:

<!-- if isAdmin -->
  <div>Welcome, Admin!</div>
<!-- /if -->

…Then JavaScript can read it from data property and process embedded instructions.
*/



/*
The textContent provides access to the text inside the element: only text, minus all <tags>.

For instance:

<div id="news">
  <h1>Headline!</h1>
  <p>Martians attack people!</p>
</div>

<script>
  // Headline! Martians attack people!
  alert(news.textContent);
</script>

As we can see, only text is returned, as if all <tags> were cut out, but the text in them remained.

In practice, reading such text is rarely needed.

Writing to textContent is much more useful, because it allows to write text the “safe way”.

Let’s say we have an arbitrary string, for instance entered by a user, and want to show it.

    With innerHTML we’ll have it inserted “as HTML”, with all HTML tags.
    With textContent we’ll have it inserted “as text”, all symbols are treated literally.

Compare the two:

<div id="elem1"></div>
<div id="elem2"></div>

<script>
  let name = prompt("What's your name?", "<b>Winnie-the-Pooh!</b>");

  elem1.innerHTML = name;
  elem2.textContent = name;
</script>

    The first <div> gets the name “as HTML”: all tags become tags, so we see the bold name.
    The second <div> gets the name “as text”, so we literally see <b>Winnie-the-Pooh!</b>.

In most cases, we expect the text from a user, and want to treat it as text.
 We don’t want unexpected HTML in our site. An assignment to textContent does exactly that.
*/



/*
<div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true;
</script>
*/


/*
<div id="elem">A blinking element</div>

<script>
  setInterval(() => elem.hidden = !elem.hidden, 1000);
</script>
*/



/*
<input type="text" id="elem" value="value">

<script>
  alert(elem.type); // "text"
  alert(elem.id); // "elem"
  alert(elem.value); // value
</script>
*/



// Attributes and properties
// DOM Properties



document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

// alert(document.body.myData.title); // Imperator

// We can add a method as well:

document.body.sayTagName = function () {
  alert(this.tagName);
};

// document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)

Element.prototype.sayHi = function () {
  alert(`Hello, I'm ${this.tagName}`);
};

// document.documentElement.sayHi(); // Hello, I'm HTML
// document.body.sayHi(); // Hello, I'm BODY



/*
<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // non-standard attribute does not yield a property
    alert(document.body.something); // undefined
  </script>
</body>

Please note that a standard attribute for one element can be unknown for another one. For instance, "type" is standard for <input> (HTMLInputElement), but not for <body> (HTMLBodyElement). Standard attributes are described in the specification for the corresponding element class.

Here we can see it:

<body id="body" type="...">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined: DOM property not created, because it's non-standard
  </script>
</body>
*/



/*
So, if an attribute is non-standard, there won’t be a DOM-property for it. Is there a way to access such attributes?

Sure. All attributes are accessible by using the following methods:

    elem.hasAttribute(name) – checks for existence.
    elem.getAttribute(name) – gets the value.
    elem.setAttribute(name, value) – sets the value.
    elem.removeAttribute(name) – removes the attribute.

These methods operate exactly with what’s written in HTML.

Also one can read all attributes using elem.attributes: a collection of objects that belong to a built-in Attr class, with name and value properties.

Here’s a demo of reading a non-standard property:

<body something="non-standard">
  <script>
    alert(document.body.getAttribute('something')); // non-standard
  </script>
</body>

HTML attributes have the following features:

    Their name is case-insensitive (id is same as ID).
    Their values are always strings.

Here’s an extended demo of working with attributes:

<body>
  <div id="elem" about="Elephant"></div>

  <script>
    alert( elem.getAttribute('About') ); // (1) 'Elephant', reading

    elem.setAttribute('Test', 123); // (2), writing

    alert( elem.outerHTML ); // (3), see if the attribute is in HTML (yes)

    for (let attr of elem.attributes) { // (4) list all
      alert( `${attr.name} = ${attr.value}` );
    }
  </script>
</body>

Please note:

    getAttribute('About') – the first letter is uppercase here, and in HTML it’s all lowercase. But that doesn’t matter:
     attribute names are case-insensitive.
    We can assign anything to an attribute, but it becomes a string. So here we have "123" as the value.
    All attributes including ones that we set are visible in outerHTML.
    The attributes collection is iterable and has all the attributes of the element (standard and non-standard)
     as objects with name and value properties.
*/



/*
<input>

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('id', 'id');
  alert(input.id); // id (updated)

  // property => attribute
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId (updated)
</script>
*/



/*
<input>

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('value', 'text');
  alert(input.value); // text

  // NOT property => attribute
  input.value = 'newValue';
  alert(input.getAttribute('value')); // text (not updated!)
</script>
*/



/*
<input id="input" type="checkbox" checked> checkbox

<script>
  alert(input.getAttribute('checked')); // the attribute value is: empty string
  alert(input.checked); // the property value is: true
</script>
*/



/*
<a id="a" href="#hello">link</a>
<script>
  // attribute
  alert(a.getAttribute('href')); // #hello

  // property
  alert(a.href ); // full URL in the form http://site.com/page#hello
</script>
*/


/*
When writing HTML, we use a lot of standard attributes. But what about non-standard, custom ones? First, let’s see whether they are useful or not? What for?

Sometimes non-standard attributes are used to pass custom data from HTML to JavaScript, or to “mark” HTML-elements for JavaScript.

Like this:

<!-- mark the div to show "name" here -->
<div show-info="name"></div>
<!-- and age here -->
<div show-info="age"></div>

<script>
  // the code finds an element with the mark and shows what's requested
  let user = {
    name: "Pete",
    age: 25
  };

  for(let div of document.querySelectorAll('[show-info]')) {
    // insert the corresponding info into the field
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]; // first Pete into "name", then 25 into "age"
  }
</script>

Also they can be used to style an element.

For instance, here for the order state the attribute order-state is used:

<style>
  /* styles rely on the custom attribute "order-state" *//*
.order[order-state="new"] {
color: green;
}

.order[order-state="pending"] {
color: blue;
}

.order[order-state="canceled"] {
color: red;
}
</style>

<div class="order" order-state="new">
A new order.
</div>

<div class="order" order-state="pending">
A pending order.
</div>

<div class="order" order-state="canceled">
A canceled order.
</div>

Why would using an attribute be preferable to having classes like .order-state-new, .order-state-pending, .order-state-canceled?

Because an attribute is more convenient to manage. The state can be changed as easy as:

// a bit simpler than removing old/adding a new class
div.setAttribute('order-state', 'canceled');

But there may be a possible problem with custom attributes. What if we use a non-standard attribute for our purposes and later the standard introduces it and makes it do something? The HTML language is alive, it grows, and more attributes appear to suit the needs of developers. There may be unexpected effects in such case.

To avoid conflicts, there exist data-* attributes.

All attributes starting with “data-” are reserved for programmers’ use. They are available in the dataset property.

For instance, if an elem has an attribute named "data-about", it’s available as elem.dataset.about.

Like this:

<body data-about="Elephants">
<script>
alert(document.body.dataset.about); // Elephants
</script>

Multiword attributes like data-order-state become camel-cased: dataset.orderState.

Here’s a rewritten “order state” example:

<style>
.order[data-order-state="new"] {
color: green;
}

.order[data-order-state="pending"] {
color: blue;
}

.order[data-order-state="canceled"] {
color: red;
}
</style>

<div id="order" class="order" data-order-state="new">
A new order.
</div>

<script>
// read
alert(order.dataset.orderState); // new

// modify
order.dataset.orderState = "pending"; // (*)
</script>

Using data-* attributes is a valid, safe way to pass custom data.

Please note that we can not only read, but also modify data-attributes.
Then CSS updates the view accordingly: in the example above the last line (*) changes the color to blue.
*/



/*
// a bit simpler than removing old/adding a new class
div.setAttribute('order-state', 'canceled');
*/



/*

    elem.hasAttribute(name) – to check for existence.
    elem.getAttribute(name) – to get the value.
    elem.setAttribute(name, value) – to set the value.
    elem.removeAttribute(name) – to remove the attribute.
    elem.attributes is a collection of all attributes.
*/

/*
let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // no attribute

  if (!href.includes('://')) continue; // no protocol

  if (href.startsWith('http://internal.com')) continue; // internal

  link.style.color = 'orange';
}
*/



/*
function search() {
    let searchRequest = prompt("Search or enter a URL", "")
    if (searchRequest.includes("http")) {
        location.href = searchRequest
    } else {
        location.href = `https://www.google.com/search?q=${searchRequest}&oq=${searchRequest}&aqs=chrome.0.35i39j46i67j0i67l3j0i10i67j69i60j69i65.71185j0j7&sourceid=chrome&ie=UTF-8`
    }
}
search()
*/

// Modifying Documentsimage.png


/*
let div2 = document.createElement('div');

let textNode2 = document.createTextNode('Here I am');

// Fancy alert

let div = document.createElement('div');

div.className = "alert";

div.innerHTML = `<strong>Hi there!</strong> This place is still incomplete come back later.`;

// Adding them to the page

document.body.querySelector('.container-game').append(div);
*/



/*

    node.append(...nodes or strings) – append nodes or strings at the end of node,
    node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
    node.before(...nodes or strings) –- insert nodes or strings before node,
    node.after(...nodes or strings) –- insert nodes or strings after node,
    node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
*/



/*
For that we can use another, pretty versatile method: elem.insertAdjacentHTML(where, html).

The first parameter is a code word, specifying where to insert relative to elem. Must be one of the following:

    "beforebegin" – insert html immediately before elem,
    "afterbegin" – insert html into elem, at the beginning,
    "beforeend" – insert html into elem, at the end,
    "afterend" – insert html immediately after elem.

The second parameter is an HTML string, that is inserted “as HTML”.

For instance:

<div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
  div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>

…Would lead to:

<p>Hello</p>
<div id="div"></div>
<p>Bye</p>

That’s how we can append arbitrary HTML to the page.
*/

// node.remove

// cloning nodes

/*
The call elem.cloneNode(true) creates a “deep” clone of the element – with all attributes and subelements.
 If we call elem.cloneNode(false), then the clone is made without child elements. */



/*
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<div class="alert" id="div">
  <strong>Hi there!</strong> You've read an important message.
</div>

<script>
  let div2 = div.cloneNode(true); // clone the message
  div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone

  div.after(div2); // show the clone after the existing div
</script>
*/



// DocumentFragment

/*
<ul id="ul"></ul>

<script>
function getListContent() {
  let result = [];

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  }

  return result;
}

ul.append(...getListContent()); // append + "..." operator = friends!
</script>
*/



/*


    Methods to create new nodes:
        document.createElement(tag) – creates an element with the given tag,
        document.createTextNode(value) – creates a text node (rarely used),
        elem.cloneNode(deep) – clones the element, if deep==true then with all descendants.

    Insertion and removal:
        node.append(...nodes or strings) – insert into node, at the end,
        node.prepend(...nodes or strings) – insert into node, at the beginning,
        node.before(...nodes or strings) –- insert right before node,
        node.after(...nodes or strings) –- insert right after node,
        node.replaceWith(...nodes or strings) –- replace node.
        node.remove() –- remove the node.

    Text strings are inserted “as text”.

    There are also “old school” methods:
        parent.appendChild(node)
        parent.insertBefore(node, nextSibling)
        parent.removeChild(node)
        parent.replaceChild(newElem, node)

    All these methods return node.

    Given some HTML in html, elem.insertAdjacentHTML(where, html) inserts it depending on the value of where:
        "beforebegin" – insert html right before elem,
        "afterbegin" – insert html into elem, at the beginning,
        "beforeend" – insert html into elem, at the end,
        "afterend" – insert html right after elem.

    Also there are similar methods, elem.insertAdjacentText and elem.insertAdjacentElement, that insert text strings and elements, but they are rarely used.

    To append HTML to the page before it has finished loading:
        document.write(html)

    After the page is loaded such a call erases the document. Mostly seen in old scripts.
*/



/*
function clear(elem) {
  elem.innerHTML = '';
}
*/



/*
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Enter the text for the list item", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}
*/



/*
    let data = {
      "Fish": {
        "trout": {},
        "salmon": {}
      },

      "Tree": {
        "Huge": {
          "sequoia": {},
          "oak": {}
        },
        "Flowering": {
          "apple tree": {},
          "magnolia": {}
        }
      }
    };

    function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }

    function createTreeText(obj) { // standalone recursive function
      let li = '';
      let ul;
      for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
      }
      if (li) {
        ul = '<ul>' + li + '</ul>'
      }
      return ul || '';
    }

    createTree(container, data);
    */



/*
  let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  // if there's no children, then the call returns undefined
  // and the <ul> won't be created
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

let container = document.getElementById('container');
createTree(container, data);
*/



/*
<!DOCTYPE HTML>
<html>
<head>
  <style>
    .hour {
      color: red
    }

    .min {
      color: green
    }

    .sec {
      color: blue
    }
  </style>
</head>

<body>

  <div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
  </div>

  <script>
    let timerId;

    function update() {
      let clock = document.getElementById('clock');
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
      // set a new interval only if the clock is stopped
      // otherwise we would rewrite the timerID reference to the running interval and wouldn't be able to stop the clock ever again
      if (!timerId) {
        timerId = setInterval(update, 1000);
      }
      update(); // <--  start right now, don't wait 1 second till the first setInterval works
    }

    function clockStop() {
      clearInterval(timerId);
      timerId = null; // <-- clear timerID to indicate that the clock has been stopped, so that it is possible to start it again in clockStart()
    }

  </script>

  <!-- click on this button calls clockStart() -->
  <input type="button" onclick="clockStart()" value="Start">

  <!-- click on this button calls clockStop() -->
  <input type="button" onclick="clockStop()" value="Stop">

</body>
</html>
*/



/*
// expand the element to the full content height
element.style.height = `${element.scrollHeight}px`;
*/



/*
True height
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

alert('Full document height, with scrolled out part: ' + scrollHeight);
*/



/*
let elem = document.getElementById("coords-show-mark");

function createMessageUnder(elem, html) {
  // create message element
  let message = document.createElement('div');
  // better to use a css class for the style here
  message.style.cssText = "position:fixed; color: red";

  // assign coordinates, don't forget "px"!
  let coords = elem.getBoundingClientRect();

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}

// Usage:
// add it for 5 seconds in the document
let message = createMessageUnder(elem, 'Hello, world!');
document.body.append(message);
setTimeout(() => message.remove(), 5000);
*/

// Recap

// Adjacent html

// game.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
// game.insertAdjacentHTML('afterend', '<p>Bye</p>');

let domArr = ["Dogs", "are", "cool"]

function getListContent() {
  let fragment = new DocumentFragment();

  for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.append(domArr[i]);
    fragment.append(li);
  }

  return fragment;
}

// uljs.append(getListContent()); // (*)

// alert(document.body.className);
// document.body.classList.add('article');
// alert(document.body.className);

/*

    elem.classList.add/remove("class") – adds/removes the class.
    elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
    elem.classList.contains("class") – checks for the given class, returns true/false.
*/

/*

    for (let name of document.body.classList) {
      alert(name); // main, and then page
    }
*/

/*
document.body.style.display = "none"; // hide

setTimeout(() => document.body.style.display = "", 1000); // back to normal
*/

/*
document.body.style.background = 'red'; //set background to red

setTimeout(() => document.body.style.removeProperty('background'), 1000); // remove background after 1 second
*/

/*
 div.style.cssText=`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;

  alert(div.style.cssText);
  */

// add css units like px


// let computedStyle = getComputedStyle(document.body);

// now we can read the margin and the color from it

// alert(computedStyle.marginTop); // 5px
// alert(computedStyle.color); // rgb(255, 0, 0)



/*
while (document.cookie == "") {
    document.cookie = 0
}

document.body.querySelector('.container-game').onclick = function click() {
    document.cookie++
    alert(`You've clicked ${document.cookie} times`)
}
*/



/*
let example = document.body.querySelector('.container-game')

alert(example.offsetParent); // object htmlbody element
alert(example.offsetLeft); // 0 (note: a number, not a string "180px")
alert(example.offsetTop); // 0 */

/*
function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}
*/

// alert(document.body.querySelector('.container-game').clientWidth)

/*
Elements have the following geometry properties:

    offsetParent – is the nearest positioned ancestor or td, th, table, body.
    offsetLeft/offsetTop – coordinates relative to the upper-left edge of offsetParent.
    offsetWidth/offsetHeight – “outer” width/height of an element including borders.
    clientLeft/clientTop – the distances from the upper-left outer corner to the upper-left inner (content + padding) corner.
     For left-to-right OS they are always the widths of left/top borders. For right-to-left OS the vertical scrollbar is on the left so clientLeft includes its width too.
    clientWidth/clientHeight – the width/height of the content including paddings, but without the scrollbar.
    scrollWidth/scrollHeight – the width/height of the content, just like clientWidth/clientHeight,
     but also include scrolled-out, invisible part of the element.
    scrollLeft/scrollTop – width/height of the scrolled out upper part of the element, starting from its upper-left corner.

All properties are read-only except scrollLeft/scrollTop that make the browser scroll the element if changed.
*/



/*
alert( window.innerWidth ); // full window width
alert( document.documentElement.clientWidth ); // window width minus the scrollbar
*/



/*
True height

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

alert('Full document height, with scrolled out part: ' + scrollHeight);
*/



/*
alert('Current scroll from the top: ' + window.pageYOffset);
alert('Current scroll from the left: ' + window.pageXOffset);
*/

/* window.scrollBy(0, 10)
   window.scrollTo(0, 0)

   document.body.style.overflow = "hidden" // block scrolling
   document.body.style.overflow = ""
   document.body.querySelector('.container-game').scrollIntoView(top = true) // makes it scroll to the top
   document.body.querySelector('.container-game').scrollIntoView(top = false) // makes it scroll to the bottom
   */

/*
Any point on the page has coordinates:

 Relative to the window – elem.getBoundingClientRect().
 Relative to the document – elem.getBoundingClientRect() plus the current page scroll.

Window coordinates are great to use with position:fixed, and document coordinates do well with position:absolute.

Both coordinate systems have their pros and cons; there are times we need one or the other one, just like CSS position absolute and fixed.
*/

// get document coordinates of the element



/*
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

console.log(getCoords(document.body.querySelector('.container-game')))
*/



/*
let numbers = [23, 65, 88, 12, 45, 99, 2000]

let sortednumbers = numbers.sort((a, b) => a - b);
*/



/*
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // _ is a function declared in the loaded script
});
*/

// Callbacks inside callbacks

/*
loadScript('/my/script.js', function(script) {

  loadScript('/my/script2.js', function(script) {

    loadScript('/my/script3.js', function(script) {
      // ...continue after all scripts are loaded
    });

  });

});
*/


// Handling errors

/*
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

It calls callback(null, script) for successful load and callback(error) otherwise.

The usage:

loadScript('/my/script.js', function(error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});
*/



// Counter to the pyramid of doom

/*
loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}
*/



// and then

/*
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

// The first function was executed.

// And in the case of a rejection, the second one:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);
*/



/*
If we’re interested only in successful completions, then we can provide only one function argument to .then:
*/
{
  let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  });

  // promise.then(alert); // shows "done!" after 1 second
}

{
  /*
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  */

  // .catch(f) is the same as promise.then(null, f)
  // promise.catch(alert); // shows "Error: Whoops!" after 1 second
}



// Finally
/*
new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject *//*
})
// runs when the promise is settled, doesn't matter successfully or not
.finally(() => stop loading indicator)
// so the loading indicator is always stopped before we go on
.then(result => show result, err => show error)
*/



// Examples

{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
  }
}

{
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      let script = document.createElement('script');
      script.src = src;

      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));

      document.head.append(script);
    });
  }

  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

  promise.then(
    // script => alert(`${script.src} is loaded!`),
    // error => alert(`Error: ${error.message}`)
  );

  // promise.then(script => alert('Another handler...'));
}

// Delay promise

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// delay(3000).then(() => alert('runs after 3 seconds'));



// Animated circle with a callback

/*
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .message-ball {
      font-size: 20px;
      line-height: 200px;
      text-align: center;
    }
    .circle {
      transition-property: width, height;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    }
  </style>
</head>

<body>

  <button onclick="go()">Click me</button>

  <script>

  function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    }, 0);
  }
  </script>


</body>
</html>
*/



/*
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
*/

// Corect way to chain promises ^^^



// returning promises

{
  /*
  new Promise(function(resolve, reject) {

setTimeout(() => resolve(1), 1000);

}).then(function(result) {

alert(result); // 1

return new Promise((resolve, reject) => { // (*)
  setTimeout(() => resolve(result * 2), 1000);
});

}).then(function(result) { // (**)

alert(result); // 2

return new Promise((resolve, reject) => {
  setTimeout(() => resolve(result * 2), 1000);
});

}).then(function(result) {

alert(result); // 4

});
*/
}

// fetch
{
  /*
  fetch('/article/promise-chaining/user.json')
// .then below runs when the remote server responds
.then(function(response) {
  // response.text() returns a new promise that resolves with the full response text
  // when it loads
  return response.text();
})
.then(function(text) {
  // ...and here's the content of the remote file
  alert(text); // {"name": "iliakan", "isAdmin": true}
});
*/
}

{
  /*
  // same as above, but response.json() parses the remote content as JSON
fetch('/article/promise-chaining/user.json')
.then(response => response.json())
.then(user => alert(user.name)); // iliakan, got user name

Now let’s do something with the loaded user.

For instance, we can make one more request to GitHub, load the user profile and show the avatar:

// Make a request for user.json
fetch('/article/promise-chaining/user.json')
// Load it as json
.then(response => response.json())
// Make a request to GitHub
.then(user => fetch(`https://api.github.com/users/${user.name}`))
// Load the response as json
.then(response => response.json())
// Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
.then(githubUser => {
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  setTimeout(() => img.remove(), 3000); // (*)
});
*/
}

{
  // Proper fetch
  /*
  function loadJson(url) {
    return fetch(url)
      .then(response => response.json());
  }
  
  function loadGithubUser(name) {
    return loadJson(`https://api.github.com/users/${name}`);
  }
  
  function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);
  
      setTimeout(() => {
        img.remove();
        resolve(githubUser);
      }, 3000);
    });
  }
  
  // Use them:
  loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));
  */
}



/*
As we already noticed, .catch at the end of the chain is similar to try..catch. We may have as many .then handlers as we want, and then use a single .catch at the end to handle errors in all of them.

In a regular try..catch we can analyze the error and maybe rethrow it if it can’t be handled. The same thing is possible for promises.

If we throw inside .catch, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful .then handler.

In the example below the .catch successfully handles the error:

// the execution: catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) {

  alert("The error is handled, continue normally");

}).then(() => alert("Next successful handler runs"));

Here the .catch block finishes normally. So the next successful .then handler is called.

In the example below we see the other situation with .catch. The handler (*)
 catches the error and just can’t handle it (e.g. it only knows how to handle URIError), so it throws it again:

// the execution: catch -> catch
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");

    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* doesn't run here *//*
}).catch(error => { // (**)

alert(`The unknown error has occurred: ${error}`);
// don't return anything => execution goes the normal way

});

The execution jumps from the first .catch (*) to the next one (**) down the chain.
*/


// Generators
/*
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5
*/



/*
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
*/

/*
let extraSnekLength = document.createElement('img')
extraSnekLength.setAttribute("src", '/images/sneklengthright.png')
extraSnekLength.setAttribute("alt", "SnekLength")

if (confirm("Would you like to get longer?") == true) {
  snekLength.after(extraSnekLength.cloneNode(true))
  snekLength.after(extraSnekLength.cloneNode(true))
} else {

}
*/

let menuBar = document.querySelector('.nav-bar')



menu.onclick = function menu() {
  if (menuBar.style.visibility == "hidden") {
    menuBar.style.visibility = 'visible';
    return;
  }
  menuBar.style.visibility = 'hidden';
  return;
}



let themeToggle = document.querySelector('.fa-toggle-off')
let themeToggle2 = document.querySelector('.toggle-text')

function toggleTheme(e) {
  let topBar = document.querySelector('.top-bar');
  let navBar = document.querySelector('.nav-bar');
  // Snek Exclusive
  let snekBorder = document.querySelector('#snek')
  //
  if (themeToggle.classList.contains('fa-toggle-off')) {
    themeToggle.classList.remove('fa-toggle-off');
    themeToggle.classList.add('fa-toggle-on');
    document.body.style.backgroundColor = 'rgb(170, 170, 170)';
    topBar.style.backgroundColor = 'rgb(136, 136, 136)';
    navBar.style.backgroundColor = 'rgb(136, 136, 136)';
    // Snek Exclusive
    snekBorder.style.border = 'border: 3vw solid rgb(88, 110, 63)';
    //
    document.cookie = "darkMode=on"
    e.stopPropagation()
    return;
  } if (themeToggle.classList.contains('fa-toggle-on')) {
    themeToggle.classList.remove('fa-toggle-on');
    themeToggle.classList.add('fa-toggle-off');
    document.body.style.backgroundColor = "";
    topBar.style.backgroundColor = "";
    navBar.style.backgroundColor = "";
    // Snek Exclusive
    snekBorder.style.border = "";
    //
    document.cookie = "darkMode=off"
    e.stopPropagation()
    return;
  }
}

themeToggle.onclick = toggleTheme;
themeToggle2.onclick = toggleTheme;

function cookieCheck() {
  if (document.cookie == "darkMode=off") {

    return;
  } if (document.cookie == "darkMode=on") {
    let topBar = document.querySelector('.top-bar');
    let navBar = document.querySelector('.nav-bar');
    // Snek Exclusive
    let snekBorder = document.querySelector('#snek')
    //
    themeToggle.classList.remove('fa-toggle-off');
    themeToggle.classList.add('fa-toggle-on');
    document.body.style.backgroundColor = 'rgb(170, 170, 170)';
    topBar.style.backgroundColor = 'rgb(136, 136, 136)';
    navBar.style.backgroundColor = 'rgb(136, 136, 136)';
    // Snek Exclusive
    snekBorder.style.border = 'border: 3vw solid rgb(88, 110, 63)';
    //
    return;
  }
}
cookieCheck()