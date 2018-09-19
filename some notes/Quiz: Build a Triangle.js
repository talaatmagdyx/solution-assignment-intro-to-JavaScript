
function startLine(length) {
    let line = "";
    for (let i = 0; i<length; i++){
        line += '*';
    }
    return line + '\n'
}

function triangle(width){
    var triangle = "" ;
    for (let x = 1; x<=width; x++){
        triangle +=startLine(x);
    }
    return triangle
}
console.log(triangle(10));