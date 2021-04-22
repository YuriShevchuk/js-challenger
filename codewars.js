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