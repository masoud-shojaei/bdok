//file-name: generalize.js
class generalize {
    constructor() {
        this.availableItems = ['{}','[]','()']
        this.openCharacters = []
        this.closeCharacters = []
        this.init()
    }


    isCharacterExist(searchIn, characterForSearch) {
        let isCharacterExist;

        if (searchIn == "openCharacters") {
            console.log('isCharacterExist => opens')
            isCharacterExist = (this.openCharacters.indexOf(characterForSearch) > -1) ? true : false
        } else if (searchIn == "closeCharacters") {
            console.log('isCharacterExist => closes')
            isCharacterExist = (this.closeCharacters.indexOf(characterForSearch) > -1) ? true : false
        }

        return isCharacterExist;
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

