
//file-name: encoder.js
class  encoder{
    constructor() {
    }

    getEncode(rawString, countOfEncode) {
        const firstStepOfEncode = this.letterTransfer(rawString)
        console.log("firstStepOfEncode", firstStepOfEncode)
    }

    letterTransfer(stringForTransfer) {
        let arrayOfLetters = [...stringForTransfer]
        const lastItem = arrayOfLetters.pop()

        arrayOfLetters.unshift(lastItem)
        return arrayOfLetters
    }
}

const test = new encoder
test.getEncode("abz")