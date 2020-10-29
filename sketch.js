var mr,fr




function setup() {
  createCanvas(1200,600);
 fr= createSprite(600, 400, 50, 50);
 fr.shapeColor = "green"
 fr.debug = true;
 mr= createSprite(400,200,80,30);
 mr.shapeColour = "green"
 mr.debug = true;
}

function draw() {
  background(0);
  mr.x = World.mouseX
  mr.y = World.mouseY
  if(mr.x-fr.x<fr.width/2+mr.width/2
    && fr.x-mr.x<fr.width/2+mr.width/2){
    mr.shapeColor = "red"
    fr.shapeColor = "red"
    }
else{
mr.shapeColor = "green"
fr.shapeColor = "green"
}
  drawSprites();
}