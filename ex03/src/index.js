// Only change code below this line
function* myGenerator(){
    var myArr = [1, 2, 3, 4, 5];
    yield* myArr;
    yield* 'Arena';
    yield* arguments;
}
var iterator = myGenerator(6,7,8);
var generatorArray = [];
for(var item of iterator){
    generatorArray.push(item)
} 
for(let i = 0; i<generatorArray.length; i++){
    console.log(generatorArray[i]);
}
// Only change code above this line
module.exports = { generatorArray, myGenerator}