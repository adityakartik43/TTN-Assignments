function counter(){
    let x = 0;
    return function (){
        console.log(++x)
    }
}

const fn = counter();
fn()
fn()
fn()
fn()
fn()