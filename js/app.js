const timer = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let time;
let timerStart;

let scores = 0;

// Enemies our player must avoid
let Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;

    this.speed = speed;

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    this.update = (dt) => {
        this.x += this.speed * dt;

        if(this.x > 450){
            this.x = 0;
        }
    }

    // Draw the enemy on the screen, required method for game
    this.render = () => {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    this.checkCollisions = () => {
        if(parseInt(this.x) === player.x && parseInt(this.y) === player.y){
            console.log('test');
            player.reset();
        }
    }
};

let Player = function(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;

    this.render = () => {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    this.handleInput = (key) => {
        if(key === 'left' && this.x > 0 ){
            this.x -= 40;
        }else if(key === 'right' && this.x < 400){
            this.x += 40;
        }else if(key === 'up' && this.y > 0){
            this.y -= 40;

            if(this.y < 40){
                scores += 100;
                this.reset();
            }
        }else if(key === 'down' && this.y < 400){
            this.y += 40;
        }
    }

    this.reset = () => {
        this.x = 200;
        this.y = 340;
    }
}

var Score = function(x, y){
    this.x = x;
    this.y = y;
    this.score = `Points: ${scores}`;

    this.render = () => {
        ctx.font = "15px arial";
        ctx.fillText(this.score, this.x, this.y);
    }

    this.update = () => {
        this.score = `Points: ${scores}`;
    }
}

// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(320, 220, 260), new Enemy(120, 140, 60), new Enemy(40, 60, 640)];
// Place the player object in a variable called player
let player = new Player('images/char-cat.png', 200, 340);

let score = new Score(420, 570);

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