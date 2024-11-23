function removeEmptyArrays(arr){
    return arr.flat(Infinity);
}

console.log(removeEmptyArrays([5,[],3,5,6])); //Expected output: [5,3,5,6]