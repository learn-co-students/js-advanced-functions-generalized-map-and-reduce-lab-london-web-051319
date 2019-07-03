// Add your functions here
const map = (arr, func) => {
    const result = [];
    for (let element of arr) {
      result.push(func(element))
    }
    return result;
}
  
const reduce = (arr, func, initial=0) => {
    let result = initial !== undefined ? initial : arr[0];

    for (let i = 0; i < arr.length; i++) {
        result = func(result, arr[i]);
      }
    return result;
    // doesn't return true for all values = true
};

