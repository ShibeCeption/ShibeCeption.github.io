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
      location.href = "https://shibeception.github.io/index.html";
    } else {
      topBar.style.display = "flex";
    }
  }
  screenCheck()



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
    || e.key == 'ArrowLeft' && snekDirection !== "right" && moved == false) {
      snekDirection = "left";
      moved = true;
      return;
    } if (e.key == 'd' && snekDirection !== "left" && moved == false
    || e.key == 'ArrowRight' && snekDirection !== "left" && moved == false) {
      snekDirection = "right";
      moved = true;
      return;
    } if (e.key == 's' && snekDirection !== "up" && moved == false
    || e.key == 'ArrowDown' && snekDirection !== "up" && moved == false) {
      snekDirection = "down";
      moved = true;
      return;
    } if (e.key == 'w' && snekDirection !== "down" && moved == false
    || e.key == 'ArrowUp' && snekDirection !== "down" && moved == false) {
      snekDirection = "up";
      moved = true;
      return;
    } if (moved = true) { 
      if (e.key == 'w' || e.key == 'ArrowUp') {
        movementQueue.push("up");
        if (movementQueue.length == 3) {
          movementQueue.shift();
        }
      } if (e.key == 'a' || e.key == 'ArrowLeft') {
        movementQueue.push("left");
        if (movementQueue.length == 3) {
          movementQueue.shift();
        }
      } if (e.key == 'd' || e.key == 'ArrowRight') {
        movementQueue.push("right");
        if (movementQueue.length == 3) {
          movementQueue.shift();
        }
      } if (e.key == 's' || e.key == 'ArrowDown') {
        movementQueue.push("down");
        if (movementQueue.length == 3) {
          movementQueue.shift();
        }
      }
    }
  }

  function movementQueues() {
    if (movementQueue.length > 0) {
      snekDirection == movementQueue[0];
      movementQueue.shift();
      // console.log("movementQueueRun!")
      checkCollision();
      mapBoundaries(boundaryType)
    }
  }

  function snek() {
    moved = false;
    movementQueues();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnek();
    updateSnekCollider();
    moveSnek();
    drawObjects();
    updateScore();
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

  function drawSnek() {
    let tailCheck = false;
    let tailCheck2 = false;
    let tailCheck3 = false;
    // Snek Head
    if (oldDirection == "left") {
    ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
    } if (oldDirection == "down") {
      ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
      } if (oldDirection == "right") {
        ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        } if (oldDirection == "up") {
          ctx.drawImage(image, 0, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
          }
    // Snek Length
    if (snekCoords.snekHead.x == snekCoords.snekLength.x - 32) {
      if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
        snekCoords.snekEnd.x == -32) {
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
        snekCoords.snekEnd.y == -32) {
        ctx.drawImage(image2, 256, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
        snekCoords.snekEnd.y == 512) {
        ctx.drawImage(image2, 448, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      }
    } if (snekCoords.snekHead.x == snekCoords.snekLength.x + 32) {
      if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
        snekCoords.snekEnd.x == 512) {
        ctx.drawImage(image2, 128, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
        snekCoords.snekEnd.y == -32) {
        ctx.drawImage(image2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        tailCheck3 = true;
      } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
        snekCoords.snekEnd.y == 512) {
        ctx.drawImage(image2, 480, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        tailCheck2 = true;
      }
    } if (snekCoords.snekHead.y == snekCoords.snekLength.y - 32) {
      if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32 ||
        snekCoords.snekEnd.y == -32) {
        ctx.drawImage(image2, 32, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
        snekCoords.snekEnd.y == -32 && snekDirection !== "up") {
        ctx.drawImage(image2, 480, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
        snekCoords.snekEnd.y == 512 && snekDirection !== "up") {
        ctx.drawImage(image2, 320, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        tailCheck = true;
      }
    } if (snekCoords.snekHead.y == snekCoords.snekLength.y + 32) {
      if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32 ||
        snekCoords.snekEnd.y == 512) {
        ctx.drawImage(image2, 64, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32 ||
        snekCoords.snekEnd.x == -32) {
        ctx.drawImage(image2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
      } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32 ||
        snekCoords.snekEnd.x == 512) {
        ctx.drawImage(image2, 384, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        tailCheck = true;
      }
    } 
    // Snek End
    if (tailCheck) {
      ctx.drawImage(image3, 192, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      return;
    } if (tailCheck2) {
      ctx.drawImage(image3, 160, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      return;
    } if (tailCheck3) {
      ctx.drawImage(image3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      return;
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x - 32) {
      ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      return;
    } if (snekCoords.snekLength.x == snekCoords.snekEnd.x + 32) {
      ctx.drawImage(image3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      return;
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y - 32) {
      ctx.drawImage(image3, 96, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      return;
    } if (snekCoords.snekLength.y == snekCoords.snekEnd.y + 32) {
      ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      return;
    }
  }

  let collidables = new Image();
  collidables.src = '/Collidables.png';

  function drawObjects() {
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
  }

  let rockType = Math.floor(Math.random() * 3) * 64;
  rockType == 0 ? rockType = 64 : rockType = rockType;
  let moaiType = Math.floor(Math.random() * 2)
  let rockValue = Math.floor(Math.random() * 500);
  let size = 64;

  let objCount = 0;

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
    }
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
  let requiredScore = 50;

  function updateScore() {
    scoreText.textContent = 'Score:\n' + mapScore + '/' + requiredScore;
  }

  function foodCollisions(y) {
    for (let x = 1; x <= objLength; x++) {
      if (arrType[x] == "1x2") {
          if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32) {
            if (foods[`food${y}`].spawnLocationY == arrY[x] || foods[`food${y}`.spawnLocationY == arrY[x] + 32]) {
              foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
              foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
              // console.log("foodCollisions run!")
              foodOnSnek(y);
            }
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

  function foodTimer(x) {
     if (foods[`food${x}`].foodType <= 10 && foods[`food${x}`].eaten == false) {
      setTimeout((() => { if (foods[`food${x}`].eaten == true) {
        return;
      } if (foods[`food${x}`].foodType > 10 && foods[`food${x}`].eaten == false) {
        return;
      } if (foods[`food${x}`].eaten == true) {
        return;
      }
      foods[`food${x}`].spawnLocationX = -512;
       setTimeout(respawnFood, 3500, x) }), 7500)
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

  setInterval(snek, 1000 / 4.5);


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

}
