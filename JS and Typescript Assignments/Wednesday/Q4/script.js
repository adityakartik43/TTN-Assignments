// have length method that returns a length of arguments

function fn (...args){
  console.log(arguments.length)
}

fn(1,2,3,4,5,8,9)


// looks like array because have indexing to access the data

function fn2(...args) {
  console.log(arguments[1]);
}
fn2(2,3,4,2);

// we are able to change the value of our paramenter through arguments indexing

function fn3(a) {
  arguments[0] = 100;
  console.log(a);
}
fn3(30);