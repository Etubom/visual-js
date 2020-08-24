//This function is ran only once
function setup(){
    createCanvas(800, 400);
}

//ran continously
function draw(){
    background(220);
    //shape(x,y,width,height)
 const x = 50;
    ellipse(100 + x,200,50,50);//left wheel
    ellipse(200 + x,200,50,50);//right wheel
    rect(50 + x,160,200,20); //cart body
}