const timer = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let time;
let timerStart;

// Enemies our player must avoid
let Enemy = function(sprite, x, y, speed) {
    // Variables applied to each of our instances go here,

    this.sprite = sprite;
    this.x = x;
    this.y = y;

    this.speed = speed;

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = (dt) => {
        this.x += this.speed * dt;
    }

    // Draw the enemy on the screen, required method for game
    this.render = () => {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    this.checkCollisions = () => {
        console.log(player.x, player.y, this.x, this.y);
        if(this.x === player.x && this.y === player.y){
            player.x = 200;
            player.y = 400;
        }
    }
};

let Player = function(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;

    this.update = () => {
       
    }

    this.render = () => {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    this.handleInput = (key) => {
        if(key === 'left' && this.x > 0 ){
            this.x -= 50;
        }else if(key === 'right' && this.x < 400){
            this.x += 50;
        }else if(key === 'up' && this.y > 0){
            this.y -= 50;

            if(this.y < 40){
                this.reset();
            }
        }else if(key === 'down' && this.y < 400){
            this.y += 50;
        }
    }

    this.reset = () => {
        this.x = 200;
        this.y = 400;
    }
}


// Place all enemy objects in an array called allEnemies
let bug1 = new Enemy('images/enemy-bug.png', 300, 150, 1);
let bug2 = new Enemy('images/enemy-bug.png', 200, 200, 1);
let bug3 = new Enemy('images/enemy-bug.png', 60, 50, 1);
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