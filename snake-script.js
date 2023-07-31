// {



let topBar = document.querySelector('.top-bar');
let navBar = document.querySelector('.nav-bar');
let menuBar = document.querySelector('.nav-bar')

menu.onclick = function menu() {
  if (menuBar.style.display !== 'flex') {
    menuBar.style.display = 'flex';
    return;
  } if (menuBar.style.display == 'flex') {
    menuBar.style.display = 'none';
    return;
  }
}

let themeToggle = document.querySelector('.fa-toggle-off');
let themeToggle2 = document.querySelector('.toggle-text');
let topBarText = document.querySelectorAll('a, .contact, .games, .logo-text');
let games = document.querySelector('#gamesLink');
let contact = document.querySelector('#contactLink');

function toggleTheme(e) {
  let topBar = document.querySelector('.top-bar');
  let navBar = document.querySelector('.nav-bar');
  if (themeToggle.classList.contains('fa-toggle-off')) {
    themeToggle.classList.remove('fa-toggle-off');
    themeToggle.classList.add('fa-toggle-on');
    document.body.style.backgroundColor = 'rgb(35, 50, 35)';
    topBar.style.backgroundColor = 'rgb(55, 70, 55)';
    navBar.style.backgroundColor = 'rgb(55, 70, 55)';
    navBar.style.color = 'rgb(198, 230, 204)';
    for (let x = 0; x < topBarText.length; x++) {
      topBarText[x].style.color = 'rgb(198, 230, 204)';
    }
    menu.style.color = 'rgb(198, 230, 204)';
    games.style.color = 'rgb(198, 230, 204)';
    contact.style.color = 'rgb(198, 230, 204)';
    document.cookie = "darkMode=on"
    e.stopPropagation()
    return;
  } if (themeToggle.classList.contains('fa-toggle-on')) {
    themeToggle.classList.remove('fa-toggle-on');
    themeToggle.classList.add('fa-toggle-off');
    document.body.style.backgroundColor = "";
    topBar.style.backgroundColor = "";
    navBar.style.backgroundColor = "";
    topBar.style.color = "";
    navBar.style.color = "";
    for (let x = 0; x < topBarText.length; x++) {
      topBarText[x].style.color = '';
    }
    menu.style.color = '';
    games.style.color = '';
    contact.style.color = '';
    document.cookie = "darkMode=off"
    e.stopPropagation()
    return;
  }
}

themeToggle.onclick = toggleTheme;
themeToggle2.onclick = toggleTheme;

function cookieCheck() {
  if (document.cookie == "darkMode=on") {
    themeToggle.classList.remove('fa-toggle-off');
    themeToggle.classList.add('fa-toggle-on');
    document.body.style.backgroundColor = 'rgb(35, 50, 35)';
    topBar.style.backgroundColor = 'rgb(55, 70, 55)';
    navBar.style.backgroundColor = 'rgb(55, 70, 55)';
    navBar.style.color = 'rgb(198, 230, 204)';
    for (let x = 0; x < topBarText.length; x++) {
      topBarText[x].style.color = 'rgb(198, 230, 204)';
    }
    menu.style.color = 'rgb(198, 230, 204)';
    games.style.color = 'rgb(198, 230, 204)';
    contact.style.color = 'rgb(198, 230, 204)';
    return;
  }
}
cookieCheck();

// Theme Toggle Code
function transitions() {
  document.body.style.transition = 'all 1s ease-in-out';
  topBar.style.transition = 'all 1s ease-in-out';
  navBar.style.transition = 'all 1s ease-in-out';
  menu.style.transition = 'all 1s ease-in-out';
  games.style.transition = 'all 1s ease-in-out';
  contact.style.transition = 'all 1s ease-in-out';
  for (let x = 0; x < topBarText.length; x++) {
    topBarText[x].style.transition = 'all 1s ease-in-out';
  }
}
setTimeout(transitions, 0);

/* document.body.onkeydown = function goBack(e) {
  if (e.keyCode == 8) {
    let leaveCheck = confirm("Do you wish to leave the Game?")
    leaveCheck == true
      ? location.href = 'http://127.0.0.1:5500/arcade.html'
      : console.log("Leave Denied");
  }
} */

function screenCheck() {
  if (window.matchMedia("(max-width: 1370px)").matches) {
    topBar.style.display = "none";
    navBar.style.display = "none";
  } if (window.matchMedia("(min-width: 1400px)").matches) {
    topBar.style.display = "visible";
    topBar.style.display = "visible";
  } if (window.matchMedia("(max-width: 1200px)").matches) {
    alert("Your screen is too small for this game");
    location.href = "http://127.0.0.1:5500/arcade.html";
  } else {
    topBar.style.display = "flex";
  }
}
screenCheck();

let snekGame = document.querySelector('.game');

setTimeout((() => { snekGame.style.backgroundImage = 'url(/GrassV2.png)'; }), 3000);

// Movement Code

let moveDir = "left";
let movementY = 0;
let movementX = 0;

/*
setInterval(movement, 350)
*/

/* let audio = new Audio('/audio/flash.wav');
audio.play(); */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = new Image();
let image2 = new Image();
let image3 = new Image();
image.src = '/SnekHeads.png';
image2.src = '/SnekLengths.png';
image3.src = '/SnekEnds.png';

let snekCoords = {
  snekHead: {
    x: 224,
    y: 224,
    old: {
      x: 224,
      y: 224,
    },
  }, snekLength: {
    x: 256,
    y: 224,
    old: {
      x: 256,
      y: 224,
    },
  }, snekEnd: {
    x: 288,
    y: 224,
    old: {
      x: 288,
      y: 224,
    }
  },
}
let snekDirection = "left";
let oldDirection = "left"
let moved = false;
let movementQueue = [];

document.onkeydown = function controls(e) {
  if (e.key == 'a' && snekDirection !== "right" && moved == false
    || e.key == 'ArrowLeft' && snekDirection !== "right" && moved == false ||
    e.key == 'A' && snekDirection !== "right" && moved == false) {
    snekDirection = "left";
    moved = true;
    return;
  } if (e.key == 'd' && snekDirection !== "left" && moved == false
    || e.key == 'ArrowRight' && snekDirection !== "left" && moved == false ||
    e.key == "D" && snekDirection !== "left" && moved == false) {
    snekDirection = "right";
    moved = true;
    return;
  } if (e.key == 's' && snekDirection !== "up" && moved == false
    || e.key == 'ArrowDown' && snekDirection !== "up" && moved == false ||
    e.key == 'S' && snekDirection !== "up" && moved == false) {
    snekDirection = "down";
    moved = true;
    return;
  } if (e.key == 'w' && snekDirection !== "down" && moved == false
    || e.key == 'ArrowUp' && snekDirection !== "down" && moved == false ||
    e.key == 'W' && snekDirection !== "up" && moved == false) {
    snekDirection = "up";
    moved = true;
    return;
  } if (moved = true) {
    if (e.key == 'w' || e.key == 'ArrowUp' || e.key == 'W') {
      movementQueue.unshift("up");
      if (movementQueue.length == 2) {
        movementQueue.shift();
      }
    } if (e.key == 'a' || e.key == 'ArrowLeft' || e.key == 'A') {
      movementQueue.unshift("left");
      if (movementQueue.length == 2) {
        movementQueue.shift();
      }
    } if (e.key == 'd' || e.key == 'ArrowRight' || e.key == 'D') {
      movementQueue.unshift("right");
      if (movementQueue.length == 2) {
        movementQueue.shift();
      }
    } if (e.key == 's' || e.key == 'ArrowDown' || e.key == 'S') {
      movementQueue.unshift("down");
      if (movementQueue.length == 2) {
        movementQueue.shift();
      }
    }
  }
}

function movementQueues() {
  if (movementQueue.length > 0) {
    snekDirection == movementQueue[movementQueue.length];
    movementQueue.pop();
    // console.log("movementQueueRun!")
    checkCollision();
    mapBoundaries(boundaryType)
  }
}

mapWon = false;

let map = "meadows";

function snek() {
  checkWin();
  if (mapWon == true) {
    return;
  } movementQueues();
  moved = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (map == "cliffsides") {
    ctx.filter = "brightness(80%)";
    drawFood();
    drawSnek();
    ctx.filter = "brightness(100%)";
  } else {
    drawFood();
    drawSnek();
  }
  updateSnekCollider();
  moveSnek();
  drawObjects();
  updateScore();
  enemyCollisions();
}

let maps = ["meadows", "forest", "autumnForest", "cliffsides", "mountains"];

let mapCount = 0;

function checkWin() {
  if (mapScore >= requiredScore) {
    mapScore = 0;
    snekDirection = "left";
    mapCount++;
    map = maps[mapCount];
    setTimeout((() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height,);
      snekGame.style.backgroundImage = 'url(/snekLoading2-export.gif)';
      mapWon = true;
    }), 50);
    snekCoords.snekHead.x = 192;
    snekCoords.snekHead.y = 224;
    snekCoords.snekLength.x = 224;
    snekCoords.snekLength.y = 224;
    snekCoords.snekEnd.x = 256;
    snekCoords.snekEnd.y = 224;
    Objects = {};
    arrX = [];
    arrY = [];
    arrType = [];
    objCount = 0;
    for (let x = 1; x <= 4; x++) {
      respawnFood(x);
    } if (map == "forest") {
      setTimeout((() => {
        requiredScore = 25;
        snekGame.style.backgroundImage = 'url(/GrassV2.png)'; mapWon = false;
      }), 9000);
      for (let x = 1; x <= 4; x++) {
        foodOnFood(x);
        foodOnSnek(x);
        foodCollisions(x);
      } foxFrame = 0;
      foxState = "idle";
    } if (map == "autumnForest") {
      setTimeout((() => {
        requiredScore = 30;
        snekGame.style.backgroundImage = 'url(/GrassV2AF.png)'; mapWon = false;
        owlTimer();
      }), 9000);
      for (let x = 1; x <= 4; x++) {
        foodOnFood(x);
        foodOnSnek(x);
        foodCollisions(x);
      } foxFrame = 0;
      foxState = "idle";
      owlFrame = 0;
      owlDirection = "normal";
      owlX = -64;
      owlState = "idle";
    } if (map == "cliffsides") {
      setTimeout((() => {
        requiredScore = 35;
        snekGame.style.backgroundImage = 'url(/cliffgrass.png)'; mapWon = false;
        owlTimer();
      }), 9000);
      for (let x = 1; x <= 4; x++) {
        foodOnFood(x);
        foodOnSnek(x);
        foodCollisions(x);
      } owlFrame = 0;
      owlDirection = "normal";
      owlX = -64;
      owlState = "idle";
    }
  }
}

let food = new Image();
food.src = '/Foods.png';
let foods = {
  food1: {
    spawnLocationX: Math.floor(Math.random() * 15) * 32,
    spawnLocationY: Math.floor(Math.random() * 15) * 32,
    foodType: Math.floor(Math.random() * 10) * 10,
    score: 0,
    eaten: false,
  }, food2: {
    spawnLocationX: Math.floor(Math.random() * 15) * 32,
    spawnLocationY: Math.floor(Math.random() * 15) * 32,
    foodType: Math.floor(Math.random() * 10) * 10,
    score: 0,
    eaten: false,
  }, food3: {
    spawnLocationX: Math.floor(Math.random() * 15 + 1) * 32,
    spawnLocationY: Math.floor(Math.random() * 15 + 1) * 32,
    foodType: Math.floor(Math.random() * 10) * 10,
    score: 0,
    eaten: false,
  }, food4: {
    spawnLocationX: Math.floor(Math.random() * 15 + 1) * 32,
    spawnLocationY: Math.floor(Math.random() * 15 + 1) * 32,
    foodType: Math.floor(Math.random() * 10) * 10,
    score: 0,
    eaten: false,
  }
}

function drawFood() {
  for (let x = 1; x <= 4; x++) {
    foodCollisions(x);
  }
  for (let x = 1; x < 5; x++) {
    foodCollisions(x);
    if (foods[`food${x}`].foodType >= 70) {
      ctx.drawImage(food, 32, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      foods[`food${x}`].score = 2;
    } if (foods[`food${x}`].foodType <= 10) {
      ctx.drawImage(food, 64, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      foods[`food${x}`].score = 5;
    } if (foods[`food${x}`].foodType > 10 && foods[`food${x}`].foodType < 70) {
      ctx.drawImage(food, 0, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      foods[`food${x}`].score = 1;
    }
  }
  // ctx.drawImage(food, foods.food1.foodType, 0, 32, 32, foods.food1.spawnLocationX, foods.food1.spawnLocationY, 32, 32);
}

let boundaryType = "pacman";
function boundaries(type) {
  boundaryType = confirm("Do you want the pacman-effect or not");
  boundaryType == true
    ? boundaryType = "pacman"
    : boundaryType = "walls"
}

function moveSnek() {
  snekCoords.snekHead.old.x = snekCoords.snekHead.x;
  snekCoords.snekHead.old.y = snekCoords.snekHead.y;
  snekCoords.snekLength.old.x = snekCoords.snekLength.x;
  snekCoords.snekLength.old.y = snekCoords.snekLength.y;
  snekCoords.snekEnd.old.x = snekCoords.snekEnd.x;
  snekCoords.snekEnd.old.y = snekCoords.snekEnd.y;

  if (snekDirection == "left") {
    checkCollision();
    mapBoundaries(boundaryType);
    for (let x = 1; x <= 4; x++) {
      if (snekCollider.x == foods[`food${x}`].spawnLocationX) {
        if (snekCollider.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten == true;
          let sfx2 = new Audio('/Eat.mp3');
          setTimeout((() => { sfx2.play(); }), 250);
          setTimeout(respawnFood, 3250, x);
        }
      }
    }
    if (isColliding == false) {
      snekCoords.snekHead.x -= 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "left"
      if (map == "forest" || map == "autumnForest") {
        foxStates();
      }
      return;
    } else {
      killSnake()
      return;
    }
  } if (snekDirection == "right") {
    checkCollision();
    mapBoundaries(boundaryType);
    for (let x = 1; x <= 4; x++) {
      if (snekCollider.x == foods[`food${x}`].spawnLocationX) {
        if (snekCollider.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten == true;
          let sfx2 = new Audio('/Eat.mp3');
          setTimeout((() => { sfx2.play(); }), 250);
          setTimeout(respawnFood, 3250, x);
        }
      }
    }
    if (isColliding == false) {
      snekCoords.snekHead.x += 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "right"
      if (map == "forest" || map == "autumnForest") {
        foxStates();
      }
      return;
    } else {
      killSnake()
      return;
    }
  } if (snekDirection == "down") {
    checkCollision();
    mapBoundaries(boundaryType);
    for (let x = 1; x <= 4; x++) {
      if (snekCollider.x == foods[`food${x}`].spawnLocationX) {
        if (snekCollider.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten == true;
          let sfx2 = new Audio('/Eat.mp3');
          setTimeout((() => { sfx2.play(); }), 250);
          setTimeout(respawnFood, 3250, x);
        }
      }
    }
    if (isColliding == false) {
      snekCoords.snekHead.y += 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "down"
      if (map == "forest" || map == "autumnForest") {
        foxStates();
      }
      return;
    } else {
      killSnake()
      return;
    }
  } if (snekDirection == "up") {
    checkCollision();
    mapBoundaries(boundaryType);
    for (let x = 1; x <= 4; x++) {
      if (snekCollider.x == foods[`food${x}`].spawnLocationX) {
        if (snekCollider.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten == true;
          let sfx2 = new Audio('/Eat.mp3');
          setTimeout((() => { sfx2.play(); }), 250);
          setTimeout(respawnFood, 3250, x);
        }
      }
    }
    if (isColliding == false) {
      snekCoords.snekHead.y -= 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "up"
      if (map == "forest" || map == "autumnForest") {
        foxStates();
      }
      return;
    } else {
      killSnake()
      return;
    }
  }
}

let drawStage = 0;
let drawStage2 = 0;
let drawStage3 = 0;
let snekDrawSize = 32;
let snekCutAmount = 32 - snekDrawSize;

function drawSnek() {
  let tailCheck = false;
  let tailCheck2 = false;
  let tailCheck3 = false;
  // Snek Head
  if (oldDirection == "left") {
    ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x + snekCutAmount * 2, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  } if (oldDirection == "down") {
    ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  } if (oldDirection == "right") {
    ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  } if (oldDirection == "up") {
    ctx.drawImage(image, 0, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  }
  // Snek Length
  if (snekCoords.snekHead.x == snekCoords.snekLength.x - 32) {
    if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.x == -32) {
      ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x + snekCutAmount, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
      ctx.drawImage(image2, 256, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
      ctx.drawImage(image2, 448, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    }
  } if (snekCoords.snekHead.x == snekCoords.snekLength.x + 32) {
    if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.x == 512) {
      ctx.drawImage(image2, 128, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
      ctx.drawImage(image2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck3 = true;
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
      ctx.drawImage(image2, 480, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck2 = true;
    }
  } if (snekCoords.snekHead.y == snekCoords.snekLength.y - 32) {
    if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
      ctx.drawImage(image2, 32, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.y == -32 && snekDirection !== "up") {
      ctx.drawImage(image2, 480, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.y == 512 && snekDirection !== "up") {
      ctx.drawImage(image2, 320, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck = true;
    }
  } if (snekCoords.snekHead.y == snekCoords.snekLength.y + 32) {
    if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
      ctx.drawImage(image2, 64, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.x == -32) {
      ctx.drawImage(image2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.x == 512) {
      ctx.drawImage(image2, 384, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck = true;
    }
  }
  // Snek End
  if (tailCheck) {
    ctx.drawImage(image3, 192, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (tailCheck2) {
    ctx.drawImage(image3, 160, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (tailCheck3) {
    ctx.drawImage(image3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32) {
    ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32) {
    ctx.drawImage(image3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32) {
    ctx.drawImage(image3, 96, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32) {
    ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  }
}

let collidables = new Image();
collidables.src = '/Collidables.png';
let foxIdle = new Image();
foxIdle.src = '/foxIdle-export.png';
let foxWalking = new Image();
foxWalking.src = '/foxWalking.png';
let foxAttacking = new Image();
foxAttacking.src = '/foxAttacking.png'
let foxReturning = new Image();
foxReturning.src = '/foxReturning.png'
let foxState = "idle";
foxFrame = 0;
let walkDistance = 0;
let owlFlying = new Image();
let owlFlying2 = new Image();
let owlAttacking = new Image();
let owlAttacking2 = new Image();
owlFlying.src = '/owlflying.png';
owlFlying2.src = '/owlflying2.png';
owlAttacking.src = '/owltalons.png';
owlAttacking2.src = '/owltalons2.png';
let owlFrame = 0;
let flightDistance = 0;
let owlDirection = "normal";
let owlState = "idle";
let lockedY = 0;
let owlX = -64;

function owlTimer() {
  if (map == "autumnForest") {
    setTimeout((() => {
      if (map == "autumnForest") {
        owlState = "flying"; lockedY = snekCoords.snekHead.y;
      }
    }), 28000);
  } if (map == "cliffsides") {
    setTimeout((() => {
      if (map == "cliffsides") {
        owlState = "flying"; lockedY = snekCoords.snekHead.y;
      }
    }), 2500);
  }
}

function owlStates() {
  if (map == "autumnForest") {
    if (owlDirection == "normal") {
      if (owlState == "flying" && owlX == 512 || owlState == "returning" && owlX == 512) {
        owlDirection = "alternate";
        owlState = "idle";
        owlTimer();
        return;
      }
      if (owlX == snekCoords.snekHead.x && owlState == "flying" ||
        owlState == "flying" && owlX == snekCoords.snekHead.x + 32 ||
        owlState == "flying" && owlX == snekCoords.snekHead.x - 32) {
        owlState = "attacking";
      }
    } if (owlDirection == "alternate") {
      if (owlState == "flying" && owlX == snekCoords.snekHead.x ||
        owlState == "flying" && owlX == snekCoords.snekHead.x - 32) {
        owlState = "attacking";
        owlFrame = 1728;
      }
      if (owlState == "flying" && owlX == -64 || owlState == "returning" && owlX == -64) {
        owlState = "idle"
        owlDirection = "normal";
        owlFrame = 0;
        owlTimer();
      }
    }
  } if (map == "cliffsides") {
    if (owlDirection == "normal") {
      if (owlState == "flying" && owlX == 512 || owlState == "returning" && owlX == 512) {
        owlDirection = "alternate";
        owlState = "idle";
        owlTimer();
        return;
      }
      if (owlX == snekCoords.snekHead.x && owlState == "flying" ||
        owlState == "flying" && owlX == snekCoords.snekHead.x + 32 ||
        owlState == "flying" && owlX == snekCoords.snekHead.x - 32) {
        owlState = "attacking";
      }
    } if (owlDirection == "alternate") {
      if (owlState == "flying" && owlX == snekCoords.snekHead.x ||
        owlState == "flying" && owlX == snekCoords.snekHead.x - 32) {
        owlState = "attacking";
        owlFrame = 1728;
      }
      if (owlState == "flying" && owlX == -64 || owlState == "returning" && owlX == -64) {
        owlState = "idle"
        owlDirection = "normal";
        owlFrame = 0;
        owlTimer();
      }
    }
  } if (owlX <= -64 || owlX >= 512) {
    lockedY = snekCoords.snekHead.y;
  }
}

function foxStates() {
  if (map == "forest") {
    if (foxState == "returning") {
      if (Objects[1].x <= 0) {
        foxFrame = 0;
        foxState = "idle";
        if (Objects[1].x >= 192) {
          return;
        }
      } if (snekCollider.x == 160 || snekCollider.x == 192 || snekCollider.x == 224 || snekCollider.x == 256
        || snekCollider.x == 128 || snekCollider.x == 288) {
        if (snekCollider.y == 160 || snekCollider.y == 192) {
          foxState = "walking";
          foxFrame = 0;
        }
      }
    }
    if (foxState == "idle") {
      if (snekCollider.x == 160 || snekCollider.x == 192 || snekCollider.x == 224 || snekCollider.x == 256
        || snekCollider.x == 128 || snekCollider.x == 288) {
        if (snekCollider.y == 160 || snekCollider.y == 192) {
          foxState = "walking";
          foxFrame = 0;
        }
      }
    }
  } if (foxState == "walking") {
    if (snekCollider.x == Objects[1].x + 128) {
      if (snekCollider.y == Objects[1].y || snekCollider.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    } if (snekCoords.snekHead.x == Objects[1].x + 128) {
      if (snekCoords.snekHead.y == Objects[1].y || snekCoords.snekHead.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    } if (snekCoords.snekLength.x == Objects[1].x + 128) {
      if (snekCoords.snekLength.y == Objects[1].y || snekCoords.snekLength.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    } if (snekCoords.snekEnd.x == Objects[1].x + 128) {
      if (snekCoords.snekEnd.y == Objects[1].y || snekCoords.snekEnd.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    }
  } if (foxState == "walking") {
    if (Objects[1].x >= 192) {
      foxFrame = 0;
      foxState = "idle";
      setTimeout((() => {
        foxFrame = 1024;
        foxState = "returning";
      }), 1000);
    }
  } if (map == "autumnForest") {
    if (foxState == "returning") {
      if (Objects[1].x <= 0) {
        foxFrame = 0;
        foxState = "idle";
        if (Objects[1].x >= 384) {
          return;
        }
      } if (snekCollider.x == 160 || snekCollider.x == 192 || snekCollider.x == 224 || snekCollider.x == 256
        || snekCollider.x == 128 || snekCollider.x == 288) {
        if (snekCollider.y == 128 || snekCollider.y == 160) {
          foxState = "walking";
          foxFrame = 0;
        }
      }
    }
    if (foxState == "idle") {
      if (snekCollider.x == 160 || snekCollider.x == 192 || snekCollider.x == 224 || snekCollider.x == 256
        || snekCollider.x == 128 || snekCollider.x == 288) {
        if (snekCollider.y == 128 || snekCollider.y == 160) {
          foxState = "walking";
          foxFrame = 0;
        }
      }
    }
  } if (foxState == "walking") {
    if (snekCollider.x == Objects[1].x + 128) {
      if (snekCollider.y == Objects[1].y || snekCollider.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    } if (snekCoords.snekHead.x == Objects[1].x + 128) {
      if (snekCoords.snekHead.y == Objects[1].y || snekCoords.snekHead.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    } if (snekCoords.snekLength.x == Objects[1].x + 128) {
      if (snekCoords.snekLength.y == Objects[1].y || snekCoords.snekLength.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    } if (snekCoords.snekEnd.x == Objects[1].x + 128) {
      if (snekCoords.snekEnd.y == Objects[1].y || snekCoords.snekEnd.y == Objects[1].y + 32) {
        foxFrame = 0;
        foxState = "attacking";
      }
    }
  } if (foxState == "walking") {
    if (Objects[1].x >= 384) {
      foxFrame = 0;
      foxState = "idle";
      setTimeout((() => {
        foxFrame = 1024;
        foxState = "returning";
      }), 1000);
    }
  }
}

function drawObjects() {
  if (map == "meadows") {
    Objects = {};
    objCount = 0;
    drawObject("bush", 96, 32);
    drawObject("rock", 288, 32);
    drawObject("oTree", 32, 64);
    drawObject("rock", 352, 128);
    drawObject("pTree", 416, 32);
    drawObject("pTree", 0, 384);
    drawObject("bush", 64, 320);
    drawObject("oTree", 352, 256);
    drawObject("bush", 224, 448);
  } if (map == "forest") {
    Objects = {};
    objCount = 0;
    drawObject("fox", 0, 128);
    drawObject("rock", 0, 0);
    drawObject("oTree", 32, 32);
    drawObject("bush", 96, 96);
    drawObject("rock", 224, 32);
    drawObject("pTree", 320, 32);
    drawObject("pTree", 448, 0);
    drawObject("oTree", 384, 64);
    drawObject("bush", 320, 160);
    drawObject("pTree", 416, 192);
    drawObject("rock", 448, 352);
    drawObject("pTree", 320, 288);
    drawObject("oTree", 416, 384);
    drawObject("pTree", 96, 192);
    drawObject("oTree", 128, 256);
    drawObject("oTree", 0, 224);
    drawObject("pTree", 32, 352);
    drawObject("bush", 128, 448);
    drawObject("barrier", 320, 128);
  } if (map == "autumnForest") {
    Objects = {};
    objCount = 0;
    drawObject("fox", 0, 96);
    drawObject("reTree", 0, 0);
    drawObject("pTree", 128, 0,);
    drawObject("rock", 288, 32);
    drawObject("orTree", 384, 0,);
    drawObject("pTree", 32, 160);
    drawObject("orTree", 160, 192);
    drawObject("aBush", 96, 320);
    drawObject("yeTree", 320, 96);
    drawObject("reTree", 448, 128);
    drawObject("pTree", 384, 224);
    drawObject("yeTree", 352, 320);
    drawObject("aBush", 288, 448);
    drawObject("yeTree", 0, 320);
    drawObject("rock", 0, 448);
    drawObject("orTree", 416, 384);
    drawObject("orTree", 96, 384);
    drawObject("reTree", 192, 320);
    drawObject("owl", -64, 256);
  } if (map == "cliffsides") {
    Objects = {};
    objCount = 0;
    drawObject("cliffside", 0, 0);
    drawObject("cliffside", 416, 0);
    drawObject("oTree", 0, 32);
    drawObject("rock", 0, 224);
    drawObject("bush", 0, 320);
    drawObject("pTree", 0, 384);
    drawObject("pTree", 96, 0);
    drawObject("rock", 128, 160);
    drawObject("rock", 96, 288);
    drawObject("rock", 448, 0);
    drawObject("pTree", 448, 96);
    drawObject("bush", 448, 288);
    drawObject("oTree", 448, 352);
    drawObject("rock", 352, 32);
    drawObject("oTree", 288, 64);
    drawObject("rock", 352, 224);
    drawObject("pTree", 224, 256);
    drawObject("oTree", 320, 352);
    drawObject("rock", 128, 448);
    drawObject("owl", -64, 64);
  }
}

let rockType = Math.floor(Math.random() * 3) * 64;
rockType == 0 ? rockType = 64 : rockType = rockType;
let moaiType = Math.floor(Math.random() * 2)
let rockValue = Math.floor(Math.random() * 500);
let size = 64;
let objCount = 0;
let foxSpeed = 32;

function drawObject(type, xCoords, yCoords) {
  if (type == "bush") {
    ctx.drawImage(collidables, 0, 0, 64, 64, xCoords, yCoords, size, size,);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 32;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "rock") {
    if (rockValue == 0) {
      if (moaiType == 1) {
        ctx.drawImage(collidables, 704, 0, 64, 64, xCoords, yCoords, size, size);
        ctx.drawImage(collidables, 640, 0, 64, 64, xCoords, yCoords + size, size, size);
        objCount++;
        Objects[objCount] = {};
        Objects[objCount].x = xCoords;
        Objects[objCount].y = yCoords + 96;
        Objects[objCount].width = 64;
        Objects[objCount].height = 32;
        Objects[objCount].type = "1x2";
        return;
      }
      ctx.drawImage(collidables, 576, 0, 64, 64, xCoords, yCoords, size, size);
      ctx.drawImage(collidables, 512, 0, 64, 64, xCoords, yCoords + size, size, size);
      objCount++;
      Objects[objCount] = {};
      Objects[objCount].x = xCoords;
      Objects[objCount].y = yCoords + 96;
      Objects[objCount].width = 64;
      Objects[objCount].height = 32;
      Objects[objCount].type = "1x2";
      return;
    }
    ctx.drawImage(collidables, rockType, 0, 64, 64, xCoords, yCoords, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 32;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "pTree") {
    ctx.drawImage(collidables, 256, 0, 64, 64, xCoords, yCoords, size, size);
    ctx.drawImage(collidables, 320, 0, 64, 64, xCoords, yCoords + size, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 32;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "oTree") {
    ctx.drawImage(collidables, 384, 0, 64, 64, xCoords, yCoords, size, size);
    ctx.drawImage(collidables, 448, 0, 64, 64, xCoords, yCoords + size, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 32;
    Objects[objCount].type = "1x2";
  } if (type == "moai") {
    if (moaiType == 1) {
      ctx.drawImage(collidables, 704, 0, 64, 64, xCoords, yCoords, size, size);
      ctx.drawImage(collidables, 640, 0, 64, 64, xCoords, yCoords + size, size, size);
      objCount++;
      Objects[objCount] = {};
      Objects[objCount].x = xCoords;
      Objects[objCount].y = yCoords + 96;
      Objects[objCount].width = 64;
      Objects[objCount].height = 32;
      Objects[objCount].type = "1x2";
      return;
    }
    ctx.drawImage(collidables, 576, 0, 64, 64, xCoords, yCoords, size, size);
    ctx.drawImage(collidables, 512, 0, 64, 64, xCoords, yCoords + size, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 32;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "barrier") {
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 32;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    Objects[objCount].barrier = true;
    return;
  } if (type == "fox") {
    if (foxState == "idle") {
      ctx.drawImage(foxIdle, foxFrame, 0, 128, 128, xCoords + walkDistance, yCoords, 128, 128);
      foxFrame += 128;
      if (foxFrame == 512) {
        foxFrame = 0;
      }
      objCount++;
      Objects[objCount] = {};
      Objects[objCount].x = xCoords + walkDistance;
      Objects[objCount].y = yCoords + 32;
      Objects[objCount].width = 128;
      Objects[objCount].height = 64;
      Objects[objCount].type = "4x2 Disabled";
      enemyCollisions();
    } if (foxState == "walking") {
      ctx.drawImage(foxWalking, foxFrame, 0, 128, 128, xCoords + walkDistance, yCoords, 128, 128);
      foxFrame += 128;
      for (let x = 1; x <= 4; x++) {
        foodCollisions(x);
      }
      if (foxFrame == 1024) {
        foxFrame = 0;
      }
      walkDistance += foxSpeed;
      objCount++;
      if (walkDistance % foxSpeed == 0) {
        Objects[objCount] = {};
        Objects[objCount].x = xCoords + walkDistance;
        Objects[objCount].y = yCoords + 32;
        Objects[objCount].width = 128;
        Objects[objCount].height = 64;
        Objects[objCount].type = "4x2 Disabled";
        enemyCollisions();
      } /* if (walkDistance % foxSpeed > 0) {
      Objects[objCount] = {};
      Objects[objCount].x = xCoords + walkDistance + 8;
      Objects[objCount].y = yCoords + 32;
      Objects[objCount].width = 128;
      Objects[objCount].height = 64;
      Objects[objCount].type = "4x2";
      } */
    } if (foxState == "attacking") {
      ctx.drawImage(foxAttacking, foxFrame, 0, 192, 128, xCoords + walkDistance, yCoords, 192, 128);
      foxFrame += 768;
      for (let x = 1; x <= 4; x++) {
        foodCollisions(x);
      } if (foxFrame >= 5088) {
        foxState = "idle";
        foxFrame = 0;
        if (xCoords + walkDistance !== 0) {
          setTimeout((() => {
            foxState = "returning";
            foxFrame = 1024;
          }), 1000)
        }
      }
      objCount++;
      if (walkDistance % foxSpeed == 0) {
        Objects[objCount] = {};
        Objects[objCount].x = xCoords + walkDistance;
        Objects[objCount].y = yCoords + 32;
        Objects[objCount].width = 128;
        Objects[objCount].height = 64;
        Objects[objCount].type = "4x2 Disabled";
        enemyCollisions();
      }
    } if (foxState == "returning") {
      ctx.drawImage(foxReturning, foxFrame, 0, 128, 128, xCoords + walkDistance, yCoords, 128, 128);
      foxFrame -= 128;
      for (let x = 1; x <= 4; x++) {
        foodCollisions(x);
      }
      if (foxFrame == 0) {
        foxFrame = 1024;
      }
      walkDistance -= foxSpeed;
      objCount++;
      if (walkDistance % foxSpeed == 0) {
        Objects[objCount] = {};
        Objects[objCount].x = xCoords + walkDistance;
        Objects[objCount].y = yCoords + 32;
        Objects[objCount].width = 128;
        Objects[objCount].height = 64;
        Objects[objCount].type = "4x2 Disabled";
        enemyCollisions();
      } /* if (walkDistance % foxSpeed > 0) {
      Objects[objCount] = {};
      Objects[objCount].x = xCoords + walkDistance - 8;
      Objects[objCount].y = yCoords + 32;
      Objects[objCount].width = 128;
      Objects[objCount].height = 64;
      Objects[objCount].type = "4x2";
      } */
    }
  } if (type == "aBush") {
    ctx.drawImage(collidables, 768, 0, 64, 64, xCoords, yCoords, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 32;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "orTree") {
    ctx.drawImage(collidables, 1088, 0, 64, 64, xCoords, yCoords, size, size);
    ctx.drawImage(collidables, 1152, 0, 64, 64, xCoords, yCoords + size, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "reTree") {
    ctx.drawImage(collidables, 960, 0, 64, 64, xCoords, yCoords, size, size);
    ctx.drawImage(collidables, 1024, 0, 64, 64, xCoords, yCoords + size, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "yeTree") {
    ctx.drawImage(collidables, 832, 0, 64, 64, xCoords, yCoords, size, size);
    ctx.drawImage(collidables, 896, 0, 64, 64, xCoords, yCoords + size, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 128;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "cliffside") {
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords;
    Objects[objCount].width = 96;
    Objects[objCount].height = 512;
    Objects[objCount].type = "3x16";
    return;
  } if (type == "owl") {
    owlStates();
    if (owlDirection == "normal") {
      if (owlState == "idle") {
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame >= 320) {
          owlFrame = 0;
        } else {
          owlFrame += 64;
        }
      } if (owlState == "flying") {
        owlStates();
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame >= 320) {
          owlFrame = 0;
        } else {
          owlFrame += 64;
        } flightDistance += 64;
        owlX = xCoords + flightDistance;
        return;
      } if (owlState == "returning") {
        owlStates();
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame >= 320) {
          owlFrame = 0;
        } else {
          owlFrame += 64;
        } flightDistance += 64;
        owlX = xCoords + flightDistance;
        return;
      } if (owlState == "attacking") {
        ctx.drawImage(owlAttacking, owlFrame, 0, 64, 96, xCoords + flightDistance, lockedY - 64, size, 96);
        if (owlFrame >= 1472) {
          owlFrame = 0;
          owlState = "returning";
          return;
        }
        owlFrame += 256;
        owlX = xCoords + flightDistance;
        return;
      }
    } if (owlDirection == "alternate") {
      if (owlState == "attacking") {
        if (owlFrame == 1664) {
          owlFrame = 1728;
        } if (owlFrame == 1408) {
          owlFrame = 1472;
        }
        ctx.drawImage(owlAttacking2, owlFrame, 0, -64, 96, xCoords + flightDistance, lockedY - 64, size, 96);
        if (owlFrame <= 256) {
          owlFrame = 384;
          owlState = "returning";
          return;
        }
        owlFrame -= 256;
        owlX = xCoords + flightDistance;
        return;
      }
      if (owlState == "flying") {
        owlStates();
        ctx.drawImage(owlFlying2, owlFrame, 0, -64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame == 64) {
          owlFrame = 384;
        } else {
          owlFrame -= 64;
        } flightDistance -= 64;
        owlX = xCoords + flightDistance;
        return;
      } if (owlState == "returning") {
        owlStates();
        ctx.drawImage(owlFlying2, owlFrame, 0, -64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame == 64) {
          owlFrame = 384;
        } else {
          owlFrame -= 64;
        } flightDistance -= 64;
        owlX = xCoords + flightDistance;
        return;
      } if (owlState == "idle") {
        owlStates();
        ctx.drawImage(owlFlying2, owlFrame, 0, -64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame == 64) {
          owlFrame = 384;
        } else {
          owlFrame -= 64;
        }
      }
    }
  } return;
}

let Objects = {
}

let snekCollider = {
  x: 0,
  y: 0,
}

let objLength = 0;
let isColliding = 0;
let arrX = [];
let arrY = [];
let arrType = [];

function enemyCollisions() {
  if (map == "autumnForest") {
    if (owlState == "attacking") {
      setTimeout((() => {
        if (snekCollider.x == owlX || snekCollider.x == owlX + 32) {
          if (snekCollider.y == lockedY) {
            killSnake();
          }
        } if (snekCoords.snekHead.x == owlX || snekCoords.snekHead.x == owlX + 32) {
          if (snekCoords.snekHead.y == lockedY) {
            killSnake();
          }
        } if (snekCoords.snekLength.x == owlX || snekCoords.snekLength.x == owlX + 32) {
          if (snekCoords.snekLength.y == lockedY) {
            killSnake();
          }
        } if (snekCoords.snekEnd.x == owlX || snekCoords.snekEnd.x == owlX + 32) {
          if (snekCoords.snekEnd.y == lockedY) {
            killSnake();
          }
        }
      }), 350)
    }
    if (snekCollider.x == Objects[1].x || snekCollider.x == Objects[1].x + 32 ||
      snekCollider.x == Objects[1].x + 64 || snekCollider.x == Objects[1].x + 96) {
      if (snekCollider.y == Objects[1].y || snekCollider.y == Objects[1].y + 32) {
        killSnake();
      }
    } if (snekCoords.snekHead.x == Objects[1].x || snekCoords.snekHead.x == Objects[1].x + 32 ||
      snekCoords.snekHead.x == Objects[1].x + 64 || snekCoords.snekHead.x == Objects[1].x + 96) {
      if (snekCoords.snekHead.y == Objects[1].y || snekCoords.snekHead.y == Objects[1].y + 32) {
        killSnake();
      }
    } if (snekCoords.snekLength.x == Objects[1].x || snekCoords.snekLength.x == Objects[1].x + 32 ||
      snekCoords.snekLength.x == Objects[1].x + 64 || snekCoords.snekLength.x == Objects[1].x + 96) {
      if (snekCoords.snekLength.y == Objects[1].y || snekCoords.snekLength.y == Objects[1].y + 32) {
        killSnake();
      }
    } if (snekCoords.snekEnd.x == Objects[1].x || snekCoords.snekEnd.x == Objects[1].x + 32 ||
      snekCoords.snekEnd.x == Objects[1].x + 64 || snekCoords.snekEnd.x == Objects[1].x + 96) {
      if (snekCoords.snekEnd.y == Objects[1].y || snekCoords.snekEnd.y == Objects[1].y + 32) {
        killSnake();
      }
    }
    if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCollider.x == Objects[1].x + 128 || snekCollider.x == Objects[1].x + 160) {
          if (snekCollider.y == 128 || snekCollider.y == 160 ||
            snekCollider.y == 96 || snekCollider.y == 192) {
            killSnake();
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekHead.x == Objects[1].x + 128 || snekCoords.snekHead.x == Objects[1].x + 160) {
          if (snekCoords.snekHead.y == 128 || snekCoords.snekHead.y == 160 ||
            snekCoords.snekHead.y == 96 || snekCoords.snekHead.y == 192) {
            killSnake();
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekLength.x == Objects[1].x + 128 || snekCoords.snekLength.x == Objects[1].x + 160) {
          if (snekCoords.snekLength.y == 128 || snekCoords.snekLength.y == 160 ||
            snekCoords.snekLength.y == 96 || snekCoords.snekLength.y == 192) {
            killSnake();
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekEnd.x == Objects[1].x + 128 || snekCoords.snekEnd.x == Objects[1].x + 160) {
          if (snekCoords.snekEnd.y == 128 || snekCoords.snekEnd.y == 160 ||
            snekCoords.snekEnd.y == 96 || snekCoords.snekEnd.y == 192) {
            killSnake();
          }
        }
      }), 250);
      return;
    }
  } if (map == "forest") {
    if (snekCollider.x == Objects[1].x || snekCollider.x == Objects[1].x + 32 ||
      snekCollider.x == Objects[1].x + 64 || snekCollider.x == Objects[1].x + 96) {
      if (snekCollider.y == Objects[1].y || snekCollider.y == Objects[1].y + 32) {
        killSnake();
      }
    } if (snekCoords.snekHead.x == Objects[1].x || snekCoords.snekHead.x == Objects[1].x + 32 ||
      snekCoords.snekHead.x == Objects[1].x + 64 || snekCoords.snekHead.x == Objects[1].x + 96) {
      if (snekCoords.snekHead.y == Objects[1].y || snekCoords.snekHead.y == Objects[1].y + 32) {
        killSnake();
      }
    } if (snekCoords.snekLength.x == Objects[1].x || snekCoords.snekLength.x == Objects[1].x + 32 ||
      snekCoords.snekLength.x == Objects[1].x + 64 || snekCoords.snekLength.x == Objects[1].x + 96) {
      if (snekCoords.snekLength.y == Objects[1].y || snekCoords.snekLength.y == Objects[1].y + 32) {
        killSnake();
      }
    } if (snekCoords.snekEnd.x == Objects[1].x || snekCoords.snekEnd.x == Objects[1].x + 32 ||
      snekCoords.snekEnd.x == Objects[1].x + 64 || snekCoords.snekEnd.x == Objects[1].x + 96) {
      if (snekCoords.snekEnd.y == Objects[1].y || snekCoords.snekEnd.y == Objects[1].y + 32) {
        killSnake();
      }
    }
    if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCollider.x == Objects[1].x + 128 || snekCollider.x == Objects[1].x + 160) {
          if (snekCollider.y == 160 || snekCollider.y == 192 ||
            snekCollider.y == 224 || snekCollider.y == 96) {
            killSnake();
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekHead.x == Objects[1].x + 128 || snekCoords.snekHead.x == Objects[1].x + 160) {
          if (snekCoords.snekHead.y == 160 || snekCoords.snekHead.y == 192 ||
            snekCoords.snekHead.y == 224 || snekCoords.snekHead.y == 96) {
            killSnake();
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekLength.x == Objects[1].x + 128 || snekCoords.snekLength.x == Objects[1].x + 160) {
          if (snekCoords.snekLength.y == 160 || snekCoords.snekLength.y == 192 ||
            snekCoords.snekLength.y == 224 || snekCoords.snekLength.y == 96) {
            killSnake();
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekEnd.x == Objects[1].x + 128 || snekCoords.snekEnd.x == Objects[1].x + 160) {
          if (snekCoords.snekEnd.y == 160 || snekCoords.snekEnd.y == 192 ||
            snekCoords.snekEnd.y == 224 || snekCoords.snekEnd.y == 96) {
            killSnake();
          }
        }
      }), 250);
      return;
    }
  } if (map == "cliffsides") {
    if (owlState == "attacking") {
      setTimeout((() => {
        if (snekCollider.x == owlX || snekCollider.x == owlX + 32) {
          if (snekCollider.y == lockedY) {
            killSnake();
          }
        } if (snekCoords.snekHead.x == owlX || snekCoords.snekHead.x == owlX + 32) {
          if (snekCoords.snekHead.y == lockedY) {
            killSnake();
          }
        } if (snekCoords.snekLength.x == owlX || snekCoords.snekLength.x == owlX + 32) {
          if (snekCoords.snekLength.y == lockedY) {
            killSnake();
          }
        } if (snekCoords.snekEnd.x == owlX || snekCoords.snekEnd.x == owlX + 32) {
          if (snekCoords.snekEnd.y == lockedY) {
            killSnake();
          }
        }
      }), 350)
    }
  }
}

function checkCollision() {
  objLength = 0;
  isColliding = false;
  for (let values in Objects) {
    objLength++;
  } for (let x = 1; x <= objLength; x++) {
    arrX.push(Objects[x].x);
    arrY.push(Objects[x].y);
    arrType.push(Objects[x].type);
  } for (let x = 1; x <= objLength; x++) {
    if (arrType[x] == "1x2") {
      if (snekCollider.x == arrX[x] || snekCollider.x == arrX[x] + 32) {
        if (snekCollider.y == arrY[x]) {
          isColliding = true;
        }
      }
    } if (arrType[x] == "2x2") {
      if (snekCollider.x == arrX[x] || snekCollider.x == arrX[x] + 32) {
        if (snekCollider.y == arrY[x] || snekCollider.y == arrY[x] + 32) {
          isColliding = true;
        }
      }
    } if (arrType[x] == "4x2") {
      if (snekCollider.x == arrX[x] || snekCollider.x == arrX[x] + 32 ||
        snekCollider.x == arrX[x] + 64 || snekCollider.x == arrX[x] + 96) {
        if (snekCollider.y == arrY[x] || snekCollider.y == arrY[x] + 32) {
          isColliding = true;
        }
      }
    } if (arrType[x] == "4x2") {
      if (snekCoords.snekEnd.x == arrX[x] || snekCoords.snekEnd.x == arrX[x] + 32 ||
        snekCoords.snekEnd.x == arrX[x] + 64 || snekCoords.snekEnd.x == arrX[x] + 96) {
        if (snekCoords.snekEnd.y == arrY[x] || snekCoords.snekEnd.y == arrY[x] + 32) {
          isColliding = true;
        }
      }
    } if (arrType[x] == "4x2") {
      if (snekCoords.snekHead.x == arrX[x] || snekCoords.snekHead.x == arrX[x] + 32 ||
        snekCoords.snekHead.x == arrX[x] + 64 || snekCoords.snekHead.x == arrX[x] + 96) {
        if (snekCoords.snekHead.y == arrY[x] || snekCoords.snekHead.y == arrY[x] + 32) {
          isColliding = true;
        }
      }
    } if (arrType[x] == "4x2") {
      if (snekCoords.snekLength.x == arrX[x] || snekCoords.snekLength.x == arrX[x] + 32 ||
        snekCoords.snekLength.x == arrX[x] + 64 || snekCoords.snekLength.x == arrX[x] + 96) {
        if (snekCoords.snekLength.y == arrY[x] || snekCoords.snekLength.y == arrY[x] + 32) {
          isColliding = true;
        }
      }
    } if (arrType[x] == "3x16") {
      if (snekCollider.x == arrX[x] || snekCollider.x == arrX[x] + 32 ||
        snekCollider.x == arrX[x] + 64) {
        isColliding = true;
      }
    }
  }

}

function updateSnekCollider() {
  if (snekDirection == "left") {
    snekCollider.x = snekCoords.snekHead.x - 32;
    snekCollider.y = snekCoords.snekHead.y;
    if (snekCollider.x == -32) {
      snekCollider.x = 480;
    }
  } if (snekDirection == "down") {
    snekCollider.x = snekCoords.snekHead.x;
    snekCollider.y = snekCoords.snekHead.y + 32;
    if (snekCollider.y == 512) {
      snekCollider.y = 0;
    }
  } if (snekDirection == "right") {
    snekCollider.x = snekCoords.snekHead.x + 32;
    snekCollider.y = snekCoords.snekHead.y;
    if (snekCollider.x == 512) {
      snekCollider.x = 0;
    }
  } if (snekDirection == "up") {
    snekCollider.x = snekCoords.snekHead.x;
    snekCollider.y = snekCoords.snekHead.y - 32;
    if (snekCollider.y == -32) {
      snekCollider.y = 480;
    }
  }
  // console.log(snekCollider);
}

let deaths = 0;

function killSnake() {
  deaths++;
  snekCoords.snekHead.x = 224;
  snekCoords.snekHead.y = 224;
  snekCoords.snekLength.x = 256;
  snekCoords.snekLength.y = 224;
  snekCoords.snekEnd.x = 288;
  snekCoords.snekEnd.y = 224;
  snekDirection = "left";
  oldDirection = "left";
  drawStage = 0;
  drawStage2 = 0;
  drawStage3 = 0;
  mapScore = 0;
  let sfx1 = new Audio('/Death.mp3');
  sfx1.play();
  // setTimeout(() => { alert("You Died! Try Again"); }, 50);
}

function mapBoundaries(type) {
  if (type == "walls") {
    if (snekCoords.snekHead.x == 0 || snekCoords.snekHead.x == 512) {
      isColliding = true;
    } if (snekCoords.snekHead.y == 512 || snekCoords.snekHead.y == 0) {
      isColliding = true;
    }
  } if (type == "pacman") {
    if (snekCoords.snekHead.x == -32 && snekDirection == "left" || snekCoords.snekHead.x < -32 &&
      snekDirection == "left") {
      snekCoords.snekHead.x = 512;
      snekDirection = "left";
    } if (snekCoords.snekHead.x == 512 && snekDirection == "right" || snekCoords.snekHead.x > 512 &&
      snekDirection == "right") {
      snekCoords.snekHead.x = -32;
      snekDirection = "right";
    } if (snekCoords.snekHead.y == -32 && snekDirection == "up" || snekCoords.snekHead.y < -32 &&
      snekDirection == "up") {
      snekCoords.snekHead.y = 512;
      snekDirection = "up";
    } if (snekCoords.snekHead.y == 512 && snekDirection == "down" || snekCoords.snekHead.y == 512 &&
      snekDirection == "down") {
      snekCoords.snekHead.y = -32;
      snekDirection = "down";
    } if (snekCoords.snekHead.x == -32 && snekDirection == "up" || snekCoords.snekHead.x == -32 &&
      snekDirection == "left") {
      snekCoords.snekHead.x = 512;
      snekDirection = "left";
    } if (snekCoords.snekHead.x == 512 && snekDirection == "up" || snekCoords.snekHead.x == 512 &&
      snekDirection == "down") {
      snekCoords.snekHead.x = -32;
      snekDirection = "right";
    } if (snekCoords.snekHead.y == -32 && snekDirection == "left" || snekCoords.snekHead.y == -32 &&
      snekDirection == "right") {
      snekCoords.snekHead.y = 512;
      snekDirection = "up";
    } if (snekCoords.snekHead.y == 512 && snekDirection == "left" || snekCoords.snekHead.y == 512 &&
      snekDirection == "right") {
      snekCoords.snekHead.y = -32;
      snekDirection = "down";
    } if (snekCoords.snekHead.x == -32 && snekDirection == "up" ||
      snekDirection == "down" && snekCoords.snekHead.x == -32) {
      snekCoords.snekHead.x = 512;
      snekDirection = "left";
    }
  }
}

let mapScore = 0;
let scoreText = document.getElementById('scoreText');
let requiredScore = 20;

function updateScore() {
  scoreText.textContent = 'Score:\n' + mapScore + '/' + requiredScore;
}

function foodCollisions(y) {
  for (let x = 1; x <= objLength; x++) {
    if (map == "forest") {
      if (foods[`food${y}`].spawnLocationX == 0 || foods[`food${y}`].spawnLocationX == 32 ||
        foods[`food${y}`].spawnLocationX == 64 || foods[`food${y}`].spawnLocationX == 96 ||
        foods[`food${y}`].spawnLocationX == 128 || foods[`food${y}`].spawnLocationX == 160
        || foods[`food${y}`].spawnLocationX == 192 || foods[`food${y}`].spawnLocationX == 224
        || foods[`food${y}`].spawnLocationX == 256
      ) {
        if (foods[`food${y}`].spawnLocationY == 160 || foods[`food${y}`].spawnLocationY == 192) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
        }
      }
    } if (map == "autumnForest") {
      if (foods[`food${y}`].spawnLocationX >= 0) {
        if (foods[`food${y}`].spawnLocationY == 128 || foods[`food${y}`].spawnLocationY == 160) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
        }
      }
    }
    if (arrType[x] == "1x2") {
      if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32) {
        if (foods[`food${y}`].spawnLocationY == arrY[x] || foods[`food${y}`.spawnLocationY == arrY[x] + 32]) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
          // console.log("foodCollisions run!")
          foodOnSnek(y);
        }
      }
    } if (arrType[x] == "4x2") {
      if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32 ||
        foods[`food${y}`].spawnLocationX == arrX[x] + 64 || foods[`food${y}`].spawnLocationX == arrX[x] + 96) {
        if (foods[`food${y}`].spawnLocationY == arrY[x] || foods[`food${y}`].spawnLocationY == arrY[x] + 32) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
          // console.log("foodCollisions run!")
          foodOnSnek(y);
        }
      }
    } if (arrType[x] == "3x16") {
      if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32 ||
        foods[`food${y}`].spawnLocationX == arrX[x] + 64) {
        foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
        foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
        // console.log("foodCollisions run!")
        foodOnSnek(y);
      }
    }
  }
}

function foodOnFood(food) {
  if (food == 1) {
    if (foods.food1.spawnLocationX == foods.food2.spawnLocationX ||
      foods.food1.spawnLocationX == foods.food3.spawnLocationX ||
      foods.food1.spawnLocationX == foods.food4.spawnLocationX) {
      if (foods.food1.spawnLocationY == foods.food2.spawnLocationY ||
        foods.food1.spawnLocationY == foods.food3.spawnLocationY ||
        foods.food1.spawnLocationY == foods.food4.spawnLocationY) {
        if (foods.food1.eaten == true) {
          return;
        }
        foods.food1.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
        foods.food1.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
      }
    }
  } if (food == 2) {
    if (foods.food2.spawnLocationX == foods.food1.spawnLocationX ||
      foods.food2.spawnLocationX == foods.food3.spawnLocationX ||
      foods.food2.spawnLocationX == foods.food4.spawnLocationX) {
      if (foods.food2.spawnLocationY == foods.food1.spawnLocationY ||
        foods.food2.spawnLocationY == foods.food3.spawnLocationY ||
        foods.food2.spawnLocationY == foods.food4.spawnLocationY) {
        if (foods.food1.eaten == true) {
          return;
        }
        foods.food2.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
        foods.food2.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
      }
    }
  } if (food == 3) {
    if (foods.food3.spawnLocationX == foods.food2.spawnLocationX ||
      foods.food3.spawnLocationX == foods.food1.spawnLocationX ||
      foods.food3.spawnLocationX == foods.food4.spawnLocationX) {
      if (foods.food3.spawnLocationY == foods.food2.spawnLocationY ||
        foods.food3.spawnLocationY == foods.food1.spawnLocationY ||
        foods.food3.spawnLocationY == foods.food4.spawnLocationY) {
        if (foods.food1.eaten == true) {
          return;
        }
        foods.food3.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
        foods.food3.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
      }
    }
  } if (food == 4) {
    if (foods.food4.spawnLocationX == foods.food2.spawnLocationX ||
      foods.food4.spawnLocationX == foods.food3.spawnLocationX ||
      foods.food4.spawnLocationX == foods.food1.spawnLocationX) {
      if (foods.food4.spawnLocationY == foods.food2.spawnLocationY ||
        foods.food4.spawnLocationY == foods.food3.spawnLocationY ||
        foods.food4.spawnLocationY == foods.food1.spawnLocationY) {
        if (foods.food1.eaten == true) {
          return;
        }
        foods.food4.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
        foods.food4.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
      }
    }
  }
  // console.log(`foodOnFood(${food})`);
}

function foodOnSnek(x) {
  if (foods[`food${x}`].spawnLocationX == snekCoords.snekHead.x &&
    foods[`food${x}`].spawnLocationY == snekCoords.snekHead.y) {
    foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
    foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
    // console.log("foodOnSnekHead run!")
    foodOnSnek(x);
    foodCollisions(x);
    foodOnFood(x);
    foodTimer(x);
  } if (foods[`food${x}`].spawnLocationX == snekCoords.snekLength.x &&
    foods[`food${x}`].spawnLocationY == snekCoords.snekLength.y) {
    foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
    foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
    // console.log("foodOnSnekLength run!")
    foodOnSnek(x);
    foodCollisions(x);
    foodOnFood(x);
    foodTimer(x);
  } if (foods[`food${x}`].spawnLocationX == snekCoords.snekEnd.x &&
    foods[`food${x}`].spawnLocationY == snekCoords.snekEnd.y) {
    foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
    foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
    // console.log("foodOnSnekEnd run!")
    foodOnSnek(x);
    foodCollisions(x);
    foodOnFood(x);
    foodTimer(x);
  }
}

let song1 = new Audio('/grandTheme.mp3');
let song2 = new Audio('/Forest Troubles.mp3');
let song3 = new Audio('/guitarSong.mp3');
let track = new Audio('/Snek OST.mp3')
let sfx1 = new Audio('/Death.mp3');
let sfx2 = new Audio('/Eat.mp3');

function music(song) {
  track.play();
}

setInterval(music, 0)

let eggTimer = 7500;

function foodTimer(x) {
  if (foods[`food${x}`].foodType <= 10 && foods[`food${x}`].eaten == false) {
    setTimeout((() => {
      if (foods[`food${x}`].eaten == true) {
        return;
      } if (foods[`food${x}`].foodType > 10 && foods[`food${x}`].eaten == false) {
        return;
      } if (foods[`food${x}`].eaten == true) {
        return;
      }
      foods[`food${x}`].spawnLocationX = -512;
      setTimeout(respawnFood, 3500, x)
    }), eggTimer)
    console.log("foodTimer run!");
  }
}

function respawnFood(foodNum) {
  foods[`food${foodNum}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
  foods[`food${foodNum}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
  foods[`food${foodNum}`].foodType = Math.floor(Math.random() * 10) * 10;
  foods[`food${foodNum}`].eaten = false;
  foodOnSnek(foodNum);
  foodOnFood(foodNum);
  foodTimer(foodNum);
}

for (let x = 1; x <= 4; x++) {
  foodOnSnek(x);
  foodOnFood(x);
  foodTimer(x);
  foodCollisions(x);
}

setTimeout((() => { /* setInterval(snek, 1000 / 5); */ snek(); }), 2900);
let updateSpeed2 = 0.1;

setTimeout((() => {
  let updateSpeed = prompt("Choose your speed: Easy: 3.5, Normal: 4.5 and Hard: 5.5 or customize it");
  parseInt(updateSpeed, 10);
  if (updateSpeed <= 10 && updateSpeed > 0) {
    updateSpeed2 = updateSpeed;
    setInterval(snek, 1000 / updateSpeed2);
    setTimeout((() => {
      if (updateSpeed2 <= 3.5) {
        eggTimer = 15000;
      }
    }), 0);
  } else {
    while (updateSpeed !== 1 || updateSpeed == 2 || updateSpeed == 3 || updateSpeed == 5 ||
      updateSpeed == 6 || updateSpeed == 7 || updateSpeed == 8 || updateSpeed == 9 || updateSpeed == 10) {
      let updateSpeed = prompt("Choose your speed: Easy: 3.5, Normal: 4.5 and Hard: 5.5 or customize it");
      parseInt(updateSpeed, 10);
      if (updateSpeed > 0 && updateSpeed <= 10) {
        updateSpeed2 = updateSpeed;
        setInterval(snek, 1000 / updateSpeed2);
        setTimeout((() => {
          if (updateSpeed2 <= 3.5) {
            eggTimer = 15000;
          }
        }), 0);
        break;
      }
    }
  }
}), 3150);

// }

/*
let encoder = new TextEncoder();
let binary = encoder.encode(prompt("Put in something you'd like to Encode"))
let decoder = new TextDecoder()
alert(`Binary: ${binary}`)
alert(` Decoded: ${decoder.decode(binary)}`);
*/
