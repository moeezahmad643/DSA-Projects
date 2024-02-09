console.log('project2');

// finction the reverse array

function returnReverseString(array) {

    let reverseArray = ''
    for (let i = 0; i < array.length; i++) {
        reverseArray += array[-(i - array.length+1)]
    }
    return reverseArray;

}

let answer = returnReverseString('Hello I am a Boy')
console.log(answer);


// console.log('project2');

// function returnReverseString(str) {
//     let reverseStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }

// let answer = returnReverseString('Hello I am a Boy');
// console.log(answer);
