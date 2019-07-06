// Add your functions here

function map(array, callback){

    let newArray = []

    for (let i = 0; i < array.length; i++){
        let newElement = array[i]
        newArray.push(callback(newElement))
    }

    return newArray
}


function reduce(sourceArray, callback, startingPoint){

    let x = (!!startingPoint) ? startingPoint : sourceArray[0]
    let y = (!!startingPoint) ? 0 : 1

    for (; y < sourceArray.length; y++){
        x = callback(sourceArray[y], x)
    }
    return x;
}