const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var universe, earth;

var bckImage;
var fairy, fairyImage;
var star, starImage;

var music;

function preload() {
  //preload the images here
  bckImage = loadImage("images/starnight.png");

  fairyImage = loadImage("images/fairy.png");

  starImage = loadImage("images/star.png");

  music = loadSound("sound/JoyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);

  universe = Engine.create();
  earth = universe.world;

  var fairy_options = {
    isStatic: true
  }

  fairy = Bodies.rectangle(50, 300, 300, 300, fairy_options);
  World.add(earth, fairy);

  var star_options = {
    isStatic: true
  }
  star = Bodies.circle(600, 100, 40, star_options);
  World.add(earth, star);

  music.loop();

}


function draw() {
  background(bckImage);

  Engine.update(universe);

  image(fairyImage, fairy.position.x, fairy.position.y, 300, 300);

  image(starImage, star.position.x, star.position.y, 50, 50);

  if (star.position.y > 360) {
    Matter.Body.setStatic(star, true);
  }

  drawSprites();


}


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(star, false);
  }

  if (keyCode === LEFT_ARROW) {
    fairy.position.x = fairy.position.x - 15;
  }

  if (keyCode === RIGHT_ARROW) {
    fairy.position.x = fairy.position.x + 15;
  }
}