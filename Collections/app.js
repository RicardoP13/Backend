//****ARRAYS*****

//create
const numbers = [9,6,2,5];
const myArray = new Array("Hola","Mundo");
myArray[2] = "!";
console.log(myArray);

//access to an element
console.log(numbers[1]); //print 6

//change value of an specific position
numbers[0] = 1;
console.log(numbers); //print [1,6,2,5]

//index of an specific element
console.log(numbers.indexOf(5)); // print 3

//*for-of
for (const value of numbers) {
  console.log(value);
}

for (const prop in numbers) {
  console.log(prop);
}


//*multidimensional
const myMatrix = [[3,9],[2,1],[4,5]];
const myMatrix2 = new Array([1,2],[3,4]);

//*adding and removing
myArray.unshift('first');
console.log(myArray); //print ['first','Hola','Mundo','!']

myArray.push('last');
console.log(myArray); // print ['first','Hola','Mundo','!','last']


myArray.shift();
console.log(myArray); //print [Hola','Mundo','!','last']

myArray.pop();
console.log(myArray); // print [Hola','Mundo','!']

myArray.splice(1,1);
console.log(myArray); // print ['Hola','!']

//*filter
const lowNumbers = numbers.filter((val,idx,arry)=> val < 5);
console.log(lowNumbers)

//*map
const sucesors = numbers.map((val,idx,arry)=> val + 1)
console.log(sucesors)

//*find
const elemFound = numbers.find((val,idx,arry)=> val > 5)
console.log(elemFound)

//*flatmap
const flatarr = myMatrix.flatMap((val,idx,arry)=> val)
console.log(flatarr)


//TYPED ARRAYS
var arr = new Uint16Array(10); 
arr[0] = 0xFFFF; 
console.log(arr[0]); 

//MAP
const map1 = new Map(); 
map1.set('a', 1); 
map1.set('b', 2); 
map1.set('c', 3); 
console.log(map1.get('a')); 

//WeakMap
const myWeakMap = new WeakMap() 
const myObj1 = { language: 'JavaScript' } 
const myObj2 = { language: 'Python' } 
const myObj3 = 'language' 
myWeakMap.set(myObj1, 'Language for every platform, soon even a fridge.')
myWeakMap.set(myObj2, 'I kind of miss those curly braces.') 

//myWeakMap.set(myObj3, 'English') // TypeError: Invalid value used as weak map key 
console.log(myWeakMap.get(myObj1)) 
// 'Language for every platform, soon even a fridge.' 
console.log(myWeakMap.get(myObj2)) 
// 'I kind of miss those curly braces.' 


//SETS
const mySet1 = new Set() 

mySet1.add(1) // Set [ 1 ] 
mySet1.add(5) // Set [ 1, 5 ] 
mySet1.add(5) // Set [ 1, 5 ] *********** 
mySet1.add('some text') // Set [ 1, 5, 'some text' ]

const o = {a: 1, b: 2} 
mySet1.add(o) 

console.log(mySet1) 

//Weaksets

let visitedSet = new WeakSet(); 

let john = { name: "John" }; 

let pete = { name: "Pete" }; 

let mary = { name: "Mary" }; 


visitedSet.add(john); // John visited us 
visitedSet.add(pete); // Then Pete 
visitedSet.add(john); // John again 
console.log(visitedSet);
// visitedSet has 2 users now 
// check if John visited? 
console.log(visitedSet.has(john)); // true 
// check if Mary visited? 
console.log(visitedSet.has(mary)); // false 
john = null; // visitedSet will be cleaned automatically 


// SYNCRONOUS GENERATOR

function* generate() { 
  yield 33; 
  yield 99; 
} 

function interruption() { 
  let val = 34; 
  return val;
} 

const go = generate(); 

console.log(go.next()); // Should print { value: 33, done: false } 
console.log(interruption()) // Should print 34 and not affect the generator 
console.log(go.next()); // Should print { value: 99, done: false } 
console.log(go.next()); // Should print { value: undefined, done: true } 