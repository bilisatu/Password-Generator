const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols = "!@#$%^&*()";

function generatePassword() {
    
    let validation = validateOptions();
    if (validation !== true) {
        return validation;
    }

    let pool = "";
    if (lowercaseCheckbox.checked) pool += lowercase;
    if (uppercaseCheckbox.checked) pool += uppercase;
    if (numbersCheckbox.checked) pool += numbers;
    if (symbolsCheckbox.checked) pool += symbols;

    let password = "";
    let passwordLength = parseInt(lengthInput.value);

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * pool.length);
        password += pool[randomIndex];
    }

    return password;
}

let generateBtn = document.getElementById('generateBtn');
let passwordDisplay = document.getElementById('passwordDisplay');

function validateOptions() {
    let length = parseInt(lengthInput.value);
    let hasOptions = lowercaseCheckbox.checked ||
    uppercaseCheckbox.checked ||
    numbersCheckbox.checked ||
    symbolsCheckbox.checked;

    if (length < 4 || length > 50) {
        return "Length must be between 4 and 50";
    }

    if (!hasOptions) {
        return "Select at least one character type";
    }

    return true;
}

generateBtn.addEventListener('click', function() {
    let newPassword = generatePassword();
    passwordDisplay.textContent = newPassword;

});

let lengthInput = document.getElementById('lengthInput');
let lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
let uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
let numbersCheckbox = document.getElementById('numbersCheckbox');
let symbolsCheckbox = document.getElementById('symbolsCheckbox');