/*
|--------------------------------------------------------------------------
| Usage
|--------------------------------------------------------------------------
|
| Create new instance of ActionRunner, then invoke start method.
| ex:
|   const actionRunnerInstance = new ActionRunner()
|   const result = actionRunnerInstance.start("-2 5 D + R")
|   console.log(result)
*/


//file-name: action-runner.js
export default class ActionRunner {
    start(actions) {
        let customArr = []
        let finalNumber = 0
        const arrayOfActions = actions.split(" ")

        arrayOfActions.forEach((action) => {
            if (this.checkInteger(action)) {
                customArr.push(action)
            }

            else if(action == "D") {
                const lastItem = Number(customArr[customArr.length - 1])

                customArr.push((lastItem*2 + ""))
            }

            else if(action == "+") {
                const customArrLength = customArr.length
                let sum = Number(customArr[customArrLength - 1]) + Number(customArr[customArrLength - 2]) + ""
                customArr.push(sum)
            }

            else if(action == "R") {
                const removeItem = customArr.pop()
            }

        })

        customArr.forEach( (item) => {
            finalNumber += Number(item)
        })

        return finalNumber
    }

    checkInteger(item) {
        const rawItem = Number(item)

        return  Number.isInteger(rawItem)
    }
}