
var myGamePiece;
var gameOverText;
var myBackground;
var myObstacles = [];
var myScore;

function startGame() {
    document.getElementById("playAgain").style.visibility = "hidden"; 
    myGamePiece = new component(100, 85, "media/snowballpng.png", 10, 250, "image");
    myBackground = new component(1200, 600, "media/vecteezy_flame-dark-background.jpg", 0, 0, "background")
    myScore = new component("30px", "Consolas", "white", 10, 30, "text");
    gameOverText = new component("70px", "Orbitron", "red", 210, 320, "text");
    myGameArea.start();
}

// creates a canvas which is the game area
var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);

        // cheks if a key is pressed
        window.addEventListener('keydown', function(e){
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function(e){
            myGameArea.keys[e.keyCode] = false;
        })

        },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop : function() {
        clearInterval(this.interval);
    }
}

function everyInterval(n){
    if((myGameArea.frameNo / n) % 1 == 0) {return true;}
        return false;
}
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            if(type == "background"){
                ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if(this.type == "text"){
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
    }

    // function to change the x and y positions
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;     
        
        // checks if the x position has reach the end of the image
        if(this.type == "background"){
            if(this.x == -(this.width)){
                this.x = 0;
            }
        }   
    }

    // function that returns boolean value for if the game piece crashed with game obstacles
    this.crashWith = function(otherobj){
        var myLeft = this.x;
        var myRight = this.x + (this.width);
        var myTop = this.y;
        var myBottom = this.y + (this.height);
        var otherLeft = otherobj.x;
        var otherRight = otherobj.x + (otherobj.width);
        var otherTop = otherobj.y;
        var otherBottom = otherobj.y + (otherobj.height);
        var crash = true;
        if((myBottom < otherTop) ||
            (myTop > otherBottom) ||
            (myRight < otherLeft) ||
            (myLeft > otherRight)){
            
            crash = false;
        }
        return crash;
    }
}
function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for(i = 0; i < myObstacles.length; i += 1){
        if(myGamePiece.crashWith(myObstacles[i])){
            myGameArea.stop();
            myGameArea.clear();
            myBackground.update();
            myScore.text = "SCORE: " + myGameArea.frameNo;
            myScore.update();
            gameOverText.text = "GAME OVER";
            gameOverText.update();
            document.getElementById("playAgain").style.visibility = "visible"; 
            return;
        }
    }

    myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();
    myBackground.update();

    myGameArea.frameNo += 1;
    if(myGameArea.frameNo == 1 || everyInterval(110)){
        x = myGameArea.canvas.width;
        minHeight = 100;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight - minHeight + 1) +minHeight);
        minGap = 150;
        maxGap = 300;
        gap = Math.floor(Math.random()*(maxGap - minGap +1) +minGap);
        myObstacles.push(new component(130, height, "media/firevoretexpngdown.png", x, 0, "image"));
        myObstacles.push(new component(80, x-height-gap, "media/firevoretexpng.png", x, height+gap, "image"));
    }
    for(i = 0; i < myObstacles.length; i += 1){
        myObstacles[i].x += -3;
        myObstacles[i].update();
    }

    // update the score
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();

    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
    if(myGameArea.keys && myGameArea.keys[37]){myGamePiece.speedX = -5;} //move left
    if(myGameArea.keys && myGameArea.keys[39]){myGamePiece.speedX = 5;} // move right
    if(myGameArea.keys && myGameArea.keys[38]){myGamePiece.speedY = -5;} // move up
    if(myGameArea.keys && myGameArea.keys[40]){myGamePiece.speedY = 5;} // move down
    myGamePiece.newPos();
    myGamePiece.update();
}

