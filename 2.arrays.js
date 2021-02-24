//JS challenger

// // JS Arrays

// Sort an array of numbers in descending order
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction(arr) {
	arr.sort((a, b) => {
		return b - a;
	});
	console.log(arr);
}

myFunction([1, 3, 2]);
myFunction([4, 2, 3, 1]);

// Remove a specific array element:
// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(arr, value) {
	//1) method:
	// for(let i = 0; i < arr.length; i++) {
	// 	if(arr[i] === value) {
	// 		arr.splice(i, 1);
	// 	}
	// }
	// console.log(arr);

	// 2) method
	let filtered = arr.filter((e) => {
		return e !== value;
	});
	console.log(filtered);
}
myFunction([1, 2, 3], 2);
myFunction([1, 2, "2"], "2");
myFunction([false, "2", 1], false);
myFunction([1, 2, "2", 1], 1);

//  Return the average of an array of numbers:
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
	arr = arr.reduce((previous, current) => previous + current) / arr.length;
	console.log(arr);
}

myFunction([10, 100, 40]);
myFunction([10, 100, 1000]);
myFunction([-50, 0, 50, 200]);


// Return last n array elements:
// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all
function myFunction(arr, i) {
	console.log(arr.slice(arr.length - i))
	// console.log( arr.slice(-i) );
 }

 myFunction([1, 2, 3, 4, 5], 2);
 myFunction([1, 2, 3], 6);
 myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3);


//  Check if all array elements are equal:
 // Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
	console.log(arr.every( (i) => i === arr[0] ));
	
}
myFunction([true, true, true, true]);
myFunction(['test', 'test', 'test']);
myFunction([1,1,1,2]);
myFunction(['10',10,10,10]);


// Create a range of numbers:
// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max
function myFunction(start, end) {
	let arr = [];
	for(let i = start; i <= end; i++) {
		arr.push(i);
	}
	console.log(arr)
 }
 myFunction(2, 10);
 myFunction(-5, 5);


//  Return the longest string from an array of strings:
// Write a function that takes an array of strings as argument
// It should return the longest string
function myFunction( arr ) {
	console.log( arr.reduce((a, b) => a.length <= b.length ? b : a))
}
myFunction(['help', 'me']);
myFunction(['I', 'need', 'candy']);


// Sum up all array elements with values greater than n:
// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum
function myFunction(arr, num) {
	console.log( arr.filter((item) => item > num).reduce((a, b) => a + b) );
 }

 myFunction([1, 2, 3, 4, 5, 6, 7], 2)
 myFunction([-10, -11, -3, 1, -4], -3)
 myFunction([78, 99, 100, 101, 401], 99)


//  Merge an arbitrary number of arrays:
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...args) {
	console.log(args.flat())
 }
 myFunction([1, 2, 3], [4, 5, 6])
 myFunction(['a', 'b', 'c'], [4, 5, 6])
 myFunction([true, true], [1, 2], ['a', 'b'])


//  Merge two arrays with duplicate values:
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(...args) {
	let arr = args.flat();
	let sorted = arr.sort((a, b) => a - b);
	console.log([...new Set(sorted)])
 }
 myFunction([1, 2, 3], [3, 4, 5]);
 myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);