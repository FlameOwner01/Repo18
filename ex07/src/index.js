// Only change code above this line
var numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5]
numberArray.sort(function(a,b){return a-b});
var uniqueArray = [];
uniqueArray.push(new Set(numberArray));

console.log(uniqueArray);
// Only change code above this line

module.exports = {numberArray, uniqueArray}