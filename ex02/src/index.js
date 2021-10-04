// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
var x = [];
function* insideGenerator1() {
    for (let i = 1; i < 6; i++) {
        yield x.push(i);
    }

}

function* insideGenerator2() {
    
    for (let i = 10; i < 16; i++) {
        yield x.push(i);
    }

}

function* insideGenerator3() {
    for (let i = 6; i < 10; i++) {
        yield x.push(i);
    }
}
var iterator = myGenerator();
var fifteenArray = [];

for(let item in iterator){
    console.log(item);
    fifteenArray.push(itrator.next())
}
for(let i = 0; i < fifteenArray.length; i++){
    console.log(fifteenArray[i]);
}

// Only chamge code above this line
module.exports = {
    fifteenArray,
    myGenerator
};