/*
|--------------------------------------------------------------------------
| Usage
|--------------------------------------------------------------------------
|
| Invoke RemoveRepetitive method, then pass the string
| ex:
|   removeRepetitive("aaaaaaaaaaaaaaabbbbbbbbbbbbzzzzzzzzzzzz")
*/


//file-name: remove-repetitive.js
export  default function removeRepetitive(str) {
    let rawString = str
    let normalizeString = Array.from(new Set(rawString)).toString().replaceAll(",","");

    return normalizeString
}
