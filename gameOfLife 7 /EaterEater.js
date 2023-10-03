 


 // Այս կերպարը ուտում է խոտակերներին և գիշատիչներին բայց չի ուտում խոտ(grass):

 // գույնը` սպիտակ







class EaterEater{
    constructor(x,y){
        this.x = x
        this.y = y
        this.energy = 13
        this.directions = [ ];
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char1) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
        }


        return found

    }

     mul(){
         let emptyCell = this.chooseCell(0)
         let newCell = random(emptyCell)

            if(newCell){
                 let newX = newCell[0]
                 let newY = newCell[1]

                 matrix[newY][newX]  = 4

                 let Eat = new EaterEater(newX,newY)

                 EaterEaterArr.push(Eat)


            }
     }


     eat(){
        let emptyCell = this.chooseCell(2,3)
        let newCell = random(emptyCell)

           if(newCell ){
               this.energy += 6
            let newX = newCell[0]
            let newY = newCell[1]

                   for(let i in grassEaterArr){
                            if(newX == grassEaterArr[i].x  && newY == grassEaterArr[i].y){
                                      grassEaterArr.splice(i,1)
                            }
                   }



                   for (let i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1)
                    }
                }


                   matrix[newY][newX] = 4
                   matrix[this.y][this.x] = 0


                   this.x = newX
                   this.y = newY

                   if(this.energy > 40){
                        this.mul()
                   }

           }else{
               this.move()
           }
     }

     move(){
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

            if(newCell){
                let newX = newCell[0]
                let newY = newCell[1]

                matrix[newY][newX] = 4
                matrix[this.y][this.x] = 0
                
                this.x = newX
                this.y = newY

                this.energy--

                if(this.energy < 0){
                    this.die ()
                }
            }
     }


     die(){
         matrix[this.y][this.x] = 0

           for(let i in EaterEaterArr){
                    if(this.x == EaterEaterArr[i].x && this.y == EaterEaterArr[i].y) {
                              EaterEaterArr.splice(i,1)
                    }
           }
     }


}










