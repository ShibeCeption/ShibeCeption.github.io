
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

let menuBar = document.querySelector('.nav-bar')



menu.onclick = function menu() {
  if (menuBar.style.visibility == "hidden") {
    menuBar.style.visibility = 'visible';
    return;
  }
  menuBar.style.visibility = 'hidden';
  return;
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
