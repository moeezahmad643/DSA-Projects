// Problem 16: Write a function that takes a string as input and returns the reversed version of that string, without using any built-in reverse function or creating a new string to store the reversed version. Instead, modify the original string in place to achieve the reversal.


function reverse(str) {
    reverseStr ='' 
    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
       reverseStr+=str[i]
    }
    return reverseStr
}
console.log(reverse('hello i am a programmer'));