//JS challenger

// // JS Objects

// Accessing object properties one:
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(obj) {
    console.log(obj.country)
 }
 myFunction({  continent: 'Asia',  country: 'Japan'})
 myFunction({  country: 'Sweden',  continent: 'Europe'})



//  Accessing object properties two:
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

function myFunction(obj) {
    console.log(obj['prop-2'])
 }
 myFunction({  one: 1,  'prop-2': 2})
 myFunction({  'prop-2': 'two',  prop: 'test'})



//  Accessing object properties three:
// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string
//Author's solution:
// function myFunction(obj, key) {
//     console.log(obj[key])
//   }
function myFunction(obj, str) {
const {[str]: string} = obj;
   console.log(string)
 }
 myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
 myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')



//  Remove a property from an object:
// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'
// Author's solution:
// function myFunction(obj) {
//     const { country, ...rest } = obj;
//    console.log(rest);
//   }
function myFunction(obj) {
    delete obj['country'];
    console.log(obj)
}
myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' })
myFunction({ country: 'Sweden', continent: 'Europe', planet: 'Earth' })
myFunction({ city: 'Sacramento', state: 'California', country: 'USA', continent: 'North America' })



// Swap object keys and values:
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
    let swap = {};
    for(let key in obj) {
        swap[obj[key]] = key;
    }
    console.log(swap)
 }
 myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' })
 myFunction({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young' })
 myFunction({ Berlin: 'city', Germany: 'country' })



//  Merge two objects with matching keys:
// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'
//Author's solution:
// function myFunction(first, second) {
//     const { country, ...rest } = second;
//     return { ...first, ...rest, city: country };
//   }
function myFunction(a, b) {
    delete Object.assign(b, {['city']: b['country']})['country'];
    let c = {...a, ...b};
    console.log(c);
}
 myFunction({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' });
 myFunction({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' });



//  Add property to each object in array:
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
// Author's solution:
// function myFunction(arr, str) {
//     return arr.map((obj) => ({ ...obj, continent: str }));
//   }

function myFunction(arr, str) {
    for(let i = 0; i < arr.length; i++) {
        Object.assign(arr[i], {'continent': str})
    }
    console.log(arr)
 }
 myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia');
//  myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe');

