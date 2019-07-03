// Add your functions here

const map = (arr, func) => {
  const r = [];
  for (let i = 0; i < arr.length; i++) {
    r.push(func(arr[i]))
  }
  return r;
}

const reduce = (arr, func, start) => {
  let r = start;
  let i = 0;
  start || (r = arr[0], i = 1)
  for (; i < arr.length; i++) {

    r = func(arr[i], r)
  }
  return r;
}
