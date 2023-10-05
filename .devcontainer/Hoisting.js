var c = 34;
let a = "global"

if(true){
    let a = "block";
    const b = "const";
    var c = "var"
    console.log("innerblock : ", a);
}
console.log(a);
//console.log(b);
console.log(c);

function details(){ // this is called closure because child can use parent variable but parent can't
    let name = "zoho";
    function info(){
        let age = 25;
        console.log(name);
    }
    // console.log(age); --> error
    info();
}

details();

numOne(9) // not error
function numOne(num){
    return num+1;
}

/// numTwo(4) but this is an error and this is called hoisting
let numTwo = function (num){
    return num+2;
}