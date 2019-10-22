

function password_is_valid(password) {
    let validPassword = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{9,}$/;
    let passwordChecker = validPassword.test(password);
    

        try {
        if (passwordChecker == false) throw new Error ("password must at least have 1 number, 1 lowercase, 1 uppercase and more than 8 characters");
        } catch (error) {
    }
        return passwordChecker;
}

function password_is_ok(password) {
    let numberLookat = /[0-9]/g;
    let lowercaseLookat = /[a-z]/g;
    let uppercaseLookat = /[A-Z]/g;
    let characterlookat = /./g;

    let lookatNumber = numberLookat.test(password);
    let lookatLowercase = lowercaseLookat.test(password);
    let lookatUppercase = uppercaseLookat.test(password);
    let lookatCharacter = characterlookat.test(password);

        if (password.length > 8 && lookatCharacter) {
            if (lookatNumber || lookatUppercase || lookatLowercase) {
                console.log("Correct");
            } else {
                console.log("Error, password missing a number and or lower case letter and or uppercase letter, check password");
            }
            } else {
        console.log("Error, password does not have enough characters, check password");
            }
            return (password);
}

