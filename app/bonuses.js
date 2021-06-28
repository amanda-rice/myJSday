//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let rplcIndex = str.indexOf(' ') + 1
  let upperCase = str.charAt(rplcIndex)
  let newStr = str.substr(0, rplcIndex) + upperCase.toUpperCase() + str.substr(rplcIndex + 1)
  newStr = newStr.split(' ').join('')
  return newStr
}
