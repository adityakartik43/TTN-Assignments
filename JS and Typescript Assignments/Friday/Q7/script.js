const arr = [1, [2, [3, 4], 5], 6];

nums = [];
const solve = (arr) => {
  for (let x of arr) {
    if (typeof x === "object") {
      solve(x);
    } else {
      nums.push(x);
    }
  }
  return nums;
}

console.log(solve(arr));
