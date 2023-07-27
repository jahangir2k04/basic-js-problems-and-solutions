// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(inputRomanNumeral) {
    const romanNumeral = inputRomanNumeral.toUpperCase();
    const romanNumeralValues = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let integerValue = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
        const currentValue = romanNumeralValues[romanNumeral[i]];
        const nextValue = romanNumeralValues[romanNumeral[i + 1]] || 0;
        if (currentValue < nextValue) {
            integerValue -= currentValue;
        } else {
            integerValue += currentValue;
        }
    }
    return integerValue;
}

const result = romanToInteger("c");
console.log(result);