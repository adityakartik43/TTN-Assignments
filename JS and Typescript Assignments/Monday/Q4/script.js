var obj1 = {
    1: "Aditya",
    2: "Kartik"
}
// it looks like deep copy but in actual it copy top level props. like in this case it may looks like it deep copy but actual it's not. I am using spread operator but we can also use Object.assign() method also for creating this shallow copy.
var obj2 = {...obj1}

obj2[1] = "Mohit"

console.log(obj1)
console.log(obj2)

// this is deep copy method 

var deepCopy = JSON.parse(JSON.stringify(obj1))

console.log(deepCopy)