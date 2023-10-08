function matrixGenerator(matrixSize, grass,grassEater,predator,eaterEater, closed) {
        var matrix = []
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

let matrix = matrixGenerator(20, 17,7,4, 12, 12)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var EaterEaterArr = []
var ClosedArr = []

function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
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


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if(matrix[y][x] == 2){
                                fill ("yellow")
                        }else if(matrix[y][x] == 3){
                                fill ("red")
                        }else if(matrix[y][x] == 4){
                                fill ("blue")
                        }else if(matrix[y][x] == 5){
                                fill ("black")
                        }

                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)

                }
        }



                for (let i in grassArr) {
                        grassArr[i].mul()
                }


                for(let i in grassEaterArr){
                        grassEaterArr[i].eat()
                }

             

                // for(let i in predatorArr){
                //         predatorArr[i].eat()
                // }
 

                // for(let i in EaterEaterArr){
                //         EaterEaterArr[i].eat()
                // }
                // for(let i in ClosedArr){
                //         ClosedArr[i].mul()
                //         console.log(ClosedArr);
                        
                // }
 

}










