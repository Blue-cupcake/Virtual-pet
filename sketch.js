var dog,sadDog,happyDog;
var feed;
var addFood;
var foodStock;
var milkImage

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImage=loadImage("Images/Milk.png");

}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  

}

function draw() {
  background(46,139,87);
  drawSprites();

  

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food")
  addFood.position(620,95);
  addFood.mousePressed(addMilk);



}


function feedDog(){
  dog.addImage(happyDog);


  

  

  

}

function addMilk(){

}
//function to add food in stock
