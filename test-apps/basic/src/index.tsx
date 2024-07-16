function reassign() {
  let a = 3;
  let b = 4;
  a = 1;
}

function foo(a) {
  let b = a - 20;
  let c = b + 1;
  b = 10;
  return b * 10;
}

function reassign_expr() {
  let a = 4;
  let b = "7";
  b = "7" + a;
  let c = a + b;
}

// w/ control flow
function newfunc() {
  let a = 3;
  if (a > 2) {
    a = 1;
    let b = a;
  }  
  let c = a;
}