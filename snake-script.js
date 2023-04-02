
let topBar = document.querySelector('.top-bar');
let navBar = document.querySelector('.nav-bar');
// Snek Exclusive
let snekBorder = document.querySelector('#snek')
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
  // Snek Exclusive
  let snekBorder = document.querySelector('#snek')
  //
  if (themeToggle.classList.contains('fa-toggle-off')) {
    themeToggle.classList.remove('fa-toggle-off');
    themeToggle.classList.add('fa-toggle-on');
    document.body.style.backgroundColor = 'rgb(170, 170, 170)';
    topBar.style.backgroundColor = 'rgb(136, 136, 136)';
    navBar.style.backgroundColor = 'rgb(136, 136, 136)';
    // Snek Exclusive
    snekBorder.style.border = 'border: 3vw solid rgb(88, 110, 63)';
    //
    document.cookie = "darkMode=on"
    e.stopPropagation()
    return;
  } if (themeToggle.classList.contains('fa-toggle-on')) {
    themeToggle.classList.remove('fa-toggle-on');
    themeToggle.classList.add('fa-toggle-off');
    document.body.style.backgroundColor = "";
    topBar.style.backgroundColor = "";
    navBar.style.backgroundColor = "";
    // Snek Exclusive
    snekBorder.style.border = "";
    //
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
    // Snek Exclusive
    let snekBorder = document.querySelector('#snek')
    //
    themeToggle.classList.remove('fa-toggle-off');
    themeToggle.classList.add('fa-toggle-on');
    document.body.style.backgroundColor = 'rgb(170, 170, 170)';
    topBar.style.backgroundColor = 'rgb(136, 136, 136)';
    navBar.style.backgroundColor = 'rgb(136, 136, 136)';
    // Snek Exclusive
    snekBorder.style.border = 'border: 3vw solid rgb(88, 110, 63)';
    //
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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = document.getElementById('snekHead')
let image2 = document.getElementById('snekLength')
let image3 = document.getElementById('snekEnd')


  {
    let image4 = document.getElementById('snekHeadR')
    let image5 = document.getElementById('snekLengthR')
    let image6 = document.getElementById('snekEndR')
    let image10 = document.getElementById('snekLengthRS')

    let image7 = document.getElementById('snekHeadB')
    let image8 = document.getElementById('snekLengthB')
    let image9 = document.getElementById('snekEndB')

    let sc = 0;
    let rc = 0;
    let bc = 0;

    let lapsSn = document.createTextNode(` Normal Snek: ${sc} laps`)
    let lapsRn = document.createTextNode(` Racer Snek: ${rc} laps`)
    let lapsBn = document.createTextNode(` Boomslang: ${bc} laps`)

    lapsS.append(lapsSn)
    lapsR.append(lapsRn)
    lapsB.append(lapsBn)

    let x = 600;
    let y = 600;
    let z = 600;
    function drawIt() {
      window.requestAnimationFrame(drawIt);
      var canvas = document.getElementById('canvas');
      var c = canvas.getContext('2d'); c.fillStyle = "darkgreen";
      c.clearRect(0, 0, canvas.width, canvas.height);
      // c.fillRect(x, 100, 200, 100);
      c.drawImage(image, x - 32, 160, 32, 32);
      c.drawImage(image2, x, 160, 32, 32)
      c.drawImage(image3, x + 32, 160, 32, 32)

      c.drawImage(image4, y - 32, 224, 32, 32)
      c.drawImage(image5, y, 224, 32, 32)
      c.drawImage(image10, y + 32, 224, 32, 32)
      c.drawImage(image6, y + 64, 224, 32, 32)

      c.drawImage(image7, z - 32, 288, 32, 32)
      c.drawImage(image8, z, 288, 32, 32)
      c.drawImage(image8, z + 32, 288, 32, 32)
      c.drawImage(image8, z + 64, 288, 32, 32)
      c.drawImage(image9, z + 96, 288, 32, 32)

      x -= 1.5
      y -= 3
      z -= 2
      if (x < -100) {
        x = 600
        sc++
        lapsSn.data = " Normal Snek: " + bc + " laps"
      } if (y < -100) {
        y = 600
        rc++
        lapsRn.data = " Racer Snek: " + rc + " laps"
      } if (z < -150) {
        z = 600
        bc++
        lapsBn.data = " Boomslang: " + bc + " laps"
      }
    }
  } window.requestAnimationFrame(drawIt);

