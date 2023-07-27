// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function secondSmallNumber(array){
    if(array.length < 2){
        return "Array should be at least two numbers";
    }
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for(let number of array){
        if(number < smallest){
            secondSmallest = smallest;
            smallest = number;
        }else if(number < secondSmallest && number > smallest){
            secondSmallest = number;
        }
    }
    return secondSmallest;
}

const result = secondSmallNumber([1, 1, 1, 2, 2, 2, 3, 3, 4, 5]);
console.log(result);