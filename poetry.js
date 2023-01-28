class Poetry {
    constructor() {
        this.poets = [
            "به لاله نرگس مخمور گفت وقت سحر - که هر که در صف باغ است صاحب هنریست",
            "ای خوشا مستانه سر در پای دلبر داشتن - دل تهی از خوب و زشت چرخ اخضر داشتن",
            "کبوتر بچه‌ای با شوق پرواز - بجرئت کرد روزی بال و پر باز",
            "جهاندیده کشاورزی بدشتی - بعمری داشتی زرعی و کشتی",
            "شنیده‌اید که آسایش بزرگان چیست: - برای خاطر بیچارگان نیاسودن",
            "وقت سحر، به آینه‌ای گفت شانه‌ای - کاوخ! فلک چه کجرو و گیتی چه تند خوست",
            "مرغی نهاد روی بباغی ز خرمنی - ناگاه دید دانهٔ لعلی به روزنی",
            "روزی گذشت پادشهی از گذرگهی - فریاد شوق بر سر هر کوی و بام خاست",
            "تا بکی جان کندن اندر آفتاب ای رنجبر - ریختن از بهر نان از چهر آب ای رنجبر",
            "عالمی طعنه زد به نادانی - که بهر موی من دو صد هنر است",
            "خمید نرگس پژمرده‌ای ز انده و شرم - چو دید جلوهٔ گلهای بوستانی را",
            "دید موری در رهی پیلی سترگ - گفت باید بود چون پیلان بزرگ",
            " ز سری، موی سپیدی روئید - خنده‌ها کرد بر او موی سیاه",
            "نهال تازه رسی گفت با درختی خشک - که از چه روی، ترا هیچ برگ و باری نیست",
            "گفت تیری با کمان، روز نبرد - کاین ستمکاری تو کردی، کس نکرد",
        ]
    }

    start(poem) {
        const lastLetterOfInputPoem = this.getLastIndexOfPoem(poem)
        console.log(lastLetterOfInputPoem)
    }

    convertArrayToString(arr) {
        const str = arr.toString().replaceAll(",","")

        return str
    }

    convertStringToArray(string) {
        const arr = [...string]

        return arr
    }

    getLastIndexOfPoem(poem) {
        const preparePoet = this.getTrim(poem)
        const arrayOfLettrs = this.convertStringToArray(preparePoet)
        const lastLetterOfThePoem = arrayOfLettrs[arrayOfLettrs.length - 1]

        return lastLetterOfThePoem
    }

    getFirstIndexOfPoem(poem) {
        const preparePoet = this.getTrim(poem)
        const arrayOfLettrs = this.convertStringToArray(preparePoet)
        const FirstLetterOfThePoem = arrayOfLettrs[0]

        return FirstLetterOfThePoem
    }

    getTrim(string) {
        let finalString = string.trim()

        return finalString
    }
}

const test = new Poetry()
test.start("   دختری خرد، شکایت سر کرد - که مرا حادثه بی مادر کرد   ")