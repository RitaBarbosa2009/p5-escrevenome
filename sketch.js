function setup() {
    createCanvas(600, 600);
    background("blanck");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
  
   if(mouseIsPressed){
     rect(mouseX, mouseY,20,35);
   }
    
  }