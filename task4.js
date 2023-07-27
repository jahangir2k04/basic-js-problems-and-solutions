// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(array, targetNumber) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === targetNumber){
                return [i, j];
            }
        }
    }
    // let i = 0;
    // let j = array.length - 1;
    // while(i < j){
    //     const sum = array[i] + array[j];
    //     if(sum === targetNumber){
    //         return [i, j];
    //     }else if(sum < targetNumber){
    //         i++;
    //     }else{
    //         j--;
    //     }
    // }
    return [];
}

const result = findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9);
console.log(result);