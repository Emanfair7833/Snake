export class Score{
    constructor(eventhandler,scoreField){
        this.score=0
        this.events=eventhandler
        this.scoreField=scoreField
        this.events.subscribe('foodHit', (data)=>this.updateScore(data))



    }
    updateScore(data){
        this.score +=1
        this.scoreField.innerText = `SCORE: ${this.score}`
       console.log(this.scoreField)


    }

}