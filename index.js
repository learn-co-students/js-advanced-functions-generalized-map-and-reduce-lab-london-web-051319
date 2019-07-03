// Add your functions here
map = (sourceArray, func) => {
    let new_array = []
        sourceArray.forEach(element => {
            new_array.push(func(element))
        });
        return new_array
    }

 reduce = (array, callback, initialValue) =>{
     
    let accumulator = initialValue === undefined ? 0 : initialValue

     for(let i=0;i < array.length; i++)
     {
         accumulator = callback(accumulator,array[i]);
     }
     return accumulator
 }    