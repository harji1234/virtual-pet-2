//Create variables here
var dog,dogImg, happyDog, database, foodS, foodStock
var fedTime, lastFed
var foodObject
function preload(){
 dogImg=loadImage("images/dogImg1.png")
 happyDog=loadImage("images/dogImg.png")


}

  
	//load images here


function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  foodObject=new Food()
  dog=createSprite(250,400,10,10)
  dog.addImage(dogImg)
  dog.scale=.3
  var ref = database.ref('food');
  ref.on("value",readStock)
  feed=createButton("feed the dog")
  feed.position(450,50)
  feed.mousePressed(feeddog)
  fedTime=database.ref('FeedTime')
fedTime.on("value",function(data){
  lastFed=data.val()
})
add=createButton("add")
add.position(550,50)
add.mousePressed(addfood)
}

function draw() {  
  background(46, 139, 87)
  drawSprites();
  //textSize(20)
  //text("press up arrow key to feed the dog",130,20)
  //add styles here
  foodObject.display()
 
}
function readStock(data){
  foodS=data.val();
  foodObject.updateFoodStock(foodS)
}

function writeStock(x) {
if(x<0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    food:x
  })
}
function feeddog() {
  dog.addImage(happyDog);
  writeStock(foodS);
}
function addfood() {
foodS++
database.ref('/').update({
  food:foodS
}) 


}

