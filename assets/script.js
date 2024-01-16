let password = ""

let tempParameterList=[];

// make an array to set the paramaters for the password that can be changed)
let parameters = {
    length: 8,
    lowercase: false,
    uppercase: false,
    numeric: false, 
    specialCharacter: false,
}

// create arrays for all symbols represented by parameters

lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

numeric = ['0','1','2','3','4','5','6','7','8','9'];

specialCharacter = ['!','@','#', '$', '%', '^', '&','*','+'];

// Helper Functions

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// create functions that determine the parameters for the password
exit = false

function setSpecialCharacter() {
    exit = false;

    if (confirm("Include special characters in Password?")) {
        parameters.specialCharacter=true;
    } else {
        parameters.specialCharacter=false;
    }

    if (confirm("Settings--length: " + parameters.length + " lowercase: " + parameters.lowercase + " uppercase: " + parameters.uppercase + " numerics: " + parameters.numeric + " special characters: " + parameters.specialCharacter + " Is this correct?" )) {
        if (parameters.lowercase === false && parameters.uppercase=== false && parameters.numeric === false && parameters.specialCharacter === false) {
            alert("At least one setting must be true");
            setParameters();
        } else {
            alert("Generating Password");
        }
    } else {
        if (confirm("Try Again?")) {
            setParameters();
        } else {
            exit = true;
        }
    }
}

function setNumeric() {
    if (confirm("Include numerics in Password?")) {
        parameters.numeric=true;
        setSpecialCharacter();
    } else {
        parameters.numeric=false;
        setSpecialCharacter();
    }
}

function setUppercase() {
    if (confirm("Include uppercase in Password?")){
        parameters.uppercase=true;
        setNumeric();
    } else {
        parameters.uppercase=false;
        setNumeric();
    }
}

function setLowercase() {
    if (confirm("Include lowercase in password?")) {
        parameters.lowercase=true;
        setUppercase();
    } else {
        parameters.lowercase=false;
        setUppercase();
    }
}

function setParameters() {
    tempLength = prompt("Please choose a number between 8 and 128")
    if (parseInt(tempLength) > 7 && parseInt(tempLength) < 129) {
        parameters.length = tempLength;
        setLowercase()
    } else {
        alert("Value is not an integer between 8 and 128");
        setParameters();
    }
}

// create a function that changes the text within the password container h3 element

function displayPassword() {
    passwordh3=document.getElementById("password");
    passwordh3.innerText= password
}
// create a function that generates the password using the chosen parameters

function createPassword() {
    password ="";
    if (exit == true) {
        return
    }

    if (parameters.lowercase == true) {
        tempParameterList=tempParameterList.concat(lowercase);
    }
    if (parameters.uppercase == true) {
        tempParameterList=tempParameterList.concat(uppercase);
    }
    if (parameters.numeric == true) {
        tempParameterList=tempParameterList.concat(numeric);
    }
    if (parameters.specialCharacter == true) {
        tempParameterList=tempParameterList.concat(specialCharacter)
    }

    for (i=0; i<parameters.length; i++) {
        password = password + tempParameterList[getRandomInt(tempParameterList.length)];
    }
    checkPassword()
}

function checkPassword() {
    let lowercaseTest = false;
    let uppercaseTest = false;
    let numericTest = false;
    let specialCharacterTest = false;

    if (parameters.lowercase == true) {
        for (let i=0; i<password.length; i++) {
            if (lowercase.includes(password[i])) {
                lowercaseTest = true;
            }
        }
    }
    if (parameters.uppercase == true) {
        for (let i = 0; i < password.length; i++) {
            if (uppercase.includes(password[i])) {
                uppercaseTest = true;
            }
        }
    }
    if (parameters.numeric == true) {
        for (let i = 0; i<password.length; i++) {
            if (numeric.includes(password[i])) {
                numericTest = true;
            }
        }
    }
    if (parameters.specialCharacter == true) {
        for (let i = 0; i<password.length; i++) {
            if (specialCharacter.includes(password[i])) {
                specialCharacterTest = true;
            }
        }
    }
    if (parameters.lowercase == lowercaseTest && parameters.uppercase == uppercaseTest && parameters.numeric == numericTest && parameters.specialCharacter == specialCharacterTest) {
        alert("Success!");
    } else {
            createPassword();
    }
}
// create a function that checks to see if the password contains at least 1 element of each parameter.


// create alerts that allow one to manage the parameters for the password.

function makePassword() {
    tempParameterList=[];
    setParameters();
    createPassword();
    displayPassword();
}




