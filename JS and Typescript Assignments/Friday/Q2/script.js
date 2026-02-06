const getAnagrams = (arr) => {
    let ans = [];

    let mp = new Map();
    for(let x of arr){
        let temp = x.split('').sort().join('');
        // console.log(temp)
        mp.set(temp, (mp.get(temp) || 0) + 1);
    }

    for(let word of mp.keys()){

        // console.log(word)
        if(mp.get(word) > 1){
            ans.push(word)
        }
    }

    return ans;

}

const words = ["listen", "silent", "enlist", "hello", "ohlle"];

const ans = getAnagrams(words)

console.log(ans)


