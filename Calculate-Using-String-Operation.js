function calculate(num1,num2,op){
    return eval(`num1 ${op} num2`) //Need to use evaluate function which literally performs maths on string
}

console.log(calculate(4,9,'+'));
console.log(calculate(12,5,'-'));