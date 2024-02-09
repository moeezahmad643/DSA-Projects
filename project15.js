// Problem 15: Write a function that takes an array of strings as input and returns the total number of characters in all the strings combined.

function numberOfchracter(array) {
    let totalNumber = 0
    for (let word of array){
        totalNumber+=word.length
    }
    return totalNumber
}

console.log(numberOfchracter(['apple', 'banana', 'cherry', 'date']))    