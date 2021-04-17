var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImg_width = 30;
blockImg_height = 30;

var playerObj = "";
var blockImg_object = "";

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img){
    playerObj = Img;
    
    playerObj.scaleToWidth(150);
    playerObj.scaleToHeight(140);
    playerObj.set({
        top:playerY,
        left:playerX
    });
    canvas.add(playerObj);
    });
} 

function newImg(getImg)
{
    fabric.Image.fromURL(getImg, function(Img){
    blockImg_Obj = Img;
    
    blockImg_Obj.scaleToWidth(blockImg_width);
    blockImg_Obj.scaleToHeight(blockImg_height);
    blockImg_Obj.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImg_Obj);
    });
} 

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80') {

        console.log("p and shift key pressed together");
        blockImg_width = blockImg_width + 10;
        blockImg_height = blockImg_height + 10;
        document.getElementById("current_width").innerHTML = blockImg_width;
        document.getElementById("current_height").innerHTML = blockImg_height;
    }

    if(e.shiftKey == true && keyPressed == '77') {

        console.log("m and shift key pressed together");
        blockImg_width = blockImg_width - 10;
        blockImg_height = blockImg_height - 10;
        document.getElementById("current_width").innerHTML = blockImg_width;
        document.getElementById("current_height").innerHTML = blockImg_height;
    }


    if (keyPressed == "83")
    {
        newImg("spiderman_body.png");
        console.log("s");
    }

    if (keyPressed == "72")
    {
        newImg("hulk_legs.png");
        console.log("h");
    }

    if (keyPressed == "73")
    {
        newImg("ironman_right_hand.png");
        console.log("i");
    }

    if (keyPressed == "84")
    {
        newImg("thor_face.png");
        console.log("t");
    }
    
    if (keyPressed == "67")
    {
        newImg("captain_america_left_hand.png");
        console.log("c");
    }

}   


function up() {

    if(playerY > 0) {

        playerY = playerY - blockImg_height;

        console.log("Block Image Height = " + blockImg_height);
        console.log("When up arrow key is pressed, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObj);
        playerUpdate();
    }
}

function down() {

    if(playerY <= 500) {

        playerY = playerY + blockImg_height;

        console.log("Block Image Height = " + blockImg_height);
        console.log("When down arrow key is pressed, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObj);
        playerUpdate();
    }
} 

function left() {

    if(playerX > 0) {

        playerX = playerX - blockImg_width;

        console.log("Block Image Width = " + blockImg_width);
        console.log("When left arrow key is pressed, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObj);
        playerUpdate();
    }
}

function right() {

    if(playerX <= 900) {

        playerX = playerX + blockImg_width;

        console.log("Block Image Width = " + blockImg_width);
        console.log("When left arrow key is pressed, X = " + playerX + " , Y = " + playerY);
        canvas.remove(playerObj);
        playerUpdate();
    }
}