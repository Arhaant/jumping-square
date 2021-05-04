var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    box1 = createSprite(700,550,150,50)
    box1.shapeColor = "red" 
    box2 = createSprite(500,550,150,50)
    box2.shapeColor = "purple"
    box3 = createSprite(300,550,150,50)
    box3.shapeColor = "green"
    box4 = createSprite(100,550,150,50)
    box4.shapeColor = "blue"

    square = createSprite(400,300,50,50)

    square.velocityX = 1
    square.velocityY = 2



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites()
    square.bounceOff(edges)

    if(square.isTouching(box1)){
        square.shapeColor = box1.shapeColor;
        square.bounceOff(box1)
    }
    if(square.isTouching(box2)){
        square.shapeColor = box2.shapeColor;
        square.bounceOff(box2)
    }
    if(square.isTouching(box3)){
        square.shapeColor = box3.shapeColor;
        square.bounceOff(box3)
    }
    if(square.isTouching(box4)){
        square.shapeColor = box4.shapeColor;
        square.bounceOff(box4)
    }



    //add condition to check if box touching surface and make it box
    drawSprites()
}
