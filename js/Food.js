class Food{
    constructor() {
    this.image=loadImage("images/Milk.png")
    this.foodStock=0
    this.lastFed=0
    }
getFoodStock() {
return this.foodStock
}
updateFoodStock(foodStock) {
this.foodStock=foodStock
}
deductFood() {

}
display() {
    var x=80
    var y=100
    imageMode(CENTER)
    image(this.image,200,200,50,50)
    if(this.foodStock!==0) {
        console.log(this.foodStock)
        
        for(var i=0;i<this.foodStock;i++) {
            if(i%10===0) {
                x=80
                y=y+50
            }
            image(this.image,x,y,50,50)
            x=x+30
        }
    }
}
}