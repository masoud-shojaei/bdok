//file-name: encoder.js
export default class encoder{
    constructor() {
        this.alphabet = "abcdefghijklmnopqrstuvwxyz"
    }

    getEncode(rawString, countOfEncode = 1) {
        const firstStepOfEncode = this.letterTransfer(rawString)
        let encodedString = null

        for (let i = 1; i<=countOfEncode; i++) {
            if (i==1) {
                encodedString = this.encodeTheString(firstStepOfEncode)
            } else {
                encodedString = this.encodeTheString(encodedString)
            }
        }

        return encodedString;
    }

    encodeTheString(stringToEncode) {
        let encodedArr = []
        let arrayOfLetters = this.convertStringToArray(stringToEncode)

        arrayOfLetters.forEach((letter) => {
            const CurrentLetterIndex = this.alphabet.indexOf(String(letter))
            const nextLetterIndex = (CurrentLetterIndex == 25) ? 0 : CurrentLetterIndex + 1
            const nextLetter = this.alphabet[nextLetterIndex]

            encodedArr.push(nextLetter)
        })

        return this.convertArrayToString(encodedArr)
    }

    convertArrayToString(arr) {
        const str = arr.toString().replaceAll(",","")

        return str
    }

    convertStringToArray(string) {
        const arr = [...string]

        return arr
    }

    letterTransfer(stringForTransfer) {
        let arrayOfLetters = this.convertStringToArray(stringForTransfer)
        const lastItem = arrayOfLetters.pop()

        arrayOfLetters.unshift(lastItem)
        return this.convertArrayToString(arrayOfLetters)
    }
}
