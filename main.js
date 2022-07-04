const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+={[}],|:;<>.?/"

/* ...............Sorting characters into smaller characters sets...............*/

let lowerCaseCharacters = characters.replace(/[^a-z]/g, "")
let upperCaseCharacters = characters.replace(/[^A-Z]/g, "")
let numbersCharacters = characters.replace(/[^0-9]/g, "")
let symbolsCharacters = characters.replace(/[a-zA-Z0-9]/g, "")

/*................................................................................*/

let rangeEl = document.querySelector("#password-length")
let passwordLengthEl = document.querySelector("#password-length-el")
let generateEl = document.querySelector("#generate-btn")
let passwordEl1 = document.querySelector("#pwd1")
let passwordEl2 = document.querySelector("#pwd2")
let lowerCaseEl = document.querySelector("#lower-case")
let upperCaseEl = document.querySelector("#upper-case")
let numberEl = document.querySelector("#numbers")
let symbolEl = document.querySelector("#symbols")
let charCheckboxes = document.querySelectorAll('[name="char-set"]')



let characterSet = '' //will store character set from characters checkbox


let passwordLength = (rangeEl.value = 10); //default Password length
passwordLengthEl.textContent = passwordLength
console.log(passwordLength)


/*..........Selecting all the characters set as default option......*/

lowerCaseEl.checked = true
upperCaseEl.checked = true
numberEl.checked = true
symbolEl.checked = true

/**............................................................... */

/*...........Event Listeners......................*/

rangeEl.oninput = getPasswordLength
generateEl.onclick = generatePassword
for (let checkbox of charCheckboxes)
  checkbox.onchange = characterFilter

/*..................................................... */


function characterFilter() {
  let checkedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked')

  for (let checkbox of charCheckboxes) {
    if (checkedCheckbox.length === 1) {
      checkedCheckbox[0].disabled = true
    }
    else {
      for (let i = 0; i < checkedCheckbox.length; i++)
        checkedCheckbox[i].disabled = false
    }
  }
}




function getPasswordLength() {
  passwordLength = rangeEl.value
  passwordLengthEl.textContent = passwordLength
  console.log(passwordLength)
}

function generateRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characterSet.length)
  return characterSet[randomChar]
}

function passwordGenerator() {
  let password = ""
  for (let i = 0; password.length < passwordLength; i++) {
    password += generateRandomCharacter()
  }
  return password
}

function generatePassword() {
  let checkedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked')
  characterSet = ''
  for (let i = 0; i < checkedCheckbox.length; i++) {
    if (checkedCheckbox[i].value === 'lower-case')
      characterSet += lowerCaseCharacters
    if (checkedCheckbox[i].value === 'upper-case')
      characterSet += upperCaseCharacters
    if (checkedCheckbox[i].value === 'numbers')
      characterSet += numbersCharacters
    if (checkedCheckbox[i].value === 'symbols')
      characterSet += symbolsCharacters

  }
  const password1 = passwordGenerator()
  const password2 = passwordGenerator()
  passwordEl1.textContent = password1
  passwordEl2.textContent = password2
  generateEl.textContent = "Refresh"
}
