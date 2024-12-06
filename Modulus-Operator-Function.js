function mod(num1,num2){
    return (num1 - (num2 * Math.floor(num1/num2)));
    }

console.log(mod(5,2));//Should return 1
console.log(mod(6,3)); //Should return 0
console.log(mod(218,5));//Should return 3