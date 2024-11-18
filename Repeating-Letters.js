function doubleChar(str){
    const wordArr = str.split("");
    const newArr = wordArr.map(((char) => char+char));
    return newArr.join('');
}

console.log(doubleChar('hello')); Should repeat each letter once to get 'hheelllloo';