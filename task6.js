// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPasswordGenerator(length) {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    const numbers = "0123456789";
    const allCharacters = lowercaseLetters + uppercaseLetters + specialCharacters + numbers;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()* allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }
    return password;
}

const result = randomPasswordGenerator(8);
console.log(result);