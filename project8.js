//Problem 8: Write a function that takes a
// number as input and returns
// true if it's a prime number, false otherwise.
console.log('project 8');

function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false
    }
    return true
}
console.log(checkPrime(11))