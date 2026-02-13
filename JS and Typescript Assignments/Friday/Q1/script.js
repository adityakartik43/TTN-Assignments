const arr = [1,1,1,2,2,4,4,6,7,8]

console.log(arr.length)

// method 1
// const nums = [...new Set(arr)]

//method 2
const st = new Set()
const nums = []

for(let x in arr){
    if(st.has(arr[x]) != true){
        nums.push(arr[x])
    }

    st.add(arr[x])
}

console.log(nums)
