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
    let size = 200 ;
    let limit = 20;

    //increment size with current framecount value
    if(frameCount < limit){
        size = size + frameCount;
    } else {
        size = size + limit;
    }

    //circle
    fill(237,34,93)
    ellipse(x,y,size,size)

    //rectangle
    fill(255);
    rect(x,y,size * 0.75 ,size * 0.15);

}