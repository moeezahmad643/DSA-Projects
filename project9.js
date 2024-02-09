// Problem 9: Write a function that takes a string as input and returns the string with all vowels replaced by '*'.

function replaceVowels(str) {

    let updatedStr = ''
    let volwers = ['a', 'e', 'i', 'o', 'u']
    for (let chracter of str) {
        if (volwers.includes(chracter)) {
            updatedStr+='*'
        }else{
            updatedStr+=chracter
        }
    }
    return updatedStr
}


console.log(replaceVowels('You correctly identify prime numbers. '));