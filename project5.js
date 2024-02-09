/*Problem 5: Write a function that takes an
 array of numbers and returns the sum of all 
 positive numbers in the array.
*/

console.log('project5');

function sepratePositiveNumber(array) {
    let sum = 0
    array.forEach(element => {
        if (element > 0) {
           sum+=element
        }
    
    });
    return sum
}
let answer = sepratePositiveNumber([87,0, 47, -7, 56, -86, -63, 4, 58, -12])
console.log(answer)