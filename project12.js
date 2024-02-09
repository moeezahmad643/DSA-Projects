// Problem 12: Write a function that takes a string as input and returns the same string with each word reversed. Assume that words are separated by spaces. For example, if the input is "hello world", the output should be "olleh dlrow".

function reverseWord(str){
    let reverseWordStr=''
    let array = str.split(' ')
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        for (let j = array[i].length-1; j >= 0; j--) {
            reverseWordStr+=array[i][j]
        }        
        reverseWordStr+=' '
    }
    return reverseWordStr;
}

console.log(reverseWord('hello world'))