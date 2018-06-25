const timer = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let time;
let timerStart;

// Enemies our player must avoid
let Enemy = function(sprite, x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    this.x = x;
    this.y = y;

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = (dt) => {

    }

    // Draw the enemy on the screen, required method for game
    this.render = () => {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let Player = function(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;

    this.update = () => {
        console.log("a");
    }

    this.render = () => {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    this.handleInput = () => {

    }
}


//Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//};






// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let bug1 = new Enemy('images/enemy-bug.png', 300, 140);
let bug2 = new Enemy('images/enemy-bug.png', 200, 230);
let bug3 = new Enemy('images/enemy-bug.png', 60, 60);
let allEnemies = [bug1, bug2, bug3];
// Place the player object in a variable called player
let player = new Player('images/char-boy.png', 200, 400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//funacton to set game timer
function setGameTimer(){
    seconds = 0;
    minutes = 0;
    time = setInterval(() => {
        seconds++;
        
        if(seconds === 60){
            minutes++;
            seconds = 0;
        } 

        timer.innerHTML = `${minutes} mins ${seconds} sec`;
    }, 1000);
}

setGameTimer();