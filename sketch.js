function setup() {
    createCanvas(1200,1200);
    background(244,248,253);
}

function draw() {
    noStroke();

    fill(18,27,32);
    quad(46, 43, 1140, 69, 1123,1136, 39,1121);


    fill(239,225,202);
    triangle(50,45, 1138,69,783,560);//TOP
    triangle(1134,75,1127,795,626,795);//RIGHT
    triangle(44,393,533,386,36,1121);//LEFT
    triangle(376,627,1113,1135,42,1124);//BOTTOM

}

