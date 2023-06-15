// {

  let themeToggle = document.querySelector('.fa-toggle-off');
  let themeToggle2 = document.querySelector('.toggle-text');
  let topBarText = document.querySelector('a');
  let games = document.querySelector('#gamesLink');
  let contact = document.querySelector('#contactLink');
  let topBar = document.querySelector('.top-bar');
  let navBar = document.querySelector('.nav-bar');

  function toggleTheme(e) {
    if (themeToggle.classList.contains('fa-toggle-off')) {
      themeToggle.classList.remove('fa-toggle-off');
      themeToggle.classList.add('fa-toggle-on');
      document.body.style.backgroundColor = 'rgb(35, 50, 35)';
      topBar.style.backgroundColor = 'rgb(55, 70, 55)';
      navBar.style.backgroundColor = 'rgb(55, 70, 55)';
      navBar.style.color = 'rgb(198, 230, 204)';
      topBarText.style.color = 'rgb(198, 230, 204)';
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
      topBarText.style.color = '';
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
      topBarText.style.color = 'rgb(198, 230, 204)';
      menu.style.color = 'rgb(198, 230, 204)';
      games.style.color = 'rgb(198, 230, 204)';
      contact.style.color = 'rgb(198, 230, 204)';
      return;
    }
  }
  cookieCheck()

  document.body.onkeydown = function goBack(e) {
    if (e.keyCode == 8) {
      let leaveCheck = confirm("Do you wish to leave the Game?")
      leaveCheck == true
        ? location.href = 'https://shibeception.github.io/'
        : console.log("Leave Denied");
    }
  }

  function screenCheck() {
    if (window.matchMedia("(max-width: 1370px)").matches) {
      topBar.style.display = "none";
      navBar.style.display = "none";
    } if (window.matchMedia("(min-width: 1400px)").matches) {
      topBar.style.display = "visible";
      topBar.style.display = "visible";
    } if (window.matchMedia("(max-width: 1200px)").matches) {
      alert("Your screen is too small for this game");
      location.href = "https://shibeception.github.io/";
    } else {
      topBar.style.display = "flex";
    }
  }
  screenCheck()



  /*
  let encoder = new TextEncoder();
  let binary = encoder.encode(prompt("Put in something you'd like to Encode"))
  let decoder = new TextDecoder()
  alert(`Binary: ${binary}`)
  alert(` Decoded: ${decoder.decode(binary)}`)
  */



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
    if (e.key == 'a' && snekDirection !== "right" && moved == false) {
      snekDirection = "left";
      moved = true;
    } if (e.key == 'd' && snekDirection !== "left" && moved == false) {
      snekDirection = "right";
      moved = true;
    } if (e.key == 's' && snekDirection !== "up" && moved == false) {
      snekDirection = "down";
      moved = true;
    } if (e.key == 'w' && snekDirection !== "down" && moved == false) {
      snekDirection = "up";
      moved = true;
    } if (moved == true) {
      movementQueue.push(e.key);
    }
  }

  function snek() {
    moved = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    foodOnSnek();
    foodCollisions();
    drawSnek();
    updateSnekCollider()
    moveSnek();
    drawFood();
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
      foodCollisions();
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
            setTimeout(respawnFood, 3500, x);
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
            setTimeout(respawnFood, 3500, x);
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
            setTimeout(respawnFood, 3500, x);
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
            setTimeout(respawnFood, 3500, x);
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

    // Rework Required for longer lengths

    if (snekDirection == "left") {
      if (drawStage3 == 1 && oldDirection == "left") {
        ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 448, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage3 = 0;
        return;
      }
      if (drawStage == 1 && oldDirection == "down") {
        drawStage = 0;
        ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage3++;
        return;
      }
      if (drawStage == 1) {
        ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 448, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage = 0;
        return;
      } if (drawStage2 == 1) {
        drawStage2 = 0;
        ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 256, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 96, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } if (oldDirection == "left") {
        ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32)
        return;
      } if (oldDirection == "up") {
        drawStage2++;
        ctx.drawImage(image, 64, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 160, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } if (oldDirection == "down") {
        drawStage++;
        ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 160, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } else {
        ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      }
    }

    if (snekDirection == "up") {
      if (drawStage == 1) {
        ctx.drawImage(image, 64, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 352, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 224, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage = 0;
        return;
      } if (drawStage2 == 1) {
        ctx.drawImage(image, 64, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 448, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage2 = 0;
        return;
      } if (oldDirection == "up") {
        ctx.drawImage(image, 64, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 64, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32)
      } if (oldDirection == "left") {
        drawStage++
        ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32)
        return;
      } if (oldDirection == "right") {
        drawStage2++
        ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } else {
        ctx.drawImage(image, 64, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 64, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32)
      }
    }

    if (snekDirection == "down") {
      if (drawStage == 1) {
        ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage = 0;
        return;
      } if (drawStage2 == 1) {
        ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32); // 128 160
        ctx.drawImage(image2, 384, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32); // 384 256
        ctx.drawImage(image3, 192, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32); // 192 0
        drawStage2 = 0;
        return;
      } if (oldDirection == "down") {
        ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 160, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } if (oldDirection == "left") {
        drawStage++
        ctx.drawImage(image, 32, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 32, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32)
        return;
      } if (oldDirection == "right") {
        drawStage2++
        ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } else {
        ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 160, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32)
        return;
      }
    }

    if (snekDirection == "right") {
      if (drawStage == 1) {
        ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 480, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 160, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage = 0;
        return;
      } if (drawStage2 == 1) {
        ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 288, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        drawStage2 = 0;
        return;
      } if (oldDirection == "right") {
        ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
      } if (oldDirection == "down") {
        drawStage++;
        ctx.drawImage(image, 128, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 160, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 64, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } if (oldDirection == "up") {
        drawStage2++;
        ctx.drawImage(image, 64, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 64, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 128, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32);
        return;
      } else {
        ctx.drawImage(image, 96, 0, 32, 32, snekCoords.snekHead.x, snekCoords.snekHead.y, 32, 32);
        ctx.drawImage(image2, 0, 0, 32, 32, snekCoords.snekLength.x, snekCoords.snekLength.y, 32, 32);
        ctx.drawImage(image3, 0, 0, 32, 32, snekCoords.snekEnd.x, snekCoords.snekEnd.y, 32, 32)
      }
    }
  }

  let collidables = new Image();
  collidables.src = '/Collidables.png'

  function drawObjects() {
    Objects = {};
    objCount = 0;
    drawObject("bush", 64, 64)
    drawObject("rock", 128, 160)
    drawObject("pTree", 256, 0)
    drawObject("oTree", 384, 128)
    drawObject("moai", 384, 384)
  }

  let rockType = Math.floor(Math.random() * 3) * 64;
  rockType == 0 ? rockType = 64 : rockType = rockType;
  let moaiType = Math.floor(Math.random() * 2)
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
    } for (let x = 0; x < 5; x++) {
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
      if (snekCollider.x == 512) {
        snekCollider.x = 32;
      }
    } if (snekDirection == "down") {
      snekCollider.x = snekCoords.snekHead.x;
      snekCollider.y = snekCoords.snekHead.y + 32;
      if (snekCollider.x == 512) {
        snekCollider.x = 32;
      }
    } if (snekDirection == "right") {
      snekCollider.x = snekCoords.snekHead.x + 32;
      snekCollider.y = snekCoords.snekHead.y;
      if (snekCollider.x == -32) {
        snekCollider.x = 480;
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
    foodOnSnek();
    // setTimeout(() => { alert("You Died! Try Again"); }, 50);
  }

  function mapBoundaries(type) {
    if (type == "walls") {
      if (snekCollider.x == -32 || snekCollider.x == 544) {
        isColliding = true;
      } if (snekCollider.y == 544 || snekCollider.y == -32) {
        isColliding = true;
      }
    } if (type == "pacman") {
      if (snekCollider.x == -32) {
        snekCoords.snekHead.x = 512;
      } if (snekCollider.x == 512) {
        snekCoords.snekHead.x = -32;
      } if (snekCollider.y == 480 && snekDirection == "up") {
        snekCoords.snekHead.y = 512;
      } if (snekCollider.y == 512) {
        snekCoords.snekHead.y = -32;
      } // console.log(snekCollider.y);
    }
  }

  let mapScore = 0;
  let scoreText = document.getElementById('scoreText');

  function updateScore() {
    scoreText.textContent = `Score: ${mapScore}`;
  }

  function foodCollisions() {
    for (let x = 0; x < 5; x++) {
      if (arrType[x] == "1x2") {
        for (let y = 1; y <= 4; y++) {
          if (foods[`food${y}`].spawnLocationX == arrX[x] || foods[`food${y}`].spawnLocationX == arrX[x] + 32) {
            if (foods[`food${y}`].spawnLocationY == arrY[x] || foods[`food${y}`.spawnLocationY == arrY[x] + 32]) {
              foods[`food${y}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
              foods[`food${y}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
              foodOnSnek();
            }
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
              foods.food1.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
              foods.food1.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
              foodOnSnek();
        }
      }
    } if (food == 2) {
      if (foods.food2.spawnLocationX == foods.food1.spawnLocationX || 
        foods.food2.spawnLocationX == foods.food3.spawnLocationX ||
        foods.food2.spawnLocationX == foods.food4.spawnLocationX) {
          if (foods.food2.spawnLocationY == foods.food1.spawnLocationY ||
            foods.food2.spawnLocationY == foods.food3.spawnLocationY ||
            foods.food2.spawnLocationY == foods.food4.spawnLocationY) {
              foods.food2.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
              foods.food2.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
              foodOnSnek();
        }
      }
    } if (food == 3) {
      if (foods.food3.spawnLocationX == foods.food2.spawnLocationX || 
        foods.food3.spawnLocationX == foods.food1.spawnLocationX ||
        foods.food3.spawnLocationX == foods.food4.spawnLocationX) {
          if (foods.food3.spawnLocationY == foods.food2.spawnLocationY ||
            foods.food3.spawnLocationY == foods.food1.spawnLocationY ||
            foods.food3.spawnLocationY == foods.food4.spawnLocationY) {
              foods.food3.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
              foods.food3.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
              foodOnSnek();
        }
      }
    } if (food == 4) {
      if (foods.food4.spawnLocationX == foods.food2.spawnLocationX || 
        foods.food4.spawnLocationX == foods.food3.spawnLocationX ||
        foods.food4.spawnLocationX == foods.food1.spawnLocationX) {
          if (foods.food4.spawnLocationY == foods.food2.spawnLocationY ||
            foods.food4.spawnLocationY == foods.food3.spawnLocationY ||
            foods.food4.spawnLocationY == foods.food1.spawnLocationY) {
              foods.food4.spawnLocationX = Math.floor(Math.random() * 15 + 1) * 32;
              foods.food4.spawnLocationY = Math.floor(Math.random() * 15 + 1) * 32;
              foodOnSnek();
        }
      }
    }
    console.log(`foodOnFood(${food})`);
  }

  function foodOnSnek() {
    for (let x = 1; x <= 4; x++) {
      if (foods[`food${x}`].spawnLocationX == snekCoords.snekHead.x &&
       foods[`food${x}`].spawnLocationY == snekCoords.snekHead.y) {
        foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
        foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
        foodOnSnek();
        foodCollisions();
        foodOnFood(x);
        foodTimer(x);
       } if (foods[`food${x}`].spawnLocationX == snekCoords.snekLength.x &&
       foods[`food${x}`].spawnLocationY == snekCoords.snekLength.y) {
        foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
        foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
        foodOnSnek();
        foodCollisions();
        foodOnFood(x);
        foodTimer(x);
       } if (foods[`food${x}`].spawnLocationX == snekCoords.snekEnd.x &&
       foods[`food${x}`].spawnLocationY == snekCoords.snekEnd.y) {
        foods[`food${x}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
        foods[`food${x}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
        foodOnSnek();
        foodCollisions();
        foodOnFood(x);
        foodTimer(x);
       }
    }
  }

  function foodTimer(x) {
     if (foods[`food${x}`].foodType <= 10 && foods[`food${x}`].eaten == false) {
      setTimeout((() => { if (foods[`food${x}`].eaten == true) {
        return;
      }
      foods[`food${x}`].spawnLocationX = -512;
       setTimeout(respawnFood, 3500, x) }), 7500)
    }
  }

  function respawnFood(foodNum) {
    foods[`food${foodNum}`].spawnLocationX = Math.floor(Math.random() * 15) * 32;
          foods[`food${foodNum}`].spawnLocationY = Math.floor(Math.random() * 15) * 32;
          foods[`food${foodNum}`].foodType = Math.floor(Math.random() * 10) * 10;
          foods[`food${foodNum}`].eaten = false;
          foodOnSnek();
          foodOnFood(foodNum);
          foodTimer(foodNum);
  }

  foodCollisions();
  foodOnSnek();
  for (let x = 1; x <= 4; x++) {
    foodOnFood(x);
    foodTimer(x);
  }

  setInterval(snek, 1000 / 6);


  let song1 = new Audio('/grandTheme.mp3')
  let song2 = new Audio('/Forest Troubles.mp3')
  let song3 = new Audio('/guitarSong.mp3')
  let selectedSong = 2;

  function music(song) {
    if (song == 1) {
      song1.play();
    } if (song == 2) {
      song2.play()
    } if (song == 3) {
      song3.play()
    }
  }

  // setInterval(music, 0, selectedSong)

// }
