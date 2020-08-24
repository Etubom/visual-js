//This function is ran only once
function setup(){
    createCanvas(800, 400);
}

//ran continously
function draw(){
    background(220);
    //Stroke sets the stroke(outline) color of the shapes
    //stroke weight lets us define thickness of outline
    // Fill sets the fill(interior) color of the shapes

    //circle 01
    fill(51);
    strokeWeight(2)
    stroke(75)
    ellipse(400,200,300,300)

     //circle 02
     fill(51);
     stroke(0)
     ellipse(400,200,275,275)
 
       //circle 03
       fill(1,176,240);
       ellipse(400,200,250,250)

        //circle 04
        fill(174,238,0);
        ellipse(400,200,150,150)

}