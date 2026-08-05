function pow(x, n) {
  if (n > 0) {
    return alert(x ** n);
  } else {
    console.log('n admits only natural numbers!');
  }
}

let x = +prompt('Write a value for x: ', '');
let n = +prompt('Write a value for n: ', '');

pow(x, n);