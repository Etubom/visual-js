//This function is ran only once
function setup(){
    //console.log('if you can read this then setup passed');
    createCanvas(800, 400);
    rectMode(CENTER);
}

//ran continously
function draw(){
    background(255,0,0);
    //shape(x,y,width,height)
    rect(30, 20, 55, 55); //use color picker online for colors
}