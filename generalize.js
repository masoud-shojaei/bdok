//file-name: generalize.js
class generalize {
    constructor() {
        this.availableItems = ['{}','[]','()']
        this.openCharacters = []
        this.closeCharacters = []
        this.init()
    }

    init() {
        this.availableItems.forEach((item) => {
            const openCharacter = item.slice(0,1)
            const closeCharacter = item.slice(1,2)

            this.openCharacters.push(openCharacter)
            this.closeCharacters.push(closeCharacter)
        })
    }
}