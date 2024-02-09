// Problem 10: Write a function that takes an array of numbers and returns the difference between the maximum and minimum numbers in the array.
function differenceOfMaxMin(array) {
    let max = -Infinity;
    let min = Infinity;
    for (const number of array) {
        if (number >= max) {
            max = number
        } else if (number <= min) {
            min = number
        }

    }
    return max - min
}


console.log(differenceOfMaxMin([87, 0, 47, -7, 56, -86, -63, 4, 58, -12]));
