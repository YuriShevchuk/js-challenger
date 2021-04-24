// area code extractor ✅
function areaCode(text) {
	console.log(text.slice(text.indexOf("(") + 1, text.indexOf(")")));
}
areaCode("The supplier's phone number is (555) 867-5309");

// format a poem  ✅
// return a poem as a string with '\n'
function formatPoem(string) {
	let a = string.split(". ").join(".\n");
	console.log(a);
}
formatPoem(
	"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated."
);

// Write shortest function to calculate Average number of Array ✅
function avg(a) {
	console.log(a.reduce((acc, cur) => acc + cur) / a.length);
}
avg([0, 1, 2, 3, 4]);

// Char Code Calculation   ✅
/**
 * Given a string, turn each character into 
 * its ASCII character code and join them together to create a number - 
 * let's call this number total1:
'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
 * 
 */
function charCodeCalc(str) {
	let arr = str.split("").map((item) => item.charCodeAt());
	let total1 = arr.join("");
	let total2 = total1.replace(/7/g, "1");
	let num1 = total1.split("").reduce((acc, cur) => +acc + +cur);
	let num2 = total2.split("").reduce((acc, cur) => +acc + +cur);
	console.log(num1 - num2);
}
charCodeCalc("ABC");
charCodeCalc("aaaaaddddr");
charCodeCalc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

// A hero is on his way to the castle to complete his mission.  ✅
// However, he's been told that the castle is surrounded with
// a couple of powerful dragons! each dragon takes 2 bullets to be defeated,
// our hero has no idea how many bullets he should carry..
//  Assuming he's gonna grab a specific given number of bullets and
//  move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)
function hero(bullets, dragons) {
	console.log(bullets / 2 >= dragons);
}
hero(10, 5);
hero(7, 4);
hero(100, 40);



// find the longest word in a string  ✅
let string = "My name is Walter White";
function StringChallenge(str) {
	const arr = str.replace(/[^a-zA-Z]/g, " ").split(" ");
	console.log(arr);
	const sortedArr = arr.sort((a, b) => b.length - a.length);
	const first = sortedArr[0];
	return first;
}
console.log(StringChallenge(string));



// unique array elements(ES6) and sort by ascending  ✅
function uniqueElements(arr) {
    // your code place here
    let uniqArr = [...new Set([...arr])].sort((a,b)=>a-b);
    console.log( uniqArr);
}
uniqueElements([1,1,1,3,3,2,2,6,7,1,2,5]);
uniqueElements([5, 4, 1, 2, 2, 1, 5, 6]);

// unique array elements(ES5) and sort by ascending
function removeDuplicates(array) {
let sorted = array.sort(function(a,b) { 
	return a - b
} );
let removed = [];
for (let i = 0; i < sorted.length; i++) {
	if (sorted[i] !== sorted[i-1]) {
  	removed.push(sorted[i])
  }
}
console.log( removed);
}

removeDuplicates([1,1,1,3,3,2,2,6,7,1,2,5]) ;
removeDuplicates([5, 4, 1, 2, 2, 1, 5, 6])



// Geometry Basics: Distance between points in 2D  ✅
  function distanceBetweenPoints(a, b) {
	let x = b.x - a.x;
	let y = b.y - a.y;
console.log(x,y)
	let sqrt = Math.sqrt( (b.x - a.x)**2 + (b.y - a.y)**2)
	console.log(sqrt)
  }
  distanceBetweenPoints({x: 3,y: 3}, {x: 3,y: 3})
  distanceBetweenPoints({x: 1,y: 6}, {x: 4,y: 2})
  distanceBetweenPoints({x: -10.2,y: 12.5}, {x: 0.3,y: 14.7})


//   String repeat  ✅
  function repeatStr (n, s) {
	let str = n.repeat(s);
	str
	console.log(str);
  }

  repeatStr('*', 5)
  repeatStr('ha ', 2)
  repeatStr('*', 5)


  function add(x, y){
	if (y == 0)
	return x;
else
	return add(x ^ y, (x & y) << 1);
}

console.log(add(undefined, undefined));
console.log(add(true, false));
console.log(add("21","21"));
console.log(add(1994,1994));


// Calculate average  ✅
// Write a function which calculates the average of 
// the numbers in a given list.
// Note: Empty arrays should return 0.
function find_average(array) {
let item = 0
for (const i in array) {
	item += array[i]
}
!array.length ? item : item /= array.length
	return item
}

console.log(  find_average([1,2,3,4]))
console.log(  find_average([]))


// How low do you go?  ✅
// Your job is to return an array containing 
// the lowest number of reps that you were able to complete on each day. 
const lowest = (...a) => a.map(v => Math.min(...v))
console.log(lowest([9,2,3], [3,5,6]))



// Remove First and Last Character  ✅
// Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string.
//  You don't have to worry with strings with less than two characters.
// 1)
function removeCharI(str){
	let edited = str.split("");
	edited.pop();
	edited.shift();
	return edited.join("");
   };
console.log(removeCharI('javascript'))

// 2)
function removeCharII(str){
	return str.slice(1,-1)
}
console.log(removeCharII('javascript'))



// Highest Letter Number in alphabet from string  ✅
function highestLetterNumber(str) {
	let arr = str.toLowerCase().split('');
	let pushed = [];
	for (const ar of arr) {
		pushed.push(ar.charCodeAt() - 'a'.charCodeAt() + 1)
	}
	console.log(pushed)
	return Math.max(...pushed)
}

console.log(highestLetterNumber('string'))
console.log(highestLetterNumber('javascript'))


// Extending JavaScript Objects: Get First & Last Array Element  ✅
Array.prototype.first = function() {
	return this[0]
  }
Array.prototype.last = function() {
	return this[this.length-1]
  }

console.log(  [2,3,4,5].first())
console.log(  [2,3,4,5].last())