// Problem 7: Write a function that takes two strings
//  as input and returns true if they are anagrams of
//   each other, false otherwise.
//    Two strings are anagrams if they
// contain the same characters in a different order.

console.log('project 7');

function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return 'not anagrams'
    for (let character of str1) {

        if (str2.includes(character)) {
        } else {

            return 'not anagrams'
        }


    }
    return 'anagrams'

}
let answer = checkAnagram('listen, girl, live long', 'silent, grin, love long');
console.log(answer);

//// chat gpt code

// console.log('project 7');

// function checkAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const charCount1 = {};
//     const charCount2 = {};

//     for (let char of str1) {
//         charCount1[char] = (charCount1[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         charCount2[char] = (charCount2[char] || 0) + 1;
//     }

//     for (let char in charCount1) {
//         if (charCount1[char] !== charCount2[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// let answer = checkAnagram('listen, girl, live long', 'silent, grin, love long');
// console.log(answer);

