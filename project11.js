// Problem 11: Write a function that takes a string as input and returns the number of words in the string. Assume that words are separated by spaces.

function returnWords(string) {
    console.log(string);
    let array = string.split(' ')
    return array.length
}

console.log(returnWords('Write a a a spaces.'));