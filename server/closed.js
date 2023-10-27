
let LivingCreature = require('./LivingCreature')

module.exports =class Closed extends LivingCreature{
    


    mul(){
         this.multiply++

       
         this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y    ],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x    , this.y + 2],
            [this.x - 1, this.y + 2],
        ];

        
          let emptyCell = this.chooseCell()
          let newCell =  random(emptyCell)
      
          if(newCell && this.multiply >= 5){
                     let newX  =   newCell[0]
                     let newY  =   newCell[1]

                     matrix[newY][newX] = 5

                     let closed = new Closed(newX,newY)
                     ClosedArr.push(closed)


                     this.multiply = 0


          }
          
    }



}


 



