// Only change code below this line
let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

let unionSet = new Set();
for (const i of one) {
    unionSet.add(i);
}
for (const i of two) {
    unionSet.add(i);
}


let intersectionSet = new Set();
for(let i of one){
    for (const j of two) {
        if (i == j){
            intersectionSet.add(i);
        }
    }
}

let differenceSet = new Set();

for(let i of one){
    if(!two.has(i)) differenceSet.add(i);
}

console.log(differenceSet);
console.log(intersectionSet);
console.log(unionSet);
// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet}