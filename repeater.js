//file-name: repeater
 class repeater {
    constructor() {
        this.repeatCount = []
        this.init()
    }

    init() {
        for (let i = 1; i <= 9; i++) {
            let obj = {}

            obj.number = i
            obj.repetitions = 0
            this.repeatCount.push(obj)
        }
    }

    getRepeatedInfo(number) {
        let responseObj = {}
        let convertToString = String(number)
        const arrayOfNumbers = [...convertToString]

        arrayOfNumbers.forEach((number) => {
            let shouldRepeat = this.getRepetionCount(number)

            if (shouldRepeat >= 1) {
                responseObj[number] = this.numberRepeater(number, shouldRepeat)

                return false
            }

            responseObj[number] = this.numberRepeater(number)
        })

        return responseObj
    }

     setRepetionCount(number) {
         this.repeatCount.forEach((item) => {
             if (item.number == number) {
                 item.repetitions++
             }
         })
     }

     getRepetionCount(number) {
         const findedItem = this.repeatCount.find((item) => item.number == number)
         return findedItem.repetitions
     }

    numberRepeater(number, shoudRepeat) {
        const baseRepeat = String(number)
        let count = Number(number)
        let res = baseRepeat

        if (shoudRepeat) {
            for (let i = 0; i < shoudRepeat; i++) {
                count += Number(number)
            }
        }

        for (let i = 0; i < count - 1; i++) {
            res += number
        }

        this.setRepetionCount(number)
        return res
    }
}

const test = new repeater()
console.log('finila obj', test.getRepeatedInfo(123444))