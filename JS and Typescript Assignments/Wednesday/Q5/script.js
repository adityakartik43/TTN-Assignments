function fn(){
  fn.ins++;
}

function createIns(){
  fn.inv++;
  return new fn;
}

fn.ins = 0
fn.inv = 0

createIns();
createIns();
createIns();
createIns();
fn()
fn()

console.log(fn.inv)
console.log(fn.ins)




