var player;
var playerimg;
var enemy;
var enemyimg;
var isGameOver;
var backgroundimg;

function preload() {
    playerimg = loadImage("enemy.position.y = 0;");
    enemyimg = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundimg = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
    
}
function setup() {
    isGameOver = false;
    createCanvas(256,256);
    player=createSprite(width/2, height-(playerimg.height/2), 0, 0);
    player.addImage(playerimg);
    enemy=createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyimg);
    enemy.rotationSpeed = 4;
    background
}
function draw() {
    if(isGameOver) {
        gameOver();
    } else {
        if(enemy.overlap(player)) {
            isGameOver = true;
        }
    
    if (enemy.overlap(player)){
        gameOver();
}
    background(backgroundimg);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-(playerimg.width/2))){
        player.position.x = player.position.x+5;
}
    if (keyDown(LEFT_ARROW) && player.position.x > (playerimg.width/2)) {
        player.position.x = player.position.x-5;
    }
   
    enemy.position.y = enemy.position.y+7;
    
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
    }
    drawSprites();
    }
}
function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click Anywhere to Restore Your Dignity", width/2, 3*height/4);
}
function mouseClicked() {
    if (isGameOver) {
    isGameOver = false
    player.position.x = width/2;
    player.position.y = height-(playerimg.height/2);
    enemy.position.y = 0;
    enemy.position.x = width/2;
    }
}