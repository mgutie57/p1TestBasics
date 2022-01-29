function setup(){

    createCanvas (windowWidth, windowHeight);

}

//bouncing circle properties
let x =120;
let y = 100;
let speedX = 5;
let speedY = 10;

//track where in the list we are
let counter = 1;
let direction = 1;


//this is a list of colors
clr0 = [0,90,0];
clr1 = [245,195,255];
clr2 = [195, 255, 195];


//list of lists
clrList = [clr0, clr1, clr2];


function draw (){
    console.log(counter);
    background (clrList[2]);
    // [__] indexing into lists


    fill (200, 30, 30);
    circle (x, y, 100);


    x = x + speedX;
    y = y + speedY;
    counter = counter + 1;

//==, comparing two values------- .length, javascript property of any list
//checkout resource on W3

    if ( counter == clrList.length - 1 || counter <= 0){
        direction = direction * -1;
    }


    if (x>= windowWidth || x <= 0 ) {
       x = speedX - (-1)*speedX;
    }

    if (y>= windowHeight || y <= 0 ) {
       y = speedY - (-1)*speedY;
    }


}