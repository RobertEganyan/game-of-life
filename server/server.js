var express = require("express");
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});



let Grass = require('./grass')
let EaterEater = require('./EaterEater')
let GrassEater = require('./grassEater')
let Predator = require('./predator')
let Closed = require('./closed')














 grassArr = []
 grassEaterArr = []
 predatorArr = []
 EaterEaterArr = []
 ClosedArr = []

io.on('connection', function (socket) {

    socket.emit("mymatrix", matrix);


    // socket.on("send message", function (data) {
    // messages.push(data);
    // io.sockets.emit("display message", data);

    // });

});




matrix = matrixGenerator(20, 17,7,4, 12, 12)
function matrixGenerator(matrixSize, grass,grassEater,predator,eaterEater, closed) {
 
let matrix = []
    ////  matrix սարքելու հատված
    for (let i = 0; i < matrixSize; i++) {
            matrix.push([])
            for (let j = 0; j < matrixSize; j++) {
                    matrix[i].push(0)
            }
    }

    // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
    for (let i = 0; i < grass; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 1
    }
     //GrassEater 2

     for (let i = 0; i < grassEater; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 2
    }
    //3 predator


    for (let i = 0; i < predator; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 3
    }
    // 4

    for (let i = 0; i < eaterEater; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 4
    }

    //5
    for (let i = 0; i < closed; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 5
    }

   
   
    return matrix
}




crObj()
console.log(matrix)



function crObj()  {


               
                for (let y = 0; y < matrix.length; y++) {
                        for (let x = 0; x < matrix[y].length; x++) {
                                if (matrix[y][x] == 1) {
                                        let grass = new Grass(x, y)
        
                                        grassArr.push(grass)
        
        
                                } else if(matrix[y][x] == 2){
                                     let grEat = new  GrassEater(x,y)
                                     grassEaterArr.push(grEat)
                                }else if(matrix[y][x] ==  3){
                                     let pre = new Predator(x,y)
                                     predatorArr.push(pre)
                                }else if(matrix[y][x] ==  4){
                                        let eat = new EaterEater(x,y)
                                        EaterEaterArr.push(eat)
                                }else if(matrix[y][x] ==  5){
                                        let clsd = new Closed(x,y)
                                        ClosedArr.push(clsd)
                                }
        
        
        
                        }
                }
        
        } 






function start() {

        for (let i in grassArr) {
                grassArr[i].mul()
        }


        for(let i in grassEaterArr){
                grassEaterArr[i].eat()
        }

     

        for(let i in predatorArr){
                predatorArr[i].eat()
        }
        console.log("-------")
        io.sockets.emit("mymatrix", matrix);
}



setInterval(start,1000 )




