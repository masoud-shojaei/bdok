/*
|--------------------------------------------------------------------------
| Usage
|--------------------------------------------------------------------------
|
| Create new instance of repeater, then invoke getRepetitionObj method.
| ex:
|   const repeaterInstance = new repeater()
|   const result = repeaterInstance.getRepetitionObj("1234445")
|   console.log(result)
*/


//file-name: repeater.js
 class repeater {
    constructor() {
        this.repetitionsList = []
        this.init()
    }

    getRepetitionObj(numbers) {
         let finalResult = {}
         const arrayOfNumbers = [...String(numbers)]

         arrayOfNumbers.forEach((number) => {
             const repetitionOfCurrentNumber = this.getRepetitionCount(number)

             if (repetitionOfCurrentNumber >= 1) {
                 finalResult[number] = this.numbersRepetitionHandler(number, repetitionOfCurrentNumber)

                 return false
             }

             finalResult[number] = this.numbersRepetitionHandler(number)
         })

         return finalResult
     }

    numbersRepetitionHandler(currentNumber, additionalRepetition) {
         const baseNumber = String(currentNumber)
         let loopLength = Number(currentNumber)
         let result = baseNumber

         if (additionalRepetition) {
             for (let i = 0; i < additionalRepetition; i++) {
                 loopLength += Number(currentNumber)
             }
         }

         for (let i = 0; i < loopLength - 1; i++) {
             result += baseNumber
         }

         this.setRepetitionCount(currentNumber)
         return result
     }

    setRepetitionCount(currentNumber) {
         this.repetitionsList.forEach((item) => {
             if (item.number == currentNumber) {
                 item.repetitions++
             }
         })
     }

    getRepetitionCount(currentNumber) {
         const targetItem = this.repetitionsList.find((item) => item.number == currentNumber)

         return targetItem.repetitions
     }

    init() {
         for (let i = 1; i <= 9; i++) {
             let obj = {}

             obj.number = i
             obj.repetitions = 0
             this.repetitionsList.push(obj)
         }
     }
}