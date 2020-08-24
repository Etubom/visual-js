//This function is ran only once
// const canvasWidth = 800; [ to avoid creating our variables globally we can use p5js in-built func]
// const canvasHeight = 300;
let count = 0;
function setup(){
    createCanvas(800, 300);
    rectMode(CENTER);
}

//ran continously
function draw(){
    background(1,186,240);
    //shape(x,y,width,height)

    const x = width / 2 ;
    const y = height / 2;
    let size = 200 + count;

    //circle
    fill(237,34,93)
    noStroke(); //lib method that removes line stroke
    ellipse(x,y,size,size)

    //rectangle
    fill(255);
    rect(x,y,size * 0.15 ,size * 0.16);

    count = count + 1;
}