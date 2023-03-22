
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
    // Arcade Exclusive
    let games = document.querySelectorAll('.item');
    //
    if (themeToggle.classList.contains('fa-toggle-off')) {
        themeToggle.classList.remove('fa-toggle-off');
        themeToggle.classList.add('fa-toggle-on');
        document.body.style.backgroundColor = 'rgb(170, 170, 170)';
        topBar.style.backgroundColor = 'rgb(136, 136, 136)';
        navBar.style.backgroundColor = 'rgb(136, 136, 136)';
        // Arcade Exclusive
        for (let x = 0; x < games.length; x++) {
            games[x].style.backgroundColor = 'rgb(126, 126, 126)';
        }
        for (let x = 0; x < games.length; x++) {
            games[x].style.border = '4vh double rgb(140, 140, 140)';
        }
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
        // Arcade Exclusive
        for (let x = 0; x < games.length; x++) {
            games[x].style.backgroundColor = "";
        }
        for (let x = 0; x < games.length; x++) {
            games[x].style.border = "";
        }
        snakeGame.setAttribute("src", "/images/SnekCover-export.png")
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
        // Arcade Exclusive
        let games = document.querySelectorAll('.item');
        //
        themeToggle.classList.remove('fa-toggle-off');
        themeToggle.classList.add('fa-toggle-on');
        document.body.style.backgroundColor = 'rgb(170, 170, 170)';
        topBar.style.backgroundColor = 'rgb(136, 136, 136)';
        navBar.style.backgroundColor = 'rgb(136, 136, 136)';
        // Arcade Exclusive
        for (let x = 0; x < games.length; x++) {
            games[x].style.backgroundColor = 'rgb(126, 126, 126)';
        }
        for (let x = 0; x < games.length; x++) {
            games[x].style.border = '4vh double rgb(140, 140, 140)';
        }
        //
        return;
    }
}
cookieCheck()
