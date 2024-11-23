function NOT(n){
    return 1-n;
}

function AND(a,b){
    return a&&b;
}

function OR(a,b){
    return a||b;
}

//examples:
console.log(NOT(1)); //returns 0 
console.log(AND(1,0));//returns 0
console.log(OR(1,0));//returns 1