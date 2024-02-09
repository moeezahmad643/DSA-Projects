// Problem 13: Write a function that takes an array of numbers and returns a new array containing only the unique elements from the original array, without any duplicates.


function seprateUniques(array) {
    let uniqueElements = []
    for (const chracter of array) {
        if(!(uniqueElements.includes(chracter))) uniqueElements.push(chracter)
    }
    return uniqueElements
}

let answer= seprateUniques([84,43,67,23,86,32,78,24,78,35,78])
console.log(answer);