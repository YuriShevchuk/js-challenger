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

