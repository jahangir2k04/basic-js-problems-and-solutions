//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(array){
    let maxCount = 0;
    let mostFrequentElement = null;
    for(let element of array){
        let count = 0;
        for(let otherElement of array){
            if(element === otherElement){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            mostFrequentElement = element;
        }
    }
    return mostFrequentElement;
}

const result = findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log(result);