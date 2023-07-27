//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(inputString){
    let reverseStr = ''
    for(let i = inputString.length - 1; i >= 0; i--){
        reverseStr += inputString.charAt(i);
    }
    return reverseStr;
}

const result = reverseString('Hello, world');
console.log(result);