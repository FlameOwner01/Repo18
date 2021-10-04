// Only change code above this line
var rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song" , "Angie"],
    ["album" , "Goats Head Soup"],
    ["singer", "Mick Jeger"],
]);
var newRock = new Map();
var keys = [...rockStar.keys()]
var value = [...rockStar.values()]

for (let i = 0; i< keys.length; i++) {
    if(!keys[i].includes("a")) {
        newRock.set(keys[i], value[i])
    }
}

console.log(newRock);

// Only change code above this line

module.exports = {rockStar, newRock}