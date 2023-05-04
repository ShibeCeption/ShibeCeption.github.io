{

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



  let themeToggle = document.querySelector('.fa-toggle-off')
  let themeToggle2 = document.querySelector('.toggle-text')

  function toggleTheme(e) {
    let topBar = document.querySelector('.top-bar');
    let navBar = document.querySelector('.nav-bar');
    if (themeToggle.classList.contains('fa-toggle-off')) {
      themeToggle.classList.remove('fa-toggle-off');
      themeToggle.classList.add('fa-toggle-on');
      document.body.style.backgroundColor = 'rgb(170, 170, 170)';
      topBar.style.backgroundColor = 'rgb(136, 136, 136)';
      navBar.style.backgroundColor = 'rgb(136, 136, 136)';
      document.cookie = "darkMode=on"
      e.stopPropagation()
      return;
    } if (themeToggle.classList.contains('fa-toggle-on')) {
      themeToggle.classList.remove('fa-toggle-on');
      themeToggle.classList.add('fa-toggle-off');
      document.body.style.backgroundColor = "";
      topBar.style.backgroundColor = "";
      navBar.style.backgroundColor = "";
      document.cookie = "darkMode=off"
      e.stopPropagation()
      return;
    }
  }

  themeToggle.onclick = toggleTheme;
  themeToggle2.onclick = toggleTheme;

  function cookieCheck() {
    if (document.cookie == "darkMode=off") {

      return;
    } if (document.cookie == "darkMode=on") {
      let topBar = document.querySelector('.top-bar');
      let navBar = document.querySelector('.nav-bar');
      themeToggle.classList.remove('fa-toggle-off');
      themeToggle.classList.add('fa-toggle-on');
      document.body.style.backgroundColor = 'rgb(170, 170, 170)';
      topBar.style.backgroundColor = 'rgb(136, 136, 136)';
      navBar.style.backgroundColor = 'rgb(136, 136, 136)';
      return;
    }
  }
  cookieCheck()

  document.body.onkeydown = function goBack(e) {
    if (e.keyCode == 8) {
      let leaveCheck = confirm("Do you wish to leave the Game?")
      leaveCheck == true
        ? location.href = 'http://127.0.0.1:5500/arcade.html'
        : console.log("Leave Denied");
    }
  }

  function screenCheck() {
    if (window.matchMedia("(max-width: 1370px)").matches) {
      topBar.style.display = "none";
      navBar.style.display = "none";
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

  document.onkeydown = function wasdControls(e) {
    if (e.keyCode == 87) {
      moveDir = "up";
    } if (e.keyCode == 83) {
      moveDir = "down"
    } if (e.keyCode == 65) {
      moveDir = "left"
    } if (e.keyCode == 68) {
      moveDir = "right"
    }
  }

  function movement() {
    let speed = 32
    if (moveDir == "down") {
      movementY += speed
      snek.style.top = movementY + 'px'
    } if (moveDir == "up") {
      movementY -= speed
      snek.style.top = movementY + 'px'
    } if (moveDir == "left") {
      movementX -= speed;
      snek.style.left = movementX + 'px';
    } if (moveDir == "right") {
      movementX += speed;
      snek.style.left = movementX + 'px';
    }
  }

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
    }
  }

  function snek() {
    moved = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnek();
    checkDirection()
    checkCollision();
    moveSnek();
    drawFood();
    drawObjects();
  }

  let food = new Image();
  food.src = '/images/Foods.png'
  let foodLimit = 99;
  let foodSpawned = 0;
  let foods = {
    food1: {
      spawnLocationX: Math.floor(Math.random() * 15) * 32,
      spawnLocationY: Math.floor(Math.random() * 15) * 32,
      foodType: Math.floor(Math.random() * 10) * 10,
    }, food2: {
      spawnLocationX: Math.floor(Math.random() * 15) * 32,
      spawnLocationY: Math.floor(Math.random() * 15) * 32,
      foodType: Math.floor(Math.random() * 10) * 10,
    }, food3: {
      spawnLocationX: Math.floor(Math.random() * 15 + 1) * 32,
      spawnLocationY: Math.floor(Math.random() * 15 + 1) * 32,
      foodType: Math.floor(Math.random() * 10) * 10,
    }, food4: {
      spawnLocationX: Math.floor(Math.random() * 15 + 1) * 32,
      spawnLocationY: Math.floor(Math.random() * 15 + 1) * 32,
      foodType: Math.floor(Math.random() * 10) * 10,
    }
  }

  let currentFood = 0;
  let mouseType = Math.floor(Math.random() * 2);

  function drawFood() {
    for (let x = 1; x < 5; x++) {
      if (foods[`food${x}`].foodType <= 10) {
        mouseType == 0 ? ctx.drawImage(food, 64, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32)
          : ctx.drawImage(food, 96, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32)
      } if (foods[`food${x}`].foodType > 10 && foods[`food${x}`].foodType < 70) {
        ctx.drawImage(food, 0, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      } if (foods[`food${x}`].foodType >= 70) {
        ctx.drawImage(food, 32, 0, 32, 32, foods[`food${x}`].spawnLocationX, foods[`food${x}`].spawnLocationY, 32, 32);
      }
    }
    // ctx.drawImage(food, foods.food1.foodType, 0, 32, 32, foods.food1.spawnLocationX, foods.food1.spawnLocationY, 32, 32);
  }

  function moveSnek() {
    snekCoords.snekHead.old.x = snekCoords.snekHead.x;
    snekCoords.snekHead.old.y = snekCoords.snekHead.y;
    snekCoords.snekLength.old.x = snekCoords.snekLength.x;
    snekCoords.snekLength.old.y = snekCoords.snekLength.y;
    snekCoords.snekEnd.old.x = snekCoords.snekEnd.x;
    snekCoords.snekEnd.old.y = snekCoords.snekEnd.y;

    // Code needs rework for longer lengths -->

    if (snekDirection == "left") {
      snekCoords.snekHead.x -= 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "left"
      return;
    } if (snekDirection == "right") {
      snekCoords.snekHead.x += 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "right"
      return;
    } if (snekDirection == "down") {
      snekCoords.snekHead.y += 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "down"
      return;
    } if (snekDirection == "up") {
      snekCoords.snekHead.y -= 32;
      snekCoords.snekLength.x = snekCoords.snekHead.old.x;
      snekCoords.snekLength.y = snekCoords.snekHead.old.y;
      snekCoords.snekEnd.x = snekCoords.snekLength.old.x;
      snekCoords.snekEnd.y = snekCoords.snekLength.old.y;
      oldDirection = "up"
      return;
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
  collidables.src = '/images/collidables.png'

  function drawObjects() {
    drawObject("bush", 64, 64)
    drawObject("rock", 160, 160)
    drawObject("pTree", 256, 0)
    drawObject("oTree", 384, 128)
    drawObject("moai", 384, 384)
  }

  let rockType = Math.floor(Math.random() * 3) * 64;
  rockType == 0 ? rockType = 64 : rockType = rockType;
  let moaiType = Math.floor(Math.random() * 2)
  let size = 64;

  function drawObject(type, xCoords, yCoords) {
    if (type == "bush") {
      ctx.drawImage(collidables, 0, 0, 64, 64, xCoords, yCoords, size, size,);
    } if (type == "rock") {
      ctx.drawImage(collidables, rockType, 0, 64, 64, xCoords, yCoords, size, size);
    } if (type == "pTree") {
      ctx.drawImage(collidables, 256, 0, 64, 64, xCoords, yCoords, size, size);
      ctx.drawImage(collidables, 320, 0, 64, 64, xCoords, yCoords + size, size, size)
    } if (type == "oTree") {
      ctx.drawImage(collidables, 384, 0, 64, 64, xCoords, yCoords, size, size);
      ctx.drawImage(collidables, 448, 0, 64, 64, xCoords, yCoords + size, size, size)
    } if (type == "moai") {
      if (moaiType == 1) {
        ctx.drawImage(collidables, 704, 0, 64, 64, xCoords, yCoords, size, size);
        ctx.drawImage(collidables, 640, 0, 64, 64, xCoords, yCoords + size, size, size)
        return;
      }
      ctx.drawImage(collidables, 576, 0, 64, 64, xCoords, yCoords, size, size);
      ctx.drawImage(collidables, 512, 0, 64, 64, xCoords, yCoords + size, size, size)
    }
  }

  let Objects = {
    template: {
      x: 32,
      y: 256,
      sizeX: 32,
      sizeY: 64,
    }
  }

  let snekCollider = {
    x: 0,
    y: 0,
  }

  function checkCollision() {
  }

  function checkDirection() {

  }

  // Make snek parts go to the part infront of old position

  setInterval(snek, 1000 / 6);

  let song1 = new Audio('/grandTheme.wav')
  let song2 = new Audio('/Forest Troubles.mp3')

  function music(song) {
    if (song == 1) {
      song1.play();
    } if (song == 2) {
      song2.play()
    }
  }

  setInterval(music(2), 0)
}
