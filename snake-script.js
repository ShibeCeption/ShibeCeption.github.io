/*
let extraSnekLength = document.createElement('img')
extraSnekLength.setAttribute("src", '/images/sneklengthright.png')
extraSnekLength.setAttribute("alt", "SnekLength")

if (confirm("Would you like to get longer?") == true) {
  snekLength.after(extraSnekLength.cloneNode(true))
  snekLength.after(extraSnekLength.cloneNode(true))
} else {

}
*/

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
  let topBar = document.querySelector('.top-bar');
  let navBar = document.querySelector('.nav-bar');
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
    let topBar = document.querySelector('.top-bar');
    let navBar = document.querySelector('.nav-bar');
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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = document.getElementById('snekHead')
let image2 = document.getElementById('snekLength')
let image3 = document.getElementById('snekEnd')

/*
image3.addEventListener("load", () => {
  ctx.drawImage(image, 192, 224, 32, 32);
  ctx.drawImage(image2, 224, 224, 32, 32)
  ctx.drawImage(image3, 256, 224, 32, 32)
});
*/

// ctx.clearRect(0, 0, canvas.width, canvas.height);
{
  /*
    //get a reference to the canvas var canvas = document.getElementById('canvas'); 
    //get a reference to the drawing context 
    var con = canvas.getContext('2d');  //draw 
    con.fillStyle = "white"; con.fillRect(0, 0, 500, 500);
  
    let data = [16, 68, 20, 30, 54]
    //draw data 
    con.fillStyle = "green";
    for (var io = 0; io < data.length; io++) { var dp = data[io]; con.fillRect(40 + io * 100, 460 - dp * 5, 50, dp * 5); }
  
    con.fillStyle = "black"; for (var io = 0; io < 6; io++) {
      con.fillText((5 - io) * 20 + "", 4, io * 80 + 60);
      con.beginPath();
      con.moveTo(25, io * 80 + 60);
      con.lineTo(30, io * 80 + 60);
      con.stroke();
    }
  
    var labels = ["JAN", "FEB", "MAR", "APR", "MAY"]; //draw horiz text
    for (var io = 0; io < 5; io++) {
      con.fillText(labels[io], 50 + io * 100, 475);
    }

  {
    let data = [];
    let numOfData = parseInt(prompt("how many parts do you want?"))
    for (let x = 0; x < numOfData; x++) {
      data.push(parseInt(prompt("Value?")))
    }
    for (let i = 0; i < data.length; i++) {
      data[i] = parseInt(data[i], 10)
    }
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d'); //draw background 
    c.fillStyle = "white";
    c.fillRect(0, 0, 500, 500);

    //a list of colors
    var colors = [];
    for (let i = 0; i < numOfData; i++) {
      colors.push(prompt("Color?"))
    }

    //calculate total of all data 
    var total = 0;
    for (var io = 0; io < data.length; io++) {
      total += data[io];
    }

    //draw pie data 
    var prevAngle = 0;
    for (var io = 0; io < data.length; io++) {
      //fraction that this pieslice represents     
      var fraction = data[io] / total;     //calc starting angle     
      var angle = prevAngle + fraction * Math.PI * 2;
      //draw the pie slice     
      c.fillStyle = colors[io];

      //fill with a radial gradient     
      var grad = c.createRadialGradient(250, 250, 10, 250, 250, 100);
      grad.addColorStop(0, "white");
      grad.addColorStop(1, colors[io]);
      c.fillStyle = grad;
      //create a path    
      c.beginPath();
      c.moveTo(250, 250);
      c.arc(250, 250, 100, prevAngle, angle, false);
      c.lineTo(250, 250);

      //fill it    
      c.fill();

      //stroke it     
      c.strokeStyle = "black";
      c.stroke();

      prevAngle = angle;

    }

    //draw centered text 
    c.fillStyle = "black";
    c.font = "24pt sans-serif"; var text = "Piechart";
    var metrics = c.measureText(text);
    c.fillText(text, 250 - metrics.width / 2, 400);

  } */

  // Check if something's coordinates is over something else
  /* let c = ctx
  c.beginPath();
  c.arc(
    100, 100, 40,
    //40 pix radius circle at 
    100, 100,
    0, Math.PI * 2,  //0 to 360 degrees for a full circle
  ); c.closePath();
  let a = c.isPointInPath(80, 0);
  // returns true 
  let b = c.isPointInPath(200, 100);  // returns false 
  // alert(`${a} and ${b}`)
  */

  // Animation
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

  // particles
  /*
    {
      let canvas = document.getElementById('canvas');
      var particles = [];
      var tick = 0;
      function loop() {
        window.requestAnimationFrame(loop);
        createParticles();
        updateParticles();
        killParticles();
        drawParticles();
      } window.requestAnimationFrame(loop);
  
      function createParticles() {
        //check on every 10th tick check     
        if (tick % 10 == 0) {
          //add particle if fewer than 100         
          if (particles.length < 100) {
            particles.push({
              x: Math.random() * canvas.width, //between 0 and canvas width                    
              y: 0, speed: 2 + Math.random() * 3, //between 2 and 5                     
              radius:
                5 + Math.random() * 5, //between 5 and 10                     
              color: "cyan",
            });
          }
        }
      }
      function updateParticles() {
        for (let i in particles) {
          let part = particles[i];
          part.y += part.speed;
        }
      }
      function killParticles() {
        for (let i in particles) {
          let part = particles[i];
          if (part.y > canvas.height) {
            part.y = 0;
          }
        }
      }
      function drawParticles() {
        let c = canvas.getContext('2d');
        c.fillStyle = "darkcyan";
        c.fillRect(0, 0, canvas.width, canvas.height);
        for (var i in particles) {
          let part = particles[i];
          c.beginPath();
          c.arc(part.x, part.y, part.radius, 0, Math.PI * 2);
          c.closePath(); c.fillStyle = part.color; c.fill();
        } 
      }
  let c = canvas.getContext('2d')
  c.fillStyle = "green"
  c.beginPath();
  c.arc(256, 256, 100, 0, Math.PI * 2);
  c.closePath(); c.fillStyle = "green"; c.fill();
}
*/
}

