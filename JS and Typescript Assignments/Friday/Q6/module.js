export const filterArray = (arr) => {
    let nums = [];
    let st = new Set();

    for(let x of arr){
        if(st.has(x) == false){
            nums.push(x);
        }
        st.add(x)
    }

    return nums;

}