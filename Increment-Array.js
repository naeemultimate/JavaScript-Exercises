/*
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

*/

function incrementItems(arr){
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i] + 1;
    }
    return arr; 
}

console.log(incrementItems([1,2,3,4])); //returns [2,3,4,5]
console.log(incrementItems([2,4,8,10])); //returns [3,5,9,11]
console.log(incrementItems([99])); //returns [100]