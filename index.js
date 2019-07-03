// Add your functions here
function map(arr, fn) {
  let newArr = [];

  if (fn) {
    arr.forEach(item => {
      newArr.push(fn(item));
    });
  } else {
    newArr = arr;
  }

  return newArr;
}

function reduce(arr, fn, startVal) {
  let acc = (!!startVal ? startVal : arr.shift());

  arr.forEach(item => {
    acc = fn(item, acc);
  });

  return acc;
}
