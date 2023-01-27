//file-name: generalize.js
class generalize {
    constructor() {
        this.availableItems = [{"name":"parentheses", "characters":"()"}, {"name":"brackets", "characters":"[]"}, {"name":"brace", "characters":"{}"}]
        this.openCharacters = []
        this.closeCharacters = []
        this.init()
    }

    isBalance(str) {
        const arrayOfCharacters = [...str]
        let nonCloseItems = []

        arrayOfCharacters.forEach((char) => {
            const openCharacterData = this.isCharacterExist('openCharacters', char)
            const closeCharacterData = this.isCharacterExist('closeCharacters', char)

            if (openCharacterData.isExist) {
                nonCloseItems.push(openCharacterData)
            }

            else if (closeCharacterData.isExist) {
                const { category } = closeCharacterData
                const lastNonCloseItem = nonCloseItems[nonCloseItems.length - 1]

                if (lastNonCloseItem && lastNonCloseItem.category ==  category) {
                    nonCloseItems.pop()
                } else {
                    nonCloseItems.push("@")
                }
            }
        })

        return nonCloseItems.length ? false : true
    }

    isCharacterExist (searchIn, searchableCharacter) {
        let response = {};

        if (searchIn == "openCharacters") {
            this.openCharacters.forEach((obj) => {
                const { character, name } = obj

                if (searchableCharacter == character) {
                    response.isExist = true
                    response.category = name
                    response.openCharacter = character

                    return false
                }
            })
        }

        else if (searchIn == "closeCharacters") {
            this.closeCharacters.forEach((obj) => {
                const { character, name } = obj

                if (searchableCharacter == character) {
                    response.isExist = true
                    response.category = name
                    response.closeCharacter = character

                    return false
                }
            })
        }

        return response;
    }

    init() {
        this.availableItems.forEach((item) => {
            const openCharacterObj = {}
            const closeCharacterObj = {}

            openCharacterObj.name = item.name
            openCharacterObj.character = item.characters.slice(0,1)

            closeCharacterObj.name = item.name
            closeCharacterObj.character = item.characters.slice(1,2)

            this.openCharacters.push(openCharacterObj)
            this.closeCharacters.push(closeCharacterObj)
        })
    }

}

