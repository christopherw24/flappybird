// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(700, 400, Phaser.AUTO, 'game', stateActions);

/*
 * Loads all resources for the game and gives them names.
 */

var score;
var player;



function preload() {

game.load.image("playerIMG", "assets/jamesBond.gif");
game.load.image("playerIMG2", "assets/flappy.png");
game.load.audio("score", "assets/point.ogg");
game.load.image("pipe", "assets/pipe_blue.png");
game.load.image("pipe2", "assets/pipe_pink.png")
}

function clickHandler (mouse) {   //kannst statt clickhandler auch anders nennen
    //game.add.sprite(event.x, event.y,"playerIMG2");} überall wost hinklickst kommt viecherl
    player.x = mouse.x;
    player.y = mouse.y;
}

function moveLeft() {
    player.x-- ;
}

function moveRight() {
    player.x++;
}

function moveUp() {
    player.y--;
}

function moveDown() {
    player.y++;
}







function spaceHandler () {
    game.sound.play("score");
}


/*
 * Initialises the game. This function is only called once.
 */
function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    // set the background colour of the scene
    game.stage.setBackgroundColor("#98BAAC"); //the official cambridge blue colour
    game.add.text(180, 180, //text position, coordinates
       "Cambridge Blue - GDBO",//text body
        { font: "30px Arial", //text font
            fill:"#FFFFFF"} //text colour
    );
    game.add.sprite(0,0,"playerIMG");
    game.add.sprite(670,0,"playerIMG");
    game.add.sprite(0,360,"playerIMG");
    game.add.sprite(670,360,"playerIMG");
    game.input.onDown.add(clickHandler);

    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    game.add.audio("score");
    score=0;
    //alert (score);
    score= score + 1;
    //alert (score);
    game.add.text(10, 40, score);

    var x= 200;
    var y=200;
    player=game.add.sprite(x, y, "playerIMG2");
    player.x= 300;

    game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);


    var hole = Math.floor(Math.random()*5)+1;   //random number between 1 and 5 included
    var hole2 = Math.floor(Math.random()*4)+1;

    for(var count=0; count <hole; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
            game.add.sprite(0,50*count,"pipe");}


    for(var count=hole+3; count < 8; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
            game.add.sprite(0,50*count,"pipe");}


    for(var count=0; count <hole; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        game.add.sprite(150,50*count,"pipe");}


    for(var count=hole+4; count < 8; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        game.add.sprite(150,50*count,"pipe");}


    for(var count=0; count <hole2; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        game.add.sprite(350,50*count,"pipe");}


    for(var count=hole2+3; count < 8; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        game.add.sprite(350,50*count,"pipe");}

    for(var count=0; count <hole2; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        game.add.sprite(550,50*count,"pipe");}


    for(var count=hole2+4; count < 8; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        game.add.sprite(550,50*count,"pipe");}


/*for(var count=0; count <=7; count++) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
    //game.add.text(20,20*count,"space" );
    game.add.sprite(20,50*count,"pipe");}*/

    /*for(var count=2; count <=10; count+=2) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        //game.add.text(20,20*count,"space" );
        game.add.sprite(50*count,200,"pipe");}
*/
    /*for(var count=0; count <=7; count++) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        //game.add.text(20,20*count,"space" );
        game.add.sprite(150,50*count,"pipe");}

/*for(var count=0; count <=14; count++) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        //game.add.text(20,20*count,"space" );
        game.add.sprite(50*count,0,"pipe");
    game.add.sprite(50*count,50,"pipe2");
    }*/
  /* var right_key = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    right_key.onDown.add(moveRight);
    var left_key = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        left_key.onDown.add(moveLeft);
    var up_key = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    up_key.onDown.add(moveRight);
    var down_key = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        down_key.onDown.add(moveDown);
*/

}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

}
