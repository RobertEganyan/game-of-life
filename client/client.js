var socket = io();


socket.on("mymatrix", handleMatrix)


function setup() {
    createCanvas(side,side);
    bacground('#acacac')
}
let s = 400
function setup(){
    createCanvas(s,s)
}


function handleMatrix(matrix){
    console.log("-----")
    for (var y = 0; y < matrix.length; y++) { // cl
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("brown")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }

            rect(x * s/matrix.length, y * s/matrix.length, s/matrix.length, s/matrix.length);
        }
}
}

















