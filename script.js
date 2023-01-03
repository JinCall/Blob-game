const canvas = document.getElementById("Areajuego");
const ctx = canvas.getContext ("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

function drawScreen () {

    requestAnimationFrame (drawScreen);
    cleanScreen ();
    boundry ();
    inputs ();
    drawBlob ();

}

function boundry () {

    if (y < radius) {
        y = radius;
    }


    if (y > canvas.height - radius) {
        y = canvas.height - radius;
    }

    if (x < radius) {
        x = radius;
    }


    if (x > canvas.width - radius) {
        x = canvas.width - radius;
    }

}

function inputs () {
    
    if (upPressed) {
        
        y = y - speed;
    }
    if (downPressed) {
        
        y = y + speed;
    }

    if (leftPressed) {
        
        x = x - speed;
    }

    if (rightPressed) {
        
        x = x + speed;
    }
}

function drawBlob () {

    ctx.fillStyle = "grey"

    if (upPressed) {
        ctx.fillStyle = "green"
    }
    
    if (downPressed) {
        ctx.fillStyle = "blue"
    }

    if (rightPressed) {
        ctx.fillStyle = "red"
    }

    if (leftPressed) {
        ctx.fillStyle = "yellow"
    }

    ctx.beginPath ();
    ctx.arc (x,y,radius,0, Math.PI * 2)
    ctx.fill ();
}

function cleanScreen () {

    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
}

document.body.addEventListener ("keydown", keyDown);
document.body.addEventListener ("keyup", keyUp);


function keyDown (event) {

    if (event.keyCode == 38) {
        upPressed = true;
    } 

    if (event.keyCode == 40) {
        downPressed = true;
    }

    if (event.keyCode == 37) {
        leftPressed = true;
    }
    if (event.keyCode == 39) {
        rightPressed = true;
    }

}

function keyUp (event) {

    if (event.keyCode == 38) {
        upPressed = false;
    } 

    if (event.keyCode == 40) {
        downPressed = false;
    }

    if (event.keyCode == 37) {
        leftPressed = false;
    }
    if (event.keyCode == 39) {
        rightPressed = false;
    }
}


drawScreen ();