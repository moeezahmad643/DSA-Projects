console.log('project3');

// function that find the larg number amoung the follownig

function findLargest(array) {
    let max = -Infinity
    array.map((element) => {
        if (max <= element) max=element
    })
    return max;
}

let answer= findLargest([-76, -76, -98, -43, -56, -87, -78, -63])
console.log(answer);