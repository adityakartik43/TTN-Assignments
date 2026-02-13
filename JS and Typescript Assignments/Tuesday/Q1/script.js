var cal = {
    a: 0,
    b: 0,

    read(){
        a = Number(prompt("Enter num 1"));
        b = Number(prompt("Enter num 2"));
    },

    add(){
        return a + b;
    },
    
    sub(){
        return a - b;
    },
    mul(){
        return a * b;
    },

}


cal.read();
console.log("Add: ", cal.add())
console.log("Sub: ", cal.sub())
console.log("Mul: ", cal.mul())