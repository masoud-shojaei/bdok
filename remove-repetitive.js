/*
|--------------------------------------------------------------------------
| Usage
|--------------------------------------------------------------------------
|
| Invoke RemoveRepetitive method, then pass the string
| ex:
|   RemoveRepetitive("aaaaaaaaaaaaaaabbbbbbbbbbbbzzzzzzzzzzzz")
*/


//file-name: remove-repetitive.js
function RemoveRepetitive(str) {
    let rawString = str
    let normalizeString = Array.from(new Set(rawString)).toString().replaceAll(",","");

    return normalizeString
}
