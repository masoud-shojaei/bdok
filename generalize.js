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
            const openCharacterData = this.dataExtractor('openCharacters', char)
            const closeCharacterData = this.dataExtractor('closeCharacters', char)

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

    dataExtractor (searchIn, searchableCharacter) {
        let data = {};

        if (searchIn == "openCharacters") {
            this.openCharacters.forEach((obj) => {
                const { character, name } = obj

                if (searchableCharacter == character) {
                    data.isExist = true
                    data.category = name
                    data.openCharacter = character

                    return false
                }
            })
        }

        else if (searchIn == "closeCharacters") {
            this.closeCharacters.forEach((obj) => {
                const { character, name } = obj

                if (searchableCharacter == character) {
                    data.isExist = true
                    data.category = name
                    data.closeCharacter = character

                    return false
                }
            })
        }

        return data;
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

