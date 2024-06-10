let games = document.querySelector('.games');
let dropdown = document.querySelector('.games-dropdown');
let dropdownA = document.querySelector('.games-dropdown a');
let angle = document.querySelector('.turn-angle');
angle.style.transform = "rotateZ(0deg)";
let playbox = document.querySelector('.playbox');
let gameSnek = document.querySelector('.container-game');
playbox.style.transform = "scale(100%)";
playbox.onclick = function play() {
  playbox.style.transform = "scale(0%)";
  gameStop = false;
  runSnek();
  setTimeout((() => {
  gameSnek.style.transform = "scale(143.5%)";
  gameSnek.style.zIndex = "22";
  trackStop = false;
}), 550);
}

// Scaling Code here



function gamesEnter() {
    angle.style.transform = "rotateZ(90deg)";
    dropdown.style.filter = "opacity(100%)";
    dropdown.style.transform = "scaleY(100%)"
    dropdownA.style.filter = "opacity(100%)";
    dropdownA.style.transform = "scaleY(100%)";
}

function gamesLeave() {
    angle.style.transform = "rotateZ(0deg)";
    dropdown.style.filter = "opacity(0%)";
    dropdown.style.transform = "scaleY(0%)"
    dropdownA.style.filter = "opacity(0%)";
    dropdownA.style.transform = "scaleY(0%)"
}


dropdown.onmouseenter = gamesEnter;
games.onmouseenter = gamesEnter;
angle.onmouseenter = gamesEnter;
let gamesCopy = document.querySelector('.games');
let dropdownCopy = document.querySelector('.games-dropdown');
let angleCopy = document.querySelector('.turn-angle');
dropdownCopy.onmouseleave = gamesLeave;
gamesCopy.onmouseleave = gamesLeave;
angleCopy.onmouseleave = gamesLeave;



let contact = document.querySelector('.contact');
let dropdownC = document.querySelector('.contact-dropdown');
let dropdownCA = document.querySelector('.contact-dropdown a');
let angle2 = document.querySelector('.turn-angle-2');
let dropdownCA2 = document.querySelector('.contact-dropdown a:last-child');
angle2.style.transform = "rotateZ(0deg)";

function contactEnter() {
    angle2.style.transform = "rotateZ(90deg)";
    dropdownC.style.filter = "opacity(100%)";
    dropdownC.style.transform = "scaleY(100%)"
    dropdownCA.style.filter = "opacity(100%)";
    dropdownCA.style.transform = "scaleY(100%)";
    dropdownCA2.style.filter = "opacity(100%)";
    dropdownCA2.style.transform = "scaleY(100%)";
}

function contactLeave() {
    angle2.style.transform = "rotateZ(0deg)";
    dropdownC.style.filter = "opacity(0%)";
    dropdownC.style.transform = "scaleY(0%)"
    dropdownCA.style.filter = "opacity(0%)";
    dropdownCA.style.transform = "scaleY(0%)";
    dropdownCA2.style.filter = "opacity(0%)";
    dropdownCA2.style.transform = "scaleY(0%)";
}


dropdownC.onmouseenter = contactEnter;
contact.onmouseenter = contactEnter;
angle2.onmouseenter = contactEnter;
let contactCopy = document.querySelector('.contact');
let dropdownCopy2 = document.querySelector('.contact-dropdown');
let angleCopy2 = document.querySelector('.turn-angle-2');
dropdownCopy2.onmouseleave = contactLeave;
contactCopy.onmouseleave = contactLeave;
angleCopy2.onmouseleave = contactLeave;



// {

let snekGame = document.querySelector('.game');

setTimeout((() => { snekGame.style.backgroundImage = 'url(/meadowGrass.png)';
inGame = true; }), 3000);

// Movement Code

let moveDir = "left";
let movementY = 0;
let movementX = 0;

/*
setInterval(movement, 350)
*/

/* let audio = new Audio('/flash.wav');
audio.play(); */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
let image = new Image();
let image2 = new Image();
let image3 = new Image();
image.src = '/SnekHeads.png';
image2.src = '/SnekLengths.png';
image3.src = '/SnekEnds.png';

let snekCoords = {
  snekHead: {
    x: 416,
    y: 224,
    old: {
      x: 416,
      y: 224,
    },
  }, snekLength: {
    x: 448,
    y: 224,
    old: {
      x: 448,
      y: 224,
    },
  }, snekEnd: {
    x: 480,
    y: 224,
    old: {
      x: 480,
      y: 224,
    }
  },
}
let snekDirection = "left";
let oldDirection = "left"
let moved = false;
let movementQueue = "";
let flashActive = false;
let flashNum = 0;
let flashReady = true;
let flashCount = 0;
let inGame = false;


function flash() {
  if (flashReady == true) {
    if (inGame) {
      if (flashCount == 0) {
        return;
      } if (flashNum !== 0) {
        return;
      }
      console.log(`FlashCount ${flashCount}`);
     flashReady = false;
    flashActive = true;
      } else {
        flashCount = 1;
        return;
      }
    } else {
      flashCount = 1;
      return;
    }
  }

document.onkeydown = function controls(e) {
  if (e.key == 'q' && flashReady || e.key == "Q" && flashReady || e.key == "PageUp" && flashReady) {
    flashCount++;
    if (flashCount == 1) {
    setTimeout((() => { flash(); }), 100);
    } else {
      console.log("Failed Here Flash Count: " + flashCount)
    }
  } if (e.key == 'a' && snekDirection !== "right" && moved == false
    || e.key == 'ArrowLeft' && snekDirection !== "right" && moved == false ||
    e.key == 'A' && snekDirection !== "right" && moved == false) {
    // snekDirection = "left";
        movementQueue = "";
    movementQueue = "left";
       moved = true;
    mapBoundaries(boundaryType);
    return;
  } if (e.key == 'd' && snekDirection !== "left" && moved == false
    || e.key == 'ArrowRight' && snekDirection !== "left" && moved == false ||
    e.key == "D" && snekDirection !== "left" && moved == false) {
        // snekDirection = "right";
        movementQueue = "";      
        movementQueue = "right"
        moved = true;
        mapBoundaries(boundaryType);
        return;
  } if (e.key == 's' && snekDirection !== "up" && moved == false
    || e.key == 'ArrowDown' && snekDirection !== "up" && moved == false ||
    e.key == 'S' && snekDirection !== "up" && moved == false) {
        // snekDirection = "down";
        movementQueue = "";     
        movementQueue = "down"
        moved = true;
        mapBoundaries(boundaryType);
        return;
  } if (e.key == 'w' && snekDirection !== "down" && moved == false
    || e.key == 'ArrowUp' && snekDirection !== "down" && moved == false ||
    e.key == 'W' && snekDirection !== "up" && moved == false) {
        // snekDirection = "up";
        movementQueue = "";      
        movementQueue = "up"
        moved = true;
        mapBoundaries(boundaryType);
        return;
  } /* if (moved = true || snekCoords.snekHead.x % 32 !== 0) {
    if (e.key == 'w' || e.key == 'ArrowUp' || e.key == 'W') {
      if (movementQueues[1] == snekDirection) {
        return;
      }
        if (movementQueue[0] == movementQueue[1]) {
          return;
        }
        movementQueue.unshift("up");
        if (movementQueue.length == movementQueueLimit) {
          movementQueue.shift();
          mapBoundaries(boundaryType);             
        }
    } if (e.key == 'a' || e.key == 'ArrowLeft' || e.key == 'A') {
      if (movementQueues[1] == snekDirection) {
        return;
      }
        if (movementQueue[0] == movementQueue[1]) {
          return;
        }
        movementQueue.unshift("left");
        if (movementQueue.length == movementQueueLimit) {
          movementQueue.shift();
          mapBoundaries(boundaryType);             
        }
    } if (e.key == 'd' || e.key == 'ArrowRight' || e.key == 'D') {
      if (movementQueues[1] == snekDirection) {
        return;
      }
        if (movementQueue[0] == movementQueue[1]) {
          return;
        }
        movementQueue.unshift("right");
        if (movementQueue.length == movementQueueLimit) {
          movementQueue.shift();
          mapBoundaries(boundaryType);             
        }
    } if (e.key == 's' || e.key == 'ArrowDown' || e.key == 'S') {
      if (movementQueues[1] == snekDirection) {
        return;
      }
        if (movementQueue[0] == movementQueue[1]) {
          return;
        }
        movementQueue.unshift("down");
        if (movementQueue.length == movementQueueLimit) {
          movementQueue.shift();
          mapBoundaries(boundaryType);            
        }
    }
  } */ if (e.key == "Escape"
  || e.key == "Delete") {
    let playbox = document.querySelector('.playbox');
    let gameSnek = document.querySelector('.container-game');
    document.exitFullscreen();
    trackStop = true;
    gameStop = true;
    gameSnek.style.transform = "scale(0%)";
    setTimeout((() => {
    playbox.style.transform = "scale(100%)";
    setTimeout((() => {
    gameSnek.style.zIndex = "-1";
  }), 250);
  }), 550);
  }
}

let gameStop = false;

let movementQueueLimit = 1;

function movementQueues() {
  let gridCheckX = snekCoords.snekHead.x;
  let gridCheckY = snekCoords.snekHead.y;
  if (movementQueue.length > 0) {
    while (gridCheckX > 0) {
      gridCheckX -= 32;
    } while (gridCheckY > 0) {
      gridCheckY -= 32;
    } if (gridCheckX == 0) {
      if (gridCheckY == 0) {
    snekDirection = movementQueue;
    movementQueue = "";
    checkCollision();
   mapBoundaries(boundaryType);
   return;
      }
    }
  }
}

mapWon = false;

let map = "meadows";
let flashCoolNum = 30;

function flashTimer() {
    let interval = setInterval((() => {
    if (flashCoolNum == 0) {
      clearInterval(interval);
      return;
    } flashCoolNum--;
  }), 1000);
}

let flashSound = new Audio("/flash.wav");

function turnSound() {
  let turnSound1 = new Audio("/TurnLeft.mp3")
  let turnSound2 = new Audio("/TurnDown.mp3")
  let turnSound3 = new Audio("/TurnRight.mp3")
  let turnSound4 = new Audio("/TurnUp.mp3")
  if (snekDirection !== oldDirection) {
    if (snekDirection == "left") {
      turnSound1.play();
    } if (snekDirection == "down") {
      turnSound2.play();
    } if (snekDirection == "right") {
      turnSound3.play();
    } if (snekDirection == "up") {
      turnSound4.play();
    }
  }
}

function snek() {
  if (gameStop == true) {
    clearInterval(snekGameLoop);
    return;
  }
  checkWin();
  if (mapWon == true) {
    return;
  } mapBoundaries(boundaryType);
  // turnSound();
  if (flashActive) {
    if (flashNum == 0) {
      setTimeout((() => {
      flashActive = false;
      flashNum = 0;
      flashReady = true;
      flashCount = 0;
      }), 30000)
      flashSound.play();
      setTimeout((() => {
        flashCoolNum = 30;
      flashTimer();
    }), 2500);
    }
  setTimeout((() => {
    flashNum = 0;
    flashActive = false;
    flashReady = false;
  }), 2500);
  flashNum++;
  }
  moved = false;
  drawFrame++;
  drawFrameStatic++;
  // Temp fix below
  drawFrame = 16;
  drawFrameStatic = 32;
  movementQueues();
  if (drawFrameStatic == 32) {
    ctx.clearRect(0, 0, canvas3.width, canvas3.height);
  } if (drawFrame == 16) {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  } ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  for (let x = 1; x < 5; x++) {
    foodCollisions(x);
  }
  if (map == "cliffsides") {
    ctx.filter = "brightness(80%)";
    drawSnek();
    if (drawFrame == 16) {
    drawFood();
    }
    ctx.filter = "brightness(100%)";
  } else {
    drawSnek();
    if (drawFrame == 16)
    drawFood();
  }
  updateSnekCollider();
  moveSnek();
  // windCycle();
  if (drawFrameStatic == 32) {
  drawObjects();
  drawFrameStatic = 0;
  }
  enemyCollisions();
  foodGui();
}

let drawFrame = 15;
let drawFrameStatic = 31;

let windCycleNum = 0;
let windCycleTransition = false;
let windCycleActive = false;
let windCycleDelay = 1500;



function windCycle() {
  if (windCycleActive) {
    return;
  }
  if (windCycleTransition) {
    windCycleActive = true;
    setTimeout((() => {
      windCycleNum++;
    windCycleTransition = false;
    windCycleActive = false;
    windCycleActive = false; }), windCycleDelay);
     return;
  }
  if (windCycleNum == 0) {
    windCycleActive = true;
    setTimeout((() => {
     windCycleNum--;
     windCycleActive = false; }), windCycleDelay);
    return;
  } if (windCycleNum == -1) {
    windCycleActive = true;
    setTimeout((() => {
      windCycleNum++;
      windCycleTransition = true;
    windCycleActive = false; }), windCycleDelay);
    return;
  } if (windCycleNum == 1) {
    windCycleActive = true;
    setTimeout((() => {
      windCycleNum--;
      windCycleActive = false; }), windCycleDelay);
     return;
  }
}

let maps = ["meadows", "forest", "autumnForest", "cliffsides", "mountains"];

let mapCount = 0;

function checkWin() {
  if (mapScore >= requiredScore) {
    inGame = false;
    mapScore = 0;
    snekDirection = "left";
    mapCount++;
    map = maps[mapCount];
    setTimeout((() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height,);
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height,);
      ctx3.clearRect(0, 0, canvas3.width, canvas3.height,);
      snekGame.style.backgroundImage = 'url(/snekLoading2-export.gif)';
      mapWon = true;
    }), 50);
    snekCoords.snekHead.x = 416;
    snekCoords.snekHead.y = 224;
    snekCoords.snekLength.x = 448;
    snekCoords.snekLength.y = 224;
    snekCoords.snekEnd.x = 480;
    snekCoords.snekEnd.y = 224;
    Objects = {};
    arrX = [];
    arrY = [];
    arrType = [];
    objCount = 0;
    foxFrame = 0;
    foxState = "returning";
    owlFrame = 0;
    owlDirection = "normal";
    owlX = -64;
    owlState = "idle";
    walkDistance = 0;
    flightDistance = 0;
    flashActive = false;
    flashNum = 0;
    flashReady = true;
    flashCount = 0;
    flashCoolNum = 0;
    foodTimerRespawn4 = "";
    foodTimerRespawn3 = "";
    foodTimerRespawn2 = "";
    foodTimerRespawn1 = "";
    let rockValue2 = Math.floor(Math.random() * 500);
    signY = -160;
    foodGuiActive = false;
    trackStop = true;
    rockValue2 = rockValue;
    drawFrame = 31;
    checkGrid = 15;
    for (let foodNum = 1; foodNum < 5; foodNum++) {
    foods[`food${foodNum}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
    foods[`food${foodNum}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
    foods[`food${foodNum}`].foodType = Math.floor(Math.random() * 10) * 10;
    foods[`food${foodNum}`].eaten = false;
    foodOnSnek(foodNum);
    foodOnFood(foodNum);
    foodTimer(foodNum);
    foodCollisions(foodNum);
    }
    
    clearTimeout(foodTimerRespawn1, foodTimerRespawn2, foodTimerRespawn3, foodTimerRespawn4);
    for (let x = 1; x <= 4; x++) {
      respawnFood(x);
    } if (map == "forest") {
      setTimeout((() => {
        requiredScore = 25;
        snekGame.style.backgroundImage = 'url(/forestGrass3.png)'; mapWon = false;
        setTimeout((() => { inGame = true; movementQueue = ""; trackStop = false;
           track = new Audio("/Forest2.mp3");
        trackStop = false; }), 500);
      }), 7500);
      for (let x = 1; x <= 4; x++) {
        foodOnFood(x);
        foodOnSnek(x);
        foodCollisions(x);
        foodCollisions(x);
      } foxFrame = 0;
      foxState = "idle";
    } if (map == "autumnForest") {
      setTimeout((() => {
        requiredScore = 30;
        snekGame.style.backgroundImage = 'url(/aForestGrass.png)'; mapWon = false;
        owlTimer();
        setTimeout((() => { inGame = true; movementQueue = ""; trackStop = false;
           track = new Audio("/Track4.mp3");
        trackStop = false; }), 500);
      }), 9000);
      for (let x = 1; x <= 4; x++) {
        foodOnFood(x);
        foodOnSnek(x);
        foodCollisions(x);
        foodCollisions(x);
      } foxFrame = 0;
      foxState = "idle";
      owlFrame = 0;
      owlDirection = "normal";
      owlX = -64;
      owlState = "idle";
      walkDistance = 0;
      flightDistance = 0;
    } if (map == "cliffsides") {
      setTimeout((() => {
        requiredScore = 35;
        snekGame.style.backgroundImage = 'url(/cliffgrass.png)'; mapWon = false;
        owlTimer(); setTimeout((() => { inGame = true; movementQueue = ""; trackStop = false;
           track = new Audio("/Track7.mp3"); }), 500);
      }), 7500);
      for (let x = 1; x <= 4; x++) {
        foodOnFood(x);
        foodOnSnek(x);
        foodCollisions(x);
        foodCollisions(x);
      }  foxFrame = 0;
      foxState = "idle";
      owlFrame = 0;
      owlDirection = "normal";
      owlX = -64;
      owlState = "idle";
      walkDistance = 0;
      flightDistance = 0;
    } if (map == "mountains") {
      setTimeout((() => {
        requiredScore = 40;
        snekGame.style.backgroundImage = 'url(/mountaingrass2.png)'; mapWon = false;
        owlTimer(); setTimeout((() => { inGame = true; movementQueue = ""; trackStop = false;
           track = new Audio("/mountains2.mp3"); }), 500);
      }), 7500);
      for (let x = 1; x <= 4; x++) {
        foodOnFood(x);
        foodOnSnek(x);
        foodCollisions(x);
      }  foxFrame = 0;
      foxState = "idle";
      owlFrame = 0;
      owlDirection = "normal";
      owlX = -64;
      owlState = "idle";
      walkDistance = 0;
      flightDistance = 0;
    }
  }
}

let food = new Image();
food.src = '/Foods.png';
let foods = {
  food1: {
    spawnLocationX: Math.floor(Math.random() * 27 + 1) * 32,
    spawnLocationY: Math.floor(Math.random() * 15 + 1) * 32,
    foodType: Math.floor(Math.random() * 10) * 10,
    score: 0,
    eaten: false,
  }, food2: {
    spawnLocationX: Math.floor(Math.random() * 27 + 1) * 32,
    spawnLocationY: Math.floor(Math.random() * 15 + 1) * 32,
    foodType: Math.floor(Math.random() * 10) * 10,
    score: 0,
    eaten: false,
  }, food3: {
    spawnLocationX: Math.floor(Math.random() * 27 + 1) * 32,
    spawnLocationY: Math.floor(Math.random() * 15 + 1) * 32,
    foodType: Math.floor(Math.random() * 10) * 10,
    score: 0,
    eaten: false,
  }, food4: {
    spawnLocationX: Math.floor(Math.random() * 27 + 1) * 32,
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
    if (map == "cliffsides") {
      ctx3.filter = "brightness(80%)";
    }
    if (foods[`food${x}`].foodType >= 70) {
        ctx3.filter = "opacity(50%) brightness(0%)";
        ctx3.drawImage(food, 32, 0, 32, 32, foods[`food${x}`].spawnLocationX + shadowValFood, foods[`food${x}`].spawnLocationY - shadowValFood, 32, 32);
        ctx3.filter = "opacity(100%) brightness(100%)";
        if (map == "cliffsides") {
          ctx3.filter = "brightness(80%)";
        }
      ctx3.drawImage(food, 32, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      foods[`food${x}`].score = 2;
    } if (foods[`food${x}`].foodType <= 10) {
        ctx3.filter = "opacity(50%) brightness(0%)";
        ctx3.drawImage(food, 64, 0, 32, 32, foods[`food${x}`].spawnLocationX + shadowValFood, foods[`food${x}`].spawnLocationY - shadowValFood, 32, 32);
        ctx3.filter = "opacity(100%) brightness(100%)";
        if (map == "cliffsides") {
          ctx3.filter = "brightness(80%)";
        }
      ctx3.drawImage(food, 64, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      foods[`food${x}`].score = 5;
    } if (foods[`food${x}`].foodType > 10 && foods[`food${x}`].foodType < 70) {
        ctx3.filter = "opacity(50%) brightness(0%)";
        ctx3.drawImage(food, 0, 0, 32, 32, foods[`food${x}`].spawnLocationX + shadowValFood, foods[`food${x}`].spawnLocationY - shadowValFood, 32, 32);
        ctx3.filter = "opacity(100%) brightness(100%)";
        if (map == "cliffsides") {
          ctx3.filter = "brightness(80%)";
        }
      ctx3.drawImage(food, 0, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      foods[`food${x}`].score = 1;
    }
  }
  if (map == "cliffsides") {
    ctx3.filter = "brightness(100%)";
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
      if (snekCoords.snekHead.x == foods[`food${x}`].spawnLocationX) {
        if (snekCoords.snekHead.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          if (foodGuiActive == true) {
            foodGuiCancel = true;
          }
          foodGuiActive = true;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten = true;
          ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
          drawFood();
          let sfx2 = new Audio("/Eat.mp3");
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
      /*
      snekCoords.snekHead.x -= 2;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y; */
      oldDirection = "left";
      if (map == "forest" || map == "autumnForest") {
        foxStates();
      }
      return;
    } else {
      if (isDead == true) {
      } else {
      killSnake();
      isDead = true;
      }
      return;
    }
  } if (snekDirection == "right") {
    checkCollision();
    mapBoundaries(boundaryType);
    for (let x = 1; x <= 4; x++) {
      if (snekCoords.snekHead.x == foods[`food${x}`].spawnLocationX) {
        if (snekCoords.snekHead.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          if (foodGuiActive == true) {
            foodGuiCancel = true;
          }
          foodGuiActive = true;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten = true;
          ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
          drawFood();
          let sfx2 = new Audio("/Eat.mp3");
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
      if (isDead == true) {
      } else {
      killSnake();
      isDead = true;
      }
      return;
    }
  } if (snekDirection == "down") {
    checkCollision();
    mapBoundaries(boundaryType);
    for (let x = 1; x <= 4; x++) {
      if (snekCoords.snekHead.x == foods[`food${x}`].spawnLocationX) {
        if (snekCoords.snekHead.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          if (foodGuiActive == true) {
            foodGuiCancel = true;
          }
          foodGuiActive = true;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten = true;
          ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
          drawFood();
          let sfx2 = new Audio("/Eat.mp3");
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
      if (isDead == true) {
      } else {
      killSnake();
      isDead = true;
      }
      return;
    }
  } if (snekDirection == "up") {
    checkCollision();
    mapBoundaries(boundaryType);
    for (let x = 1; x <= 4; x++) {
      if (snekCoords.snekHead.x == foods[`food${x}`].spawnLocationX) {
        if (snekCoords.snekHead.y == foods[`food${x}`].spawnLocationY) {
          mapScore = mapScore + foods[`food${x}`].score;
          if (foodGuiActive == true) {
            foodGuiCancel = true;
          }
          foodGuiActive = true;
          foods[`food${x}`].spawnLocationX = -512;
          foods[`food${x}`].eaten = true;
          ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
          drawFood();
          let sfx2 = new Audio("/Eat.mp3");
          /*
          let sfx2 = 0;
          if (foodCombo == 1) {
            sfx2 = new Audio("/EatA.mp3");
          } if (foodCombo == 2) {
            sfx2 = new Audio("/EatB.mp3");
          } if (foodCombo == 3) {
            sfx2 = new Audio("/EatC.mp3");
          } if (foodCombo == 4) {
            sfx2 = new Audio("/EatD.mp3");
          } foodCombo++;
          if (foodCombo > 4) {
            foodCombo = 1;
          } */
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
      if (isDead == true) {
      } else {
      killSnake();
      isDead = true;
      }
      return;
    }
  }
}

let foodCombo = 1;
let respawnImmunity = false;

let drawStage = 0;
let drawStage2 = 0;
let drawStage3 = 0;
let snekDrawSize = 32;
let snekCutAmount = snekDrawSize - snekDrawSize;
let selectedImage = image;
let selectedImage2 = image2;
let selectedImage3 = image3;
let imageF = new Image();
let imageF2 = new Image();
let imageF3 = new Image();
imageF.src = '/SnekHeadsF.png';
imageF2.src = '/SnekLengthsF.png';
imageF3.src = '/SnekEndsF.png';

function drawSnek2() {
  if (flashNum % 2 == 1) {
    selectedImage = imageF;
    selectedImage2 = imageF2;
    selectedImage3 = imageF3;
  } if (flashActive == false || flashNum % 2 == 0) {
    selectedImage = image;
    selectedImage2 = image2;
    selectedImage3 = image3;
  }
  let tailCheck = false;
  let tailCheck2 = false;
  let tailCheck3 = false;
  // Snek Head
  if (oldDirection == "left") {
    ctx2.filter = "opacity(50%) brightness(0%)";
    ctx2.drawImage(selectedImage, 32, 0, 32, 32, snekCoords.snekHead.x + shadowValSnek, snekCoords.snekHead.y - shadowValSnek, snekDrawSize, snekDrawSize);
    ctx2.filter = "opacity(100%) brightness(100%)";
  } if (oldDirection == "down") {
      ctx2.filter = "opacity(50%) brightness(0%)";
      ctx2.drawImage(selectedImage, 128, 0, 32, 32, snekCoords.snekHead.x + shadowValSnek, snekCoords.snekHead.y - shadowValSnek, snekDrawSize, snekDrawSize);
      ctx2.filter = "opacity(100%) brightness(100%)";
  } if (oldDirection == "right") {
      ctx2.filter = "opacity(50%) brightness(0%)";
      ctx2.drawImage(selectedImage, 96, 0, 32, 32, snekCoords.snekHead.x + shadowValSnek, snekCoords.snekHead.y - shadowValSnek, snekDrawSize, snekDrawSize);
      ctx2.filter = "opacity(100%) brightness(100%)";
  } if (oldDirection == "up") {
      ctx2.filter = "opacity(50%) brightness(0%)";
      ctx2.drawImage(selectedImage, 0, 0, 32, 32, snekCoords.snekHead.x + shadowValSnek, snekCoords.snekHead.y - shadowValSnek, snekDrawSize, snekDrawSize);
      ctx2.filter = "opacity(100%) brightness(100%)";
  }
  // Snek Length
  if (snekCoords.snekHead.x == snekCoords.snekLength.x - 32 || snekCoords.snekHead.x == 896
     && snekCoords.snekLength.x == 0) {
    if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.x == -32) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 0, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 256, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 448, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    }
  } if (snekCoords.snekHead.x == snekCoords.snekLength.x + 32 || oldDirection == "right") {
    if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.x == 896) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 128, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 288, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
      tailCheck3 = true;
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 480, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
      tailCheck2 = true;
    }
  } if (snekCoords.snekHead.y == snekCoords.snekLength.y - 32 || oldDirection == "up") {
    if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 32, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.y == -32 && snekDirection !== "up") {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 480, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.y == 512 && snekDirection !== "up") {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 320, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
      tailCheck = true;
    }
  } if (snekCoords.snekHead.y == snekCoords.snekLength.y + 32 || oldDirection == "down") {
    if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 64, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.x == -32) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 288, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.x == 896) {
          ctx2.filter = "opacity(50%) brightness(0%)";
          ctx2.drawImage(selectedImage2, 384, 0, 32, 32, snekCoords.snekLength.x + shadowValSnek, snekCoords.snekLength.y - shadowValSnek, snekDrawSize, snekDrawSize);
          ctx2.filter = "opacity(100%) brightness(100%)";
      tailCheck = true;
    } 
  }
  
  // Snek End
  if (tailCheck) {
        ctx2.filter = "opacity(50%) brightness(0%)";
        ctx2.drawImage(selectedImage3, 192, 0, 32, 32, snekCoords.snekEnd.x + shadowValSnek, snekCoords.snekEnd.y - shadowValSnek, snekDrawSize, snekDrawSize);
        ctx2.filter = "opacity(100%) brightness(100%)";
    return;
  } if (tailCheck2) {
        ctx2.filter = "opacity(50%) brightness(0%)";
        ctx2.drawImage(selectedImage3, 160, 0, 32, 32, snekCoords.snekEnd.x + shadowValSnek, snekCoords.snekEnd.y - shadowValSnek, snekDrawSize, snekDrawSize);
        ctx2.filter = "opacity(100%) brightness(100%)";
    return;
  } if (tailCheck3) {
        ctx2.filter = "opacity(50%) brightness(0%)";
        ctx2.drawImage(selectedImage3, 128, 0, 32, 32, snekCoords.snekEnd.x + shadowValSnek, snekCoords.snekEnd.y - shadowValSnek, snekDrawSize, snekDrawSize);
        ctx2.filter = "opacity(100%) brightness(100%)";
    return;
  } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 || snekCoords.snekLength.x == 896
    && snekCoords.snekEnd.x == 0) {
        ctx2.filter = "opacity(50%) brightness(0%)";
        ctx2.drawImage(selectedImage3, 32, 0, 32, 32, snekCoords.snekEnd.x + shadowValSnek, snekCoords.snekEnd.y - shadowValSnek, snekDrawSize, snekDrawSize);
        ctx2.filter = "opacity(100%) brightness(100%)";
    return;
  } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 || oldDirection == "right") {
        ctx2.filter = "opacity(50%) brightness(0%)";
        ctx2.drawImage(selectedImage3, 0, 0, 32, 32, snekCoords.snekEnd.x + shadowValSnek, snekCoords.snekEnd.y - shadowValSnek, snekDrawSize, snekDrawSize);
        ctx2.filter = "opacity(100%) brightness(100%)";
    return;
  } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 || oldDirection == "up") {
        ctx2.filter = "opacity(50%) brightness(0%)";
        ctx2.drawImage(selectedImage3, 96, 0, 32, 32, snekCoords.snekEnd.x + shadowValSnek, snekCoords.snekEnd.y - shadowValSnek, snekDrawSize, snekDrawSize);
        ctx2.filter = "opacity(100%) brightness(100%)";
    return;
  } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 || oldDirection == "down") {
        ctx2.filter = "opacity(50%) brightness(0%)";
        ctx2.drawImage(selectedImage3, 64, 0, 32, 32, snekCoords.snekEnd.x + shadowValSnek, snekCoords.snekEnd.y - shadowValSnek, snekDrawSize, snekDrawSize);
        ctx2.filter = "opacity(100%) brightness(100%)";
    return;
  }
}

function drawSnek() {
  if (flashNum % 2 == 1) {
    selectedImage = imageF;
    selectedImage2 = imageF2;
    selectedImage3 = imageF3;
  } if (flashActive == false || flashNum % 2 == 0) {
    selectedImage = image;
    selectedImage2 = image2;
    selectedImage3 = image3;
  }
  let tailCheck = false;
  let tailCheck2 = false;
  let tailCheck3 = false;
  drawSnek2();
  if (map == "cliffsides") {
    ctx2.filter = "brightness(80%)";
  }
  // Snek Head
  if (oldDirection == "left") {
    ctx2.drawImage(selectedImage, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  } if (oldDirection == "down") {
    ctx2.drawImage(selectedImage, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  } if (oldDirection == "right") {
    ctx2.drawImage(selectedImage, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  } if (oldDirection == "up") {
    ctx2.drawImage(selectedImage, 0, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, snekDrawSize, snekDrawSize);
  }
  // Snek Length
  if (snekCoords.snekHead.x == snekCoords.snekLength.x - 32 || snekCoords.snekHead.x == 896
     && snekCoords.snekLength.x == 0) {
    if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.x == -32) {
      ctx2.drawImage(selectedImage2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
      ctx2.drawImage(selectedImage2, 256, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
      ctx2.drawImage(selectedImage2, 448, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    }
  } if (snekCoords.snekHead.x == snekCoords.snekLength.x + 32 || oldDirection == "right") {
    if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.x == 896) {
      ctx2.drawImage(selectedImage2, 128, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
      ctx2.drawImage(selectedImage2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck3 = true;
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
      ctx2.drawImage(selectedImage2, 480, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck2 = true;
    }
  } if (snekCoords.snekHead.y == snekCoords.snekLength.y - 32 || oldDirection == "up") {
    if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
      snekCoords.snekEnd.y == -32) {
      ctx2.drawImage(selectedImage2, 32, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.y == -32 && snekDirection !== "up") {
      ctx2.drawImage(selectedImage2, 480, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.y == 512 && snekDirection !== "up") {
      ctx2.drawImage(selectedImage2, 320, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck = true;
    }
  } if (snekCoords.snekHead.y == snekCoords.snekLength.y + 32 || oldDirection == "down") {
    if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
      snekCoords.snekEnd.y == 512) {
      ctx2.drawImage(selectedImage2, 64, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
      snekCoords.snekEnd.x == -32) {
      ctx2.drawImage(selectedImage2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
      snekCoords.snekEnd.x == 896) {
      ctx2.drawImage(selectedImage2, 384, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, snekDrawSize, snekDrawSize);
      tailCheck = true;
    } 
  }
  
  // Snek End
  if (tailCheck) {
    ctx2.drawImage(selectedImage3, 192, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (tailCheck2) {
    ctx2.drawImage(selectedImage3, 160, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (tailCheck3) {
    ctx2.drawImage(selectedImage3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 || snekCoords.snekLength.x == 896
    && snekCoords.snekEnd.x == 0) {
    ctx2.drawImage(selectedImage3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 || oldDirection == "right") {
    ctx2.drawImage(selectedImage3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 || oldDirection == "up") {
    ctx2.drawImage(selectedImage3, 96, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 || oldDirection == "down") {
    ctx2.drawImage(selectedImage3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, snekDrawSize, snekDrawSize);
    return;
  }
}

let collidables = new Image();
collidables.src = '/collidables.png';
let foxIdle = new Image();
foxIdle.src = '/foxIdle-export.png';
/*
let foxIdleAlt = new Image();
foxIdle2.src = "/foxIdleAlternate-export.png";
*/
let foxWalking = new Image();
foxWalking.src = '/foxWalking.png';
let foxAttacking = new Image();
foxAttacking.src = '/foxAttacking.png'
/*
let foxAttackingAlt = new Image();
foxAttacking.src = "/foxAttackingAlternate.png"
*/
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
    }), 7500);
  } if (map == "cliffsides") {
    setTimeout((() => {
      if (map == "cliffsides") {
        owlState = "flying"; lockedY = snekCoords.snekHead.y; owlFrame = 384;
      }
    }), 2500);
  }
}

function owlStates() {
  if (map == "autumnForest") {
    if (owlDirection == "normal") {
      if (owlState == "flying" && owlX >= 896 || owlState == "returning" && owlX >= 896) {
        owlDirection = "alternate";
        owlState = "idle";
        owlTimer();
        return;
      } if (owlX == snekCoords.snekHead.x && owlState == "flying" ||
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
      if (owlState == "flying" && owlX <= -64 || owlState == "returning" && owlX <= -64) {
        owlState = "idle"
        owlDirection = "normal";
        owlFrame = 0;
        owlTimer();
      }
    }
  } if (map == "cliffsides") {
    if (owlDirection == "normal") {
      if (owlState == "flying" && owlX == 896 || owlState == "returning" && owlX == 896) {
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
  } if (owlX <= -64 || owlX >= 896) {
    lockedY = snekCoords.snekHead.y;
  }
}

function foxStates() {
  if (map == "forest") {
    if (foxState == "returning") {
      if (Objects[1].x <= 192) {
        foxFrame = 0;
        foxState = "idle";
        if (Objects[1].x >= 384) {
          return;
        }
      } if (snekCollider.x == 320 || snekCollider.x == 352 || snekCollider.x == 384 || snekCollider.x == 416
        || snekCollider.x == 448 || snekCollider.x == 480) {
        if (snekCollider.y == 160 || snekCollider.y == 192) {
          foxState = "walking";
          foxFrame = 0;
        }
      }
    }
    if (foxState == "idle") {
      if (snekCollider.x == 320 || snekCollider.x == 352 || snekCollider.x == 384 || snekCollider.x == 416
        || snekCollider.x == 448 || snekCollider.x == 480) {
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
    if (Objects[1].x >= 384) {
      foxFrame = 0;
      foxState = "idle";
      setTimeout((() => {
        foxFrame = 1024;
        foxState = "returning";
      }), 1000);
    }
  } if (map == "autumnForest") {
    if (foxState == "returning") {
      if (Objects[1].x <= 288) {
        foxFrame = 0;
        foxState = "idle";
        if (Objects[1].x >= 320) {
          return;
        }
      } if (snekCollider.x == 384 || snekCollider.x == 416 || snekCollider.x == 448 || snekCollider.x == 480
        || snekCollider.x == 512 || snekCollider.x == 544) {
        if (snekCollider.y == 352 || snekCollider.y == 384) {
          foxState = "walking";
          foxFrame = 0;
        }
      }
    }
    if (foxState == "idle") {
      if (snekCollider.x == 384 || snekCollider.x == 416 || snekCollider.x == 448 || snekCollider.x == 480
        || snekCollider.x == 512 || snekCollider.x == 544) {
        if (snekCollider.y == 352 || snekCollider.y == 384) {
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
    if (Objects[1].x >= 544) {
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
    drawObject("bush", 128, 64);
    drawObject("bush", 288, 32);
    drawObject("oTree", 32, 96);
    drawObject("oTree", 224, 64);
    drawObject("rock", 480, 32);
    drawObject("rock", 640, 0);
    drawObject("pTree", 736, 0);
    drawObject("rock", 608, 128);
    drawObject("pTree", 800, 192);
    drawObject("oTree", 544, 288);
    drawObject("oTree", 672, 352);
    drawObject("rock", 768, 384);
    drawObject("bush", 416, 448);
    drawObject("pTree", 96, 256);
    drawObject("bush", 64, 416);
    drawObject("pTree", 192, 384);
    drawObject("bush", 256, 352);
  } if (map == "forest") {
    Objects = {};
    objCount = 0;
    drawObject("fox", 192, 128);
    drawObject("bush", 0, 32);
    drawObject("pTree", 128, 32);
    drawObject("bush", 256, 0);
    drawObject("rock", 384, 64);
    drawObject("oTree", 480, -32);
    drawObject("oTree", 0, 160);
    drawObject("bush", 32, 288);
    drawObject("oTree", 96, 384);
    drawObject("pTree", 192, 256);
    drawObject("bush", 320, 256);
    drawObject("rock", 256, 416);
    drawObject("oTree", 384, 320);
    drawObject("pTree", 608, 32);
    drawObject("bush", 736, 32);
    drawObject("rock", 512, 224);
    drawObject("pTree", 480, 384);
    drawObject("oTree", 608, 352);
    drawObject("bush", 704, 448);
    drawObject("pTree", 800, 352);
    drawObject("oTree", 672, 256);
    drawObject("pTree", 608, 192);
    drawObject("pTree", 800, 160);
    drawObject("oTree", 704, 64);
    drawObject("rock", 832, 96);
  } if (map == "autumnForest") {
    Objects = {};
    objCount = 0;
    drawObject("fox", 288, 320);
    drawObject("yeTree", 96, -32);
    drawObject("reTree", 32, 64);
    drawObject("rock", 192, 32);
    drawObject("pTree", 288, 32);
    drawObject("rock", 416, 32);
    drawObject("orTree", 608, 0);
    drawObject("rock", 736, 32);
    drawObject("rock", 0, 224);
    drawObject("yeTree", 64, 352);
    drawObject("rock", 288, 448);
    drawObject("orTree", 576, 384);
    drawObject("pTree", 768, 384);
    drawObject("reTree", 672, 224);
    drawObject("yeTree", 704, 96);
    drawObject("aBush", 224, 224);
    drawObject("aBush", 832, 160);
    drawObject("aBush", 800, 288);
    drawObject("orTree", 96, 224);
    drawObject("pTree", 480, 64);
    drawObject("yeTree", 544, 192);
    drawObject("aBush", 480, 416);
    drawObject("aBush", 192, 384);
    drawObject("owl", -64, 256);
  } if (map == "cliffsides") {
    Objects = {};
    objCount = 0;
    drawObject("cliffside", 0, 0);
    drawObject("cliffside", 64, 0);
    drawObject("cliffside", 736, 0);
    drawObject("cliffside", 800, 0);
    drawObject("oTree", 32, 0);
    drawObject("bush", 32, 160);
    drawObject("rock", 0, 224);
    drawObject("oTree", 64, 288);
    drawObject("pTree", 0, 384);
    drawObject("rock", 832, 0);
    drawObject("pTree", 800, 96);
    drawObject("bush", 768, 256);
    drawObject("rock", 832, 352);
    drawObject("oTree", 768, 384);
    ctx.filter = "brightness(80%)";
    drawObject("rock", 192, 0);
    drawObject("pTree", 288, 0);
    drawObject("rock", 416, 32);
    drawObject("rock", 544, 32);
    drawObject("rock", 672, 0);
    drawObject("pTree", 160, 64);
    drawObject("rock", 320, 160);
    drawObject("oTree", 480, 64);
    drawObject("pTree", 576, 96);
    drawObject("rock", 672, 128);
    drawObject("rock", 544,  224);
    drawObject("pTree", 640, 224);
    drawObject("rock", 288, 288);
    drawObject("oTree", 224, 288);
    drawObject("pTree", 416, 288);
    drawObject("pTree", 256, 352);
    drawObject("rock", 160, 448);
    drawObject("rock", 320, 448);
    drawObject("oTree", 512, 352);
    drawObject("pTree", 608, 384);
    drawObject("rock", 672, 384);
    ctx.filter = "brightness(100%)";
    drawObject("owl", -64, 64);
  } if (map == "mountains") {
    Objects = {};
    objCount = 0;
    drawObject("cRock",  0, 0);
    drawObject("oTree", 224, -32);
    drawObject(" pTree", 576, -32);
    drawObject("cRock", 736, 0);
    drawObject("bush", 64, 96);
    drawObject("pTree", 32, 192);
    drawObject("cRock", 0, 352);
    // ---
    drawObject("cRock", 192, 192);
    drawObject("cRock", 224, 288);
    drawObject("cRock", 192, 352);
    drawObject("cRock", 608, 160);
    drawObject("bush", 800, 192);
    drawObject("cRock", 640, 288);
    drawObject("bush", 576, 352);
    drawObject("oTree", 736, 288);
    drawObject("cRock", 832, 352);
  }
}

let shadowVal = 8;
let shadowVal2 = 6;
let shadowValFood = 2;
let shadowValSnek = 2;

let rockType = Math.floor(Math.random() * 3) * 64;
rockType == 0 ? rockType = 64 : rockType = rockType;
let moaiType = Math.floor(Math.random() * 2)
let rockValue = Math.floor(Math.random() * 500);
let size = 64;
let objCount = 0;
let foxSpeed = 32;
function drawObject(type, xCoords, yCoords) {
  if (type == "filter") {
    
  }
  if (type == "bush") {
    ctx.filter = "opacity(50%) brightness(0%)";
    ctx.drawImage(collidables, 0, 0, 64, 64, xCoords + shadowVal2, yCoords - shadowVal2, size, size,);
    ctx.filter = "opacity(100%) brightness(100%)";
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
          ctx.filter = "opacity(50%) brightness(0%)";
          ctx.drawImage(collidables, 704, 0, 64, 64, xCoords + shadowVal, yCoords - shadowVal, size, size);
        ctx.drawImage(collidables, 640, 0, 64, 64, xCoords + shadowVal, yCoords + size - shadowVal, size, size);
          ctx.filter = "opacity(100%) brightness(100%)";
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
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(collidables, 576, 0, 64, 64, xCoords + shadowVal, yCoords - shadowVal, size, size);
      ctx.drawImage(collidables, 512, 0, 64, 64, xCoords + shadowVal, yCoords + size - shadowVal, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
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
      ctx.filter = "opacity(50%) brightness(0%)";
      ctx.drawImage(collidables, rockType, 0, 64, 64, xCoords + shadowVal2, yCoords - shadowVal2, size, size);
      ctx.filter = "opacity(100%) brightness(100%)";
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
      ctx.filter = "opacity(50%) brightness(0%)";
    ctx.drawImage(collidables, 320, 0, 64, 128, xCoords + shadowVal2, yCoords + size - shadowVal2, size, 128);
    ctx.drawImage(collidables, 256, 0, 64, 128, xCoords + shadowVal + windCycleNum, yCoords - shadowVal - windCycleNum, size, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
    ctx.drawImage(collidables, 320, 0, 64, 128, xCoords, yCoords + size, size, 128);
    ctx.drawImage(collidables, 256, 0, 64, 128, xCoords + windCycleNum, yCoords - windCycleNum, size, 128);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 32;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "cRock") {
    if (rockValue == 0) {
      if (moaiType == 1) {
        ctx.drawImage(collidables, 1600, 0, 64, 64, xCoords, yCoords, size, size);
        ctx.drawImage(collidables, 1536, 0, 64, 64, xCoords, yCoords + size, size, size);
        objCount++;
        Objects[objCount] = {};
        Objects[objCount].x = xCoords;
        Objects[objCount].y = yCoords + 96;
        Objects[objCount].width = 64;
        Objects[objCount].height = 32;
        Objects[objCount].type = "1x2";
        return;
      }
      ctx.drawImage(collidables, 1472, 0, 64, 64, xCoords, yCoords, size, size);
      ctx.drawImage(collidables, 1408, 0, 64, 64, xCoords, yCoords + size, size, size);
      objCount++;
      Objects[objCount] = {};
      Objects[objCount].x = xCoords;
      Objects[objCount].y = yCoords + 96;
      Objects[objCount].width = 64;
      Objects[objCount].height = 32;
      Objects[objCount].type = "1x2";
      return;
    }
    ctx.drawImage(collidables, rockType + 1216, 0, 64, 64, xCoords, yCoords, size, size);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 32;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "oTree") {
      ctx.filter = "opacity(50%) brightness(0%)";
    ctx.drawImage(collidables, 448, 0, 64, 64, xCoords + shadowVal, yCoords + size - shadowVal, size, size);
    ctx.drawImage(collidables, 384, 0, 64, 128, xCoords + shadowVal + windCycleNum, yCoords - shadowVal - windCycleNum, size, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
    ctx.drawImage(collidables, 448, 0, 64, 64, xCoords, yCoords + size, size, size);
    ctx.drawImage(collidables, 384, 0, 64, 128, xCoords + windCycleNum, yCoords - windCycleNum, size, 128);
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
  } if (type == "slopes") {
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords;
    Objects[objCount].width = 512;
    Objects[objCount].height = 128;
    Objects[objCount].type = "slopes";
  } if (type == "fox") {
    if (foxState == "idle") {
      if (walkDistance == 224 || walkDistance == 160) {
        walkDistance = 192;
      }
      ctx.filter = "opacity(50%) brightness(0%)";
      ctx.drawImage(foxIdle, foxFrame, 0, 128, 128, xCoords + walkDistance + shadowVal2, yCoords - shadowVal2, 128, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
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
      ctx.filter = "opacity(50%) brightness(0%)";
      ctx.drawImage(foxWalking, foxFrame, 0, 128, 128, xCoords + walkDistance + shadowVal2, yCoords - shadowVal2, 128, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
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
      ctx.filter = "opacity(50%) brightness(0%)";
      ctx.drawImage(foxAttacking, foxFrame, 0, 128, 128, xCoords + walkDistance + shadowVal2, yCoords - shadowVal2, 128, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
      ctx.drawImage(foxAttacking, foxFrame, 0, 192, 128, xCoords + walkDistance, yCoords, 192, 128);
      foxFrame += 768;
      for (let x = 1; x <= 4; x++) {
        foodCollisions(x);
      } if (foxFrame >= 5088 || foxFrame == 5376) {
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
      ctx.filter = "opacity(50%) brightness(0%)";
      ctx.drawImage(foxReturning, foxFrame, 0, 128, 128, xCoords + walkDistance + shadowVal2, yCoords - shadowVal2, 128, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
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
    ctx.filter = "opacity(50%) brightness(0%)";
    ctx.drawImage(collidables, 768, 0, 64, 64, xCoords + shadowVal2, yCoords - shadowVal2, size, size,);
    ctx.filter = "opacity(100%) brightness(100%)";
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
    ctx.filter = "opacity(50%) brightness(0%)";
    ctx.drawImage(collidables, 1152, 0, 64, 64, xCoords + shadowVal, yCoords + size - shadowVal, size, size);
    ctx.drawImage(collidables, 1088, 0, 64, 128, xCoords + shadowVal + windCycleNum, yCoords - shadowVal - windCycleNum, size, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
    ctx.drawImage(collidables, 1152, 0, 64, 64, xCoords, yCoords + size, size, size);
    ctx.drawImage(collidables, 1088, 0, 64, 128, xCoords + windCycleNum, yCoords - windCycleNum, size, 128);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "reTree") {
    ctx.filter = "opacity(50%) brightness(0%)";
    ctx.drawImage(collidables, 1024, 0, 64, 64, xCoords + shadowVal, yCoords + size - shadowVal, size, size);
    ctx.drawImage(collidables, 960, 0, 64, 128, xCoords + shadowVal + windCycleNum, yCoords - shadowVal - windCycleNum, size, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
    ctx.drawImage(collidables, 1024, 0, 64, 64, xCoords, yCoords + size, size, size);
    ctx.drawImage(collidables, 960, 0, 64, 128, xCoords + windCycleNum, yCoords - windCycleNum, size, 128);
    objCount++;
    Objects[objCount] = {};
    Objects[objCount].x = xCoords;
    Objects[objCount].y = yCoords + 96;
    Objects[objCount].width = 64;
    Objects[objCount].height = 64;
    Objects[objCount].type = "1x2";
    return;
  } if (type == "yeTree") {
    ctx.filter = "opacity(50%) brightness(0%)";
    ctx.drawImage(collidables, 896, 0, 64, 64, xCoords + shadowVal, yCoords + size - shadowVal, size, size);
    ctx.drawImage(collidables, 832, 0, 64, 128, xCoords + shadowVal + windCycleNum, yCoords - shadowVal - windCycleNum, size, 128);
      ctx.filter = "opacity(100%) brightness(100%)";
    ctx.drawImage(collidables, 896, 0, 64, 64, xCoords, yCoords + size, size, size);
    ctx.drawImage(collidables, 832, 0, 64, 128, xCoords + windCycleNum, yCoords - windCycleNum, size, 128);
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
        owlStates();
        owlX = -64;
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame >= 320) {
          owlFrame = 0;
        } else {
          owlFrame += 64;
        }
      } if (owlState == "flying") {
        owlStates();
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance + shadowVal2, lockedY - 64 - shadowVal2, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame >= 320) {
          owlFrame = 0;
        } else {
          owlFrame += 64;
        } flightDistance += 64;
        owlX = xCoords + flightDistance;
        if (owlX >= 896) {
          owlState = "idle";
          owlTimer();
          owlDirection = "alternate";
        }
        return;
      } if (owlState == "returning") {
        owlStates();
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance + shadowVal2, lockedY - 64 - shadowVal2, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
        ctx.drawImage(owlFlying, owlFrame, 0, 64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame >= 320) {
          owlFrame = 0;
        } else {
          owlFrame += 64;
        } flightDistance += 64;
        owlX = xCoords + flightDistance;
        return;
      } if (owlState == "attacking") {
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(owlAttacking, owlFrame, 0, 64, 64, xCoords + flightDistance + shadowVal2, lockedY - 64 - shadowVal2, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
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
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(owlAttacking2, owlFrame, 0, 64, 64, xCoords + flightDistance + shadowVal2, lockedY - 64 - shadowVal2, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
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
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(owlFlying2, owlFrame, 0, 64, 64, xCoords + flightDistance + shadowVal2, lockedY - 64 - shadowVal2, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
        ctx.drawImage(owlFlying2, owlFrame, 0, -64, 64, xCoords + flightDistance, lockedY - 64, size, size);
        if (owlFrame == 64) {
          owlFrame = 384;
        } else {
          owlFrame -= 64;
        } flightDistance -= 64;
        owlX = xCoords + flightDistance;
        if (owlX <= -64) {
          owlState = "idle";
          owlTimer();
          owlDirection = "normal";
        }
        return;
      } if (owlState == "returning") {
        owlStates();
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(owlFlying2, owlFrame, 0, 64, 64, xCoords + flightDistance + shadowVal2, lockedY - 64 - shadowVal2, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
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
        owlX = 896;
        ctx.filter = "opacity(50%) brightness(0%)";
        ctx.drawImage(owlFlying2, owlFrame, 0, 64, 64, xCoords + flightDistance + shadowVal2, lockedY - 64 - shadowVal2, size, size);
        ctx.filter = "opacity(100%) brightness(100%)";
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
            if (flashActive || respawnImmunity) {
              return;
            } if (isDead == true) {
            } else {
            killSnake();
            isDead = true;
            }
          }
        } if (snekCoords.snekHead.x == owlX || snekCoords.snekHead.x == owlX + 32) {
          if (snekCoords.snekHead.y == lockedY) {
            if (flashActive || respawnImmunity) {
              return;
            } if (isDead == true) {
            } else {
            killSnake();
            isDead = true;
            }
          }
        } if (snekCoords.snekLength.x == owlX || snekCoords.snekLength.x == owlX + 32) {
          if (snekCoords.snekLength.y == lockedY) {
            if (flashActive || respawnImmunity) {
              return;
            } if (isDead == true) {
            } else {
            killSnake();
            isDead = true;
            } 
          }
        } if (snekCoords.snekEnd.x == owlX || snekCoords.snekEnd.x == owlX + 32) {
          if (snekCoords.snekEnd.y == lockedY) {
            if (flashActive || respawnImmunity) {
              return;
            } if (isDead == true) {
            } else {
            killSnake();
            isDead = true;
            }
          }
        }
      }), 350)
    }
    if (snekCollider.x == Objects[1].x || snekCollider.x == Objects[1].x + 32 ||
      snekCollider.x == Objects[1].x + 64 || snekCollider.x == Objects[1].x + 96) {
      if (snekCollider.y == Objects[1].y || snekCollider.y == Objects[1].y + 32) {
        if (flashActive || respawnImmunity) {
          if (isDead == true) {
          } else {
          killSnake();
          isDead = true;
          }
        } if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        }
      }
    } if (snekCoords.snekHead.x == Objects[1].x || snekCoords.snekHead.x == Objects[1].x + 32 ||
      snekCoords.snekHead.x == Objects[1].x + 64 || snekCoords.snekHead.x == Objects[1].x + 96) {
      if (snekCoords.snekHead.y == Objects[1].y || snekCoords.snekHead.y == Objects[1].y + 32) {
        if (flashActive || respawnImmunity) {
          if (isDead == true) {
          } else {
          killSnake();
          isDead = true;
          }
        } if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        }
      }
    } if (snekCoords.snekLength.x == Objects[1].x || snekCoords.snekLength.x == Objects[1].x + 32 ||
      snekCoords.snekLength.x == Objects[1].x + 64 || snekCoords.snekLength.x == Objects[1].x + 96) {
      if (snekCoords.snekLength.y == Objects[1].y || snekCoords.snekLength.y == Objects[1].y + 32) {
        if (flashActive || respawnImmunity) {
          if (isDead == true) {
          } else {
          killSnake();
          isDead = true;
          }
        } if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        } 
      }
    } if (snekCoords.snekEnd.x == Objects[1].x || snekCoords.snekEnd.x == Objects[1].x + 32 ||
      snekCoords.snekEnd.x == Objects[1].x + 64 || snekCoords.snekEnd.x == Objects[1].x + 96) {
      if (snekCoords.snekEnd.y == Objects[1].y || snekCoords.snekEnd.y == Objects[1].y + 32) {
        if (flashActive || respawnImmunity) {
          if (isDead == true) {
          } else {
          killSnake();
          isDead = true;
          }
        } if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        }
      }
    }
    if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCollider.x == Objects[1].x + 128 || snekCollider.x == Objects[1].x + 160) {
          if (snekCollider.y == 128 || snekCollider.y == 160 ||
            snekCollider.y == 96 || snekCollider.y == 192) {
              if (flashActive || respawnImmunity) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekHead.x == Objects[1].x + 128 || snekCoords.snekHead.x == Objects[1].x + 160) {
          if (snekCoords.snekHead.y == 128 || snekCoords.snekHead.y == 160 ||
            snekCoords.snekHead.y == 96 || snekCoords.snekHead.y == 192) {
              if (flashActive || respawnImmunity) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekLength.x == Objects[1].x + 128 || snekCoords.snekLength.x == Objects[1].x + 160) {
          if (snekCoords.snekLength.y == 128 || snekCoords.snekLength.y == 160 ||
            snekCoords.snekLength.y == 96 || snekCoords.snekLength.y == 192) {
              if (flashActive) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekEnd.x == Objects[1].x + 128 || snekCoords.snekEnd.x == Objects[1].x + 160) {
          if (snekCoords.snekEnd.y == 128 || snekCoords.snekEnd.y == 160 ||
            snekCoords.snekEnd.y == 96 || snekCoords.snekEnd.y == 192) {
              if (flashActive) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    }
  } if (map == "forest") {
    if (snekCollider.x == Objects[1].x || snekCollider.x == Objects[1].x + 32 ||
      snekCollider.x == Objects[1].x + 64 || snekCollider.x == Objects[1].x + 96) {
      if (snekCollider.y == Objects[1].y || snekCollider.y == Objects[1].y + 32) {
        if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        }
      }
    } if (snekCoords.snekHead.x == Objects[1].x || snekCoords.snekHead.x == Objects[1].x + 32 ||
      snekCoords.snekHead.x == Objects[1].x + 64 || snekCoords.snekHead.x == Objects[1].x + 96) {
      if (snekCoords.snekHead.y == Objects[1].y || snekCoords.snekHead.y == Objects[1].y + 32) {
        if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        }
      }
    } if (snekCoords.snekLength.x == Objects[1].x || snekCoords.snekLength.x == Objects[1].x + 32 ||
      snekCoords.snekLength.x == Objects[1].x + 64 || snekCoords.snekLength.x == Objects[1].x + 96) {
      if (snekCoords.snekLength.y == Objects[1].y || snekCoords.snekLength.y == Objects[1].y + 32) {
        if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        }
      }
    } if (snekCoords.snekEnd.x == Objects[1].x || snekCoords.snekEnd.x == Objects[1].x + 32 ||
      snekCoords.snekEnd.x == Objects[1].x + 64 || snekCoords.snekEnd.x == Objects[1].x + 96) {
      if (snekCoords.snekEnd.y == Objects[1].y || snekCoords.snekEnd.y == Objects[1].y + 32) {
        if (isDead == true) {
        } else {
        killSnake();
        isDead = true;
        }
      }
    }
    if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCollider.x == Objects[1].x + 128 || snekCollider.x == Objects[1].x + 160) {
          if (snekCollider.y == 160 || snekCollider.y == 192 ||
            snekCollider.y == 224 || snekCollider.y == 96) {
              if (flashActive || respawnImmunity) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekHead.x == Objects[1].x + 128 || snekCoords.snekHead.x == Objects[1].x + 160) {
          if (snekCoords.snekHead.y == 160 || snekCoords.snekHead.y == 192 ||
            snekCoords.snekHead.y == 224 || snekCoords.snekHead.y == 96) {
              if (flashActive || respawnImmunity) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekLength.x == Objects[1].x + 128 || snekCoords.snekLength.x == Objects[1].x + 160) {
          if (snekCoords.snekLength.y == 160 || snekCoords.snekLength.y == 192 ||
            snekCoords.snekLength.y == 224 || snekCoords.snekLength.y == 96) {
              if (flashActive || respawnImmunity) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    } if (foxState == "attacking") {
      setTimeout((() => {
        if (snekCoords.snekEnd.x == Objects[1].x + 128 || snekCoords.snekEnd.x == Objects[1].x + 160) {
          if (snekCoords.snekEnd.y == 160 || snekCoords.snekEnd.y == 192 ||
            snekCoords.snekEnd.y == 224 || snekCoords.snekEnd.y == 96) {
              if (flashActive || respawnImmunity) {
                return;
              }
              if (isDead == true) {
              } else {
              killSnake();
              isDead = true;
              }
          }
        }
      }), 250);
      return;
    }
  } if (map == "cliffsides") {
    if (flashActive || respawnImmunity) {
      return;
    }
    if (owlState == "attacking") {
      setTimeout((() => {
        if (snekCollider.x == owlX || snekCollider.x == owlX + 32) {
          if (snekCollider.y == lockedY) {
            if (isDead == true) {
      } else {
        killSnake();
        isDead = true;
        }
          }
        } if (snekCoords.snekHead.x == owlX || snekCoords.snekHead.x == owlX + 32) {
          if (snekCoords.snekHead.y == lockedY) {
            if (isDead == true) {
      } else {
        killSnake();
        isDead = true;
        }
          }
        } if (snekCoords.snekLength.x == owlX || snekCoords.snekLength.x == owlX + 32) {
          if (snekCoords.snekLength.y == lockedY) {
            if (isDead == true) {
      } else {
        killSnake();
        isDead = true;
        }
          }
        } if (snekCoords.snekEnd.x == owlX || snekCoords.snekEnd.x == owlX + 32) {
          if (snekCoords.snekEnd.y == lockedY) {
            if (isDead == true) {
      } else {
        killSnake();
        isDead = true;
        }
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
    } if (arrType[x] == "slopes") {
       if (snekCollider.y >= 0 && snekCollider.y <= 128
        || snekCollider.y >= 416) {
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
      //snekCollider.x = 864;
    }
  } if (snekDirection == "down") {
    snekCollider.x = snekCoords.snekHead.x;
    snekCollider.y = snekCoords.snekHead.y + 32;
    if (snekCollider.y == 896) {
      //snekCollider.y = 0;
    }
  } if (snekDirection == "right") {
    snekCollider.x = snekCoords.snekHead.x + 32;
    snekCollider.y = snekCoords.snekHead.y;
    if (snekCollider.x == 896) {
      //snekCollider.x = 0;
    }
  } if (snekDirection == "up") {
    snekCollider.x = snekCoords.snekHead.x;
    snekCollider.y = snekCoords.snekHead.y - 32;
    if (snekCollider.y == -32) {
      //snekCollider.y = 864;
    }
  }
  // console.log(snekCollider);
}

let deaths = 0;
let trackStop = false;
let isDead = false;

function killSnake() {
  deaths++;
  snekCoords.snekHead.x = 416;
  snekCoords.snekHead.y = 224;
  snekCoords.snekLength.x = 448;
  snekCoords.snekLength.y = 224;
  snekCoords.snekEnd.x = 480;
  snekCoords.snekEnd.y = 224;
  snekDirection = "left";
  oldDirection = "left";
  drawStage = 0;
  drawStage2 = 0;
  drawStage3 = 0;
  mapScore = 0;
  let sfx1 = new Audio('/Death2.mp3');
  trackStop = true;
  sfx1.play();
  respawnImmunity = true;
  setTimeout(() => { alert("You Died! Try Again"); sfx1.pause();
  trackStop = false; isDead = false;
   setTimeout((() => { respawnImmunity = false; }), 1500) }, 50);
  /*
  for (let foodNum = 1; foodNum < 5; foodNum++) {
    foods[`food${foodNum}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
    foods[`food${foodNum}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
    foods[`food${foodNum}`].foodType = Math.floor(Math.random() * 10) * 10;
    foods[`food${foodNum}`].eaten = false;
    foodOnSnek(foodNum);
    foodOnFood(foodNum);
    foodTimer(foodNum);
    }
    */
}

function mapBoundaries(type) {
  if (type == "walls") {
    if (snekCoords.snekHead.x == 0 || snekCoords.snekHead.x == 896) {
      isColliding = true;
    } if (snekCoords.snekHead.y == 512 || snekCoords.snekHead.y == 0) {
      isColliding = true;
    }
  } if (type == "pacman") {
    if (snekCoords.snekHead.x == 896 && snekDirection == "right" ||
    snekCoords.snekHead.x == 896 && snekDirection == "up" ||
    snekCoords.snekHead.x == 896 && snekDirection == "down") {
      snekCoords.snekHead.x = -32;
      movementQueue = "";
      snekDirection = "right";
    } if (snekCoords.snekHead.x <= -32 && snekDirection == "left" ||
    snekCoords.snekHead.x == -32 && snekDirection == "up" ||
    snekCoords.snekHead.x == -32 && snekDirection == "down") {
      snekCoords.snekHead.x = 896;
      movementQueue = "";
      snekDirection = "left";
    } if (snekCoords.snekHead.y == -32 && snekDirection == "up" ||
    snekCoords.snekHead.y == -32 && snekDirection == "left" ||
    snekCoords.snekHead.y == -32 && snekDirection == "right") {
      snekCoords.snekHead.y = 512;
      movementQueue = "";
      snekDirection = "up";
    } if (snekCoords.snekHead.y == 512 && snekDirection == "down" ||
    snekCoords.snekHead.y == 512 && snekDirection == "left" ||
    snekCoords.snekHead.y == 512 && snekDirection == "right") {
      snekCoords.snekHead.y = -32;
      movementQueue = "";
      snekDirection = "down";
    }
  }
}

let mapScore = 0;
let requiredScore = 20;

function foodCollisions(y) {
  for (let x = 1; x <= objLength; x++) {
    if (map == "forest") {
      if (foods[`food${y}`].spawnLocationX == 192 || foods[`food${y}`].spawnLocationX == 224 ||
        foods[`food${y}`].spawnLocationX == 256 || foods[`food${y}`].spawnLocationX == 288 ||
        foods[`food${y}`].spawnLocationX == 320 || foods[`food${y}`].spawnLocationX == 352
        || foods[`food${y}`].spawnLocationX == 384 || foods[`food${y}`].spawnLocationX == 416
        || foods[`food${y}`].spawnLocationX == 448 || foods[`food${y}`].spawnLocationY == 448 ||
        foods[`food${y}`].spawnLocationX == 480
      ) {
        if (foods[`food${y}`].spawnLocationY == 160 || foods[`food${y}`].spawnLocationY == 192) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
          foodOnFood(y);
          foodCollisions(y);
          foodOnSnek(y);
        }
      }
    } if (map == "autumnForest") {
      if (foods[`food${y}`].spawnLocationX >= 288 || foods[`food${y}`].spawnLocationX <= 544) {
        if (foods[`food${y}`].spawnLocationY == 352 || foods[`food${y}`].spawnLocationY == 384) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
          foodOnFood(y);
          foodCollisions(y);
          foodOnSnek(y);
        }
      }
    }
    if (arrType[x] == "1x2") {
      if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32) {
        if (foods[`food${y}`].spawnLocationY == arrY[x] || foods[`food${y}`.spawnLocationY == arrY[x] + 32]) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
          foodOnFood(y);
          foodCollisions(y);
          // console.log("foodCollisions run!");
          foodOnSnek(y);
        }
      }
    } if (arrType[x] == "4x2") {
      if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32 ||
        foods[`food${y}`].spawnLocationX == arrX[x] + 64 || foods[`food${y}`].spawnLocationX == arrX[x] + 96) {
        if (foods[`food${y}`].spawnLocationY == arrY[x] || foods[`food${y}`].spawnLocationY == arrY[x] + 32) {
          foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
          foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
          foodOnFood(y);
          foodCollisions(y);
          // console.log("foodCollisions run!");
          foodOnSnek(y);
        }
      }
    } if (arrType[x] == "3x16") {
      if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32 ||
        foods[`food${y}`].spawnLocationX == arrX[x] + 64) {
        foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
        foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        foodOnFood(y);
        foodCollisions(y)
        // console.log("foodCollisions run!");
          foodOnSnek(y);
      }
    } if (arrType[x] == "slopes") {
      if (snekCollider.y >= 0 && snekCollider.y <= 128
       || snekCollider.y >= 416) {
        foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
        foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        foodOnFood(y);
        foodCollisions(y)
        // console.log("foodCollisions run!");
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
        foods.food1.spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
        foods.food1.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
        foodCollisions(food);
        foodOnFood(food);
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
        foods.food2.spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
        foods.food2.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
        foodCollisions(food);
        foodOnFood(food);
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
        foods.food3.spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
        foods.food3.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
        foodCollisions(food);
        foodOnFood(food);
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
        foods.food4.spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
        foods.food4.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
        // console.log("foodOnFood run!")
        foodOnSnek(food);
        foodCollisions(food);
        foodOnFood(food);
      }
    }
  }
  // console.log(`foodOnFood(${food})`);
}

function foodOnSnek(x) {
  if (foods[`food${x}`].spawnLocationX == snekCoords.snekHead.x &&
    foods[`food${x}`].spawnLocationY == snekCoords.snekHead.y) {
    foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
    foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
    // console.log("foodOnSnekHead run!")
    foodOnSnek(x);
    foodCollisions(x);
    foodOnFood(x);
    foodTimer(x);
  } if (foods[`food${x}`].spawnLocationX == snekCoords.snekLength.x &&
    foods[`food${x}`].spawnLocationY == snekCoords.snekLength.y) {
    foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
    foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
    // console.log("foodOnSnekLength run!")
    foodOnSnek(x);
    foodCollisions(x);
    foodOnFood(x);
    foodTimer(x);
  } if (foods[`food${x}`].spawnLocationX == snekCoords.snekEnd.x &&
    foods[`food${x}`].spawnLocationY == snekCoords.snekEnd.y) {
    foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
    foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
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
let track = new Audio('/MeadowsTheme.mp3');
let sfx1 = new Audio('/Death.mp3');
let sfx3 = new Audio('/Death2.mp3');
let sfx2 = new Audio('/Eat.mp3');

// Important: track.volume = 0 - 1;

function music(song) {
  if (trackStop == true) {
    track.pause();
    return;
    }
  track.play();
  
}

let eggTimer = 7500;
let foodTimerRespawn1 = "";
let foodTimerRespawn2 = "";
let foodTimerRespawn3 = "";
let foodTimerRespawn4 = "";

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
      if (foods[`food${x}`].foodType <= 10 && foods[`food${x}`].eaten == false) {
        foods[`food${x}`].spawnLocationX = -512;
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
          drawFood(x);
      foodOnFood(x);
      foodOnSnek(x);
      foodCollisions(x);
      foods[`food${x}`].eaten = true;
      if (x == 1) {
      foodTimerRespawn1 = setTimeout(respawnFood, 3500, x);
      } if (x == 2) {
        foodTimerRespawn2 = setTimeout(respawnFood, 3500, x);
      } if (x == 3) {
        foodTimerRespawn3 = setTimeout(respawnFood, 3500, x);
      } if (x == 4) {
        foodTimerRespawn4 = setTimeout(respawnFood, 3500, x);
      }
      }
    }), eggTimer)
    console.log("foodTimer run!");
  }
}

function respawnFood(foodNum) {
  if (foods[`food${foodNum}`].eaten == true) {
    if (foods[`food${foodNum}`].foodType <= 10) {
      if (foodNum == 1) {
        foodTimerRespawn1 = "";
        clearTimeout(foodTimerRespawn1);
      } if (foodNum == 2) {
        foodTimerRespawn2 = "";
        clearTimeout(foodTimerRespawn2);
      } if (foodNum == 3) {
        foodTimerRespawn3 = "";
        clearTimeout(foodTimerRespawn3);
      } if (foodNum == 4) {
        foodTimerRespawn4 = "";
        clearTimeout(foodTimerRespawn4);
      }
    }
  foods[`food${foodNum}`].spawnLocationX = Math.floor(Math.random() * 27 + 1) * 32;
  foods[`food${foodNum}`].spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
  foods[`food${foodNum}`].foodType = Math.floor(Math.random() * 10) * 10;
  foods[`food${foodNum}`].eaten = false;
  foodOnSnek(foodNum);
  foodOnFood(foodNum);
  foodTimer(foodNum);
  foodCollisions(foodNum);
}
}

for (let x = 1; x <= 4; x++) {
  
}

setTimeout((() => { /* setInterval(snek, 1000 / 5); */ snek(); }), 2900);
let updateSpeed2 = 0.1;
let snekGameLoop = 0;

let foodText = new Image();
foodText.src = "/sign.png";
let signX = 704; // 704 32 384
let signY = -160;
let foodGuiActive = false;
let foodGuiCancel = false;

function foodGui() {
  if (foodGuiActive == true) {
    if (signY == -64) {
      setTimeout((() => { if (foodGuiActive == true) {
        if (foodGuiCancel == false) {
        foodGuiActive = false;
        } else {
          foodGuiCancel = false;
        }
      }}), 500);
    }
    signY += 24;
    if (signY > -64) {
      signY = -64;
    }
  } if (foodGuiActive == false && signY !== -160) {
    signY -= 18;
    // SignY used to be 24 (3 for smooth movement)
  }
  ctx4.drawImage(foodText, 0, 0, 128, 160, signX, signY, 128, 160);
  ctx4.fillStyle = "white";
  ctx4.font = "17px Pixel";
  ctx4.fillText(`${mapScore}/${requiredScore}`, signX + 42, signY + 136); 
}


function runSnek() {
  document.body.requestFullscreen();
setTimeout((() => {
  let info = alert("WASD or Arrow Keys to move")
  //let updateSpeed = prompt("Choose your speed: Easy: 3.5, Normal: 4.5 and Hard: 5.5 or customize it");
  //parseInt(updateSpeed, 10);
  let updateSpeed = 4.5
  if (updateSpeed > 0) {
    updateSpeed2 = updateSpeed;
    updateSpeed2 /*
    smooth movement code here *= 16; */
    snekGameLoop =
    setInterval(snek, 1000 / updateSpeed2);
    /*
    setInterval(snek, 1000 / 60);
    */
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
}), 800); //3150

setInterval(music, 0);

}

// }

/*
let encoder = new TextEncoder();
let binary = encoder.encode(prompt("Put in something you'd like to Encode"))
let decoder = new TextDecoder()
alert(`Binary: ${binary}`)
alert(` Decoded: ${decoder.decode(binary)}`);
*/
