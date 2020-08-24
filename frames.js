//This function is ran only once
function setup(){
    //console.log('if you can read this then setup passed');
    createCanvas(400, 400);
   // noLoop() // makes draw func to be called once

   textAlign(CENTER,CENTER);
   frameRate(3);
    
}

//ran continously
function draw(){
    //shape(x,y,width,height)
    background(220);
    fill(237,34,93);
    textSize(36);
    //const fps =  parseInt(frameRate(), 10);
    text('text to print' + frameCount, width/2,height /2);
}

// frameCount is the number of times the draw function is executed throughout
// the lifetime of a Program.frameRate is the amount of times the
// draw function is executed in a second . If the frameRate for a program is
// 60, the frameCount after 3 seconds would be around 60*3 =180