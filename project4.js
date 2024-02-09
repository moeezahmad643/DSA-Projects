console.log('project 4');

// Problem 4: Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

function findVowels(array) {
    let count =0
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
        if (['a', 'e', 'i', 'o', 'u'].includes(array[i])) {
            // console.log(++count,array[i])
            count++
        }
    }
    return count
}
let answer = findVowels('A Quick Brown Fox Jumps over a Lazy Dog')
console.log(answer);