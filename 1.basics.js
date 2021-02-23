//JS challenger

// // JS Basics

// 1. Check whether a string contains another string and concatenate:
// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
	console.log(a.indexOf(b) === -1 ? a + b : b + a);
}
myFunction("cheese", "cake"); // cheesecake
myFunction("java", "script"); // javascript
myFunction("lips", "s"); // slips

// 2. Find the correct word by incrementing letters in alphabet:
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

//Author's solution:
// function myFunction(str) {
//     const arr = [...str];
//     const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
//     return correctedArray.join('');
//   }
function myFunction(input) {
	let arr = [];
	for (i = 0; i < input.length; i++) {
		arr.push(input.charCodeAt(i) + 1);
	}
	let aaa = String.fromCharCode.apply(this, arr);
	console.log(aaa);
	return aaa;
}
myFunction("sdrshmf"); // testing
myFunction("bgddrd"); // cheese
myFunction("bnchmf"); // coding

// 3. Clear up the chaos behind these strings:
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript',
// 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
	b = b.replace("%", "").split("").reverse().join("");
	console.log(a.charAt(0).toUpperCase() + a.replace("%", "").slice(1) + b);
}
myFunction("java", "tpi%rcs"); // Javascript
myFunction("jav%a", "tpi%rcs"); // Javascript

// 4. Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

function myFunction(num) {
	console.log(num.toString().split(""));
}
myFunction(10); // [1,0]
myFunction(931); // [9,3,1]
myFunction(193278); // [1,9,3,2,7,8]

// 5. Round a number to 2 decimal places
// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(num) {
	// console.log(num.toPrecision(3));
	console.log(num.toFixed(2));
}

myFunction(2.12397); // 2.12
myFunction(3.136); // 3.14
myFunction(1.12397); // 1.12
myFunction(26.1379); // 26.14

// 6. How many times does a character occur?
// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

//Author's solution:
// function myFunction(char, string) {
// 	console.log( string.toLowerCase().split(char).length - 1)
//   }

function myFunction(letter, string) {
	let a = 0;
	string = string.toLowerCase().split("");
	for (let i = 0; i < string.length; i++) {
		if (letter === string[i]) {
			a++;
		}
	}
	console.log(a);
}
myFunction("m", "How many times does the character occur in this sentence?"); // 2
myFunction("h", "How many times does the character occur in this sentence?"); // 4
myFunction("?", "How many times does the character occur in this sentence?"); // 1
myFunction("z", "How many times does the character occur in this sentence?"); // 0

// 7. Return the next higher prime number:
// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			num++;
		} else {
			continue;
		}
	}
	console.log(num);
}

myFunction(7);
myFunction(38);
myFunction(115);
myFunction(2000);

