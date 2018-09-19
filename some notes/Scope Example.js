
// global scope
let var0 = "you use global variable";
function functionOne() {
    let var1 = "you use functionOne variable";
    function functiontwo(){
        let var2 = "you use functionTwo variable";
        //in the function can access three variable
        console.log(var0);
        console.log(var1);
        console.log(var2);
    }
    //in the function can access two variable
    console.log(var0);
    console.log(var1);
}
//in the function can access one variable
console.log(var0);
