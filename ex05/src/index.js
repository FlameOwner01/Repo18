// Only change code below this line
let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);
var arrKey = [];
for(let keys of shoppingList){
    arrKey.push(`${keys[0]}`)
}
for(let i = 0; i < arrKey.length; i++){
    console.log("groceries: " + arrKey[i]);
}

var arrValue = [];
for(let key of shoppingList){
    arrValue.push(`${key[1]}`)
}
for(let j = 0; j < arrValue.length; j++){
    console.log("amount: " + arrValue[j]);
}
for(let item of shoppingList){
    console.log(
    "[ " + `${item[0]}` + " , " +`${item[1]}` + " ]"
    );
}
// Only change code above this line


module.exports = { shoppingList, arrKey, arrValue};