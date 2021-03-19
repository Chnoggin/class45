var player1, player1Img;
var player2, player2Img;
var database;
var gameState = 0;
var playerCount = 0;

var form;
var game;
var player;

var players;

var allPlayers;


function preload() {
  player1Img = loadImage("fighter1.png");
  player2Img = loadImage("fighter2.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  
}
function draw() {
  background("black");
  //drawSprites();
}
