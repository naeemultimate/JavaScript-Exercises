function countVowels(word){
    const regex = /[a,e,i,o,u]/g;
    const found = word.match(regex)
    return found.length;
}

console.log(countVowels('Celebration')); // Should return 5
console.log(countVowels('Hello')); // Should return 2