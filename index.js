const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const allChar = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password = upperCase[Math.floor(Math.random() * upperCase.length)] +
               lowerCase[Math.floor(Math.random() * lowerCase.length)] +
               number[Math.floor(Math.random() * number.length)] +
               symbol[Math.floor(Math.random() * symbol.length)];

    while(password.length < length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

// function copyPassword(){
//     const password = passwordBox.value.trim();

//     if (!password) {
//         alert("enter your password first");
//         return false;
//     }

//     if (navigator.clipboard && navigator.clipboard.writeText) {
//         navigator.clipboard.writeText(password).catch(function() {
//             passwordBox.select();
//             passwordBox.setSelectionRange(0, 99999);
//             document.execCommand("copy");
//         });
//     } else {
//         passwordBox.select();
//         passwordBox.setSelectionRange(0, 99999);
//         document.execCommand("copy");
//     }

//     return true;
// }

// function processPassword(){
//     if (copyPassword()) {
//         alert("your password is updated");
//     }
// }

const genBtn = document.getElementById("generate-btn");
const signInBtn = document.getElementById("signin-btn");

if (genBtn) {
    genBtn.addEventListener("click", function(event){
        event.stopImmediatePropagation();

        if (!passwordBox.value.trim()) {
            alert("enter your password first");
            return;
        }

        copyPassword();
        alert("your password is updated");
    }, true);
}

if (signInBtn) {
    signInBtn.addEventListener("click", function(event){
        event.preventDefault();
        validateSignIn();
    });
}

passwordBox.addEventListener("click", function(){
    if (genBtn) {
        genBtn.innerHTML = "Generate";
    }
});

function validateSignIn(){
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const passwordField = document.getElementById("password");

    if (!username || !email || !passwordField) {
        return false;
    }

    if (!username.value.trim()) {
        alert("Please enter your username");
        username.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert("Please enter your email");
        email.focus();
        return false;
    }

    if (!passwordField.value.trim()) {
        alert("Please enter your password");
        passwordField.focus();
        return false;
    }

    alert("All fields are filled. You can sign in now.");
    return true;
}

function copyPassword(){
    const password = passwordBox.value.trim();

    if (!password) {
        alert("enter your password first");
        return false;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(password).catch(function() {
            passwordBox.select();
            passwordBox.setSelectionRange(0, 99999);
            document.execCommand("copy");
        });
    } else {
        passwordBox.select();
        passwordBox.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    return true;
}

function processPassword(){
    if (copyPassword()) {
        alert("your password is updated");
    }
}