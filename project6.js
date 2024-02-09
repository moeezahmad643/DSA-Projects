// Problem 6: Write a function that takes a string 
// as input and returns true if
//  the string is a palindrome, false otherwise

console.log('project 6');

function checkPalindrome(string) {
    let reverseString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i]
        // console.log(reverseString);
    }
    return string === reverseString;

}

let answer = checkPalindrome('madam')
console.log(answer);