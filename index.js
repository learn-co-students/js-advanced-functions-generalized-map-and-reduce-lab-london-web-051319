import { totalmem } from "os";

function map(arr, func) {
  const newArr = []
  for (const each of arr) {
    newArr.push(func(each));
  }
  return newArr;
}

// function reduce(arr, func, start = typeof(func(start,start)) === "boolean" ? true : 0) {
function reduce(arr, func, start) {
  let total = start
  if (start === undefined) {
    total = typeof(func(start,start)) === "boolean" ? true : 0
  }

  for (const each of arr) {
    total = func(each, total);
  }
  return total;
}