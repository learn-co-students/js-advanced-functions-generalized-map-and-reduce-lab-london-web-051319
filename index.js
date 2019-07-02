// Add your functions here

function map (array, fn) {
  let newArray = []
  for (let element of array) {
    newArray.push(fn(element))
  }
  return newArray
}

function reduce (array, fn, startValue) {
  let newValue = !!startValue ? startValue : 0.1
  for (let element of array) {
    newValue = fn(element, newValue)
  }
  if (typeof(newValue) === 'number') {
    newValue = Math.floor(newValue)
  }
  return newValue
}
