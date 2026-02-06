class MyClass {
    static add(a, b){
        return a+b;
    }
    static sub(a, b){
        return a-b;
    }
    static mul(a, b){
        return a*b;
    }
    static dv(a, b){
        return a/b;
    } 
}

const a = 10, b = 5;

console.log(MyClass.add(a, b));
console.log(MyClass.sub(a, b));
console.log(MyClass.mul(a, b));
console.log(MyClass.dv(a, b));