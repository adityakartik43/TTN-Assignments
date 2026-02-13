let arr = [21, 33, 66, 96]


// forEach() is an iteration method used to execute a callback function once for each element of an array. It accepts a callback function with parameters for the current element, index, and original array, along with an optional thisArg. The return type of forEach() is always undefined, meaning it cannot be chained like other array methods. It does not modify the original array directly and is typically used for performing side effects such as logging values, updating variables, or manipulating the DOM.

arr.forEach((elem, idx, arr) => {
    console.log(elem*10, idx, arr);
});


// map() is a transforming array method used to create a new array by applying a callback function to each element of the original array. It takes a callback function as its main parameter, which receives the current element, its index, and the original array, along with an optional thisArg. The callback must return a value, and these returned values form the new array. The return type of map() is always a new array of the same length as the original array. It does not mutate the original array and is mainly used when each element needs to be modified or transformed.

const brr = arr.map((elem) => {
    return elem * 20;
})

console.log(brr)


// filter() is a selection-based array method that creates a new array containing only those elements which satisfy a given condition. It accepts a callback function that returns a boolean value (true to keep the element and false to discard it), along with an optional thisArg. The return type of filter() is a new array that may have fewer elements than the original array, or even be empty. It does not change the original array and is commonly used when data needs to be extracted based on conditions.

const crr = arr.filter((elem) => {
    return elem % 2 == 0;
})

console.log(crr)

// reduce() is an accumulator method used to reduce an array into a single value such as a number, string, object, or even another array. It takes a callback function that receives an accumulator and the current value, along with an optional initial value for the accumulator. The return type of reduce() depends on what is returned from the callback and can be of any data type. It does not mutate the original array and is widely used for summation, grouping, flattening arrays, and building objects.

const drr = arr.reduce((acc, elem)=>{
    return acc += elem
}, 0)

console.log(drr)


// find() is a searching array method used to retrieve the first element in an array that satisfies a specified condition. It takes a callback function that returns a boolean value and an optional thisArg. The return type of find() is the element itself if found, otherwise it returns undefined. Once a matching element is found, the iteration stops immediately, making it more efficient than filter() when only one result is required. It does not alter the original array.


const val = brr.find((elem)=>{
    return elem > 500
})

console.log(val)
