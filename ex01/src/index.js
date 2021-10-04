var myArr = [];
// Only change code below this line
function* multiplication(x){
    let y = x;
    for(let i = 0; i < x; i++){
        
        y  *= 2;
        yield y;
        myArr.push(y);
    }
    return myArr;
}

var num = multiplication(3);

   
for (let element of num) {   
    
    console.log(num.next());
    
}

// Only chamge code above this line
module.exports = multiplication;