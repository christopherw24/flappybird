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


var player;
var game_width = 700;
var game_height = 400;
var pipes;
var score=0;
var label_score;

function preload() {

game.load.image("playerIMG", "assets/jamesBond.gif");
game.load.image("playerIMG2", "assets/flappy.png");
game.load.audio("score", "assets/point.ogg");
game.load.image("pipe", "assets/pipe_blue.png");
game.load.image("pipe2", "assets/pipe_pink.png")
}

/*function clickHandler (mouse) {   //kannst statt clickhandler auch anders nennen
    //game.add.sprite(event.x, event.y,"playerIMG2");} überall wost hinklickst kommt viecherl
    player.x = mouse.x;
    player.y = mouse.y;
}
*/
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
    player.body.velocity.y =-200;}

//create bird zum schluss hat zur folge es is ganz vorne
/*
 * Initialises the game. This function is only called once.
 */
function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);   //ARCADE is eine der game engines, gibt ninja und p2rs
    // set the background colour of the scene
player = game.add.sprite(game_width/2, game_height/2, "playerIMG2");
    player.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(player);
    player.checkWorldBounds = true;



    game.stage.setBackgroundColor("#98BAAC"); //the official cambridge blue colour
    game.add.text(180, 180, //text position, coordinates
       "Cambridge Blue - GDBO",//text body
        { font: "30px Arial", //text font
            fill:"#FFFFFF"} //text colour
    );
    //game.add.sprite(0,0,"playerIMG");
    //game.add.sprite(670,0,"playerIMG");
    //game.add.sprite(0,360,"playerIMG");
    //game.add.sprite(670,360,"playerIMG");
    //game.input.onDown.add(clickHandler);

    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);
    game.add.audio("score");
    score=0;
    //alert (score);
    //score= score + 1;
    //alert (score);
    //game.add.text(10, 40, score);

    var x= 50;
    var y=100;
    player=game.add.sprite(x, y, "playerIMG2");
    player.x= 300;
    player.y= 100


    game.physics.arcade.enable(player)
    player.body.gravity.y = 400; // gravity
    player.body.velocity.y= -200; // velocity


    game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(moveRight);
    game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(moveLeft);
    game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(moveUp);
    game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(moveDown);



game.time.events.loop(1.75 * Phaser.Timer.SECOND, generate_pipes);  //1.75 seconds
pipes= game.add.group();



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

    label_score= game.add.text (20, 20, "0", {font: "30px Arial", fill: "#ffffff"});

}

/*
 * This function updates the scene. It is called for every new frame.
 */

//function player_jump() {player.body.velocity.y =-600;}   // the smaller the number the higher it jumps
// jetzt brauchst net immer alles neu schrein

function add_pipe_part (x, y, pipe_part) {
    var pipe= pipes.create(x,y, pipe_part);
game.physics.arcade.enable(pipe);
pipe.body.velocity.x = -200;
}

//create group pipes containing pipe pieces that player can interact with and create new pipe part in pipes group


function generate_pipes() {
    var hole = Math.floor(Math.random()*5)+1;   //random number between 1 and 5 included
    //var hole2 = Math.floor(Math.random()*4)+1;

    for(var count=0; count <hole; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        add_pipe_part(900,50*count,"pipe");}


    for(var count=hole+3; count < 8; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
        add_pipe_part(900,50*count,"pipe");}


   /* for(var count=0; count <hole; count=count+1) {    //loops <= meint smaller or equal  count= count+2  heisst count+=2  ++ means update by 1
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
        game.add.sprite(550,50*count,"pipe");}*/


    score += 100;
    label_score.setText(score);


}


function update() {
    game.physics.arcade.overlap(player, pipes, game_over)


}

function game_over () {
    //alert("You SUCK")
    location.reload()
}