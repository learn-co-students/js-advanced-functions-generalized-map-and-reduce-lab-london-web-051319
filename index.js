// Add your functions here

// function map(array, callBack) {
//    const newArray = array.map(callBack);
//    return newArray;
// };

function map(array, callBack) {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
      newArray.push(callBack(array[i]));
   }
   return newArray;
};

// function reduce(array, callBack, startingPoint = 0) {
//    const value = array.reduce(callBack, startingPoint);
//    return value;
// };

function reduce(array, callBack, startingPoint = 0) { 
   let value = (!!startingPoint) ? startingPoint : array[0];
   let start = (!!startingPoint) ? 0 : 1;

   for (let i = start; i < array.length; i++) {
      value = callBack(array[i], value);
   }
   return value;
};
