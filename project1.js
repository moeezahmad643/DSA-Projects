console.log('Project 1');

// function to make the summ of the numbers

const sumNumber = (array) => {
    if (!Array.isArray(array)) {
        console.error('The input must be an array')
    }
    else {
        let sum = 0
        array.map(element => {
            try {
                element = parseInt(element)
                sum += element
            } catch (error) {
                console.error('The input must be an array')
            }

        })
        return sum
    }
}

let result = sumNumber([5, '5', 5])
console.log(result)