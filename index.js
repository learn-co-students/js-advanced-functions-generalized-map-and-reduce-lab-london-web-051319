// Add your functions here
function map(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]))
    }
    return result;
};


function reduce(array, callback, value){
    let result = (!!value) ? value : array[0]
    let i = (!!value) ? 0 : 1
    for (; i < array.length; i++) {
        result = callback(array[i], result)
    }
    return result;
};