const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48)
}
const getRandomSymbol = () => {
    const symbols = "!?@*%&$"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunctions = {
    getRandomLower,
    getRandomNumber,
    getRandomSymbol,
    getRandomUpper
}

const generatePassword = () => {
    const length = 16
    let generatedPassword = ""
    for (let x = 0; x < length; x++)
        generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 4)]()

    return generatedPassword
}

const spanResult = document.getElementById("result")
const clipboardButton = document.getElementById("clipboard")
const generateButton = document.getElementById("generate")

generateButton.addEventListener("click", () => {
    spanResult.innerText = generatePassword()

})

clipboardButton.addEventListener("click", () => {
    const password = spanResult.innerText
    if (!password)
        return

    const textarea = document.createElement("textarea")
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("copied")

})