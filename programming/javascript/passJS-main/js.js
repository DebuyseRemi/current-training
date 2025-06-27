function genPass(len,lowercase, uppercase, numbers, symbols) {
const lower = "abcçdeéèfghiîjklmnopqrstuùvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numChars = "0123456789";
const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

   let chars="";

    if (lowercase) chars += lower;
    if (uppercase) chars += upperChars;
    if (numbers) chars += numChars;
    if (symbols) chars += specialChars;

    console.log(chars)
    let pass = "";
    for (let i = 0; i < len; i++) {
        const randIdx = Math.floor(Math.random() * chars.length);
        pass += chars[randIdx];
        console.log("Coucou")
    }
    console.log(pass)
    return pass;
}

function generate() {
    const len = parseInt(document.getElementById("password-length").value);
    const low = document.getElementById("lowercase").checked;
    const upper = document.getElementById("uppercase").checked;
    const nums = document.getElementById("numbers").checked;
    const special = document.getElementById("symbols").checked;

    const pass = genPass(len,low, upper, nums, special);
    document.getElementById("password-output").value = pass;
}
