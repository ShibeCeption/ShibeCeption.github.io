
let menuBar = document.querySelector('.nav-bar');
let topBar = document.querySelector('.top-bar');
let navBar = document.querySelector('.nav-bar');

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
let topBarText = document.querySelector('a');
let gamesLink = document.querySelector('#gamesLink');
let contact = document.querySelector('#contactLink');
let items = document.querySelectorAll('.cm img');

function toggleTheme(e) {
    let topBar = document.querySelector('.top-bar');
    let navBar = document.querySelector('.nav-bar');
    // Arcade Exclusive
    let games = document.querySelectorAll('.item');
    //
    if (themeToggle.classList.contains('fa-toggle-off')) {
        themeToggle.classList.remove('fa-toggle-off');
        themeToggle.classList.add('fa-toggle-on');
        document.body.style.backgroundColor = 'rgb(35, 50, 35)';
        topBar.style.backgroundColor = 'rgb(55, 70, 55)';
        navBar.style.backgroundColor = 'rgb(55, 70, 55)';
        navBar.style.color = 'rgb(198, 230, 204)';
        topBarText.style.color = 'rgb(198, 230, 204)';
        menu.style.color = 'rgb(198, 230, 204)';
        gamesLink.style.color = 'rgb(198, 230, 204)';
        contact.style.color = 'rgb(198, 230, 204)';
        // Arcade Exclusive
        for (let x = 0; x < games.length; x++) {
            games[x].style.backgroundColor = 'hsl(124, 12%, 25%)';
        } for (let x = 0; x < games.length; x++) {
            games[x].style.borderColor = 'hsl(104, 12%, 32%)';
        } for (let x = 0; x < 3; x++) {
            items[x].style.filter = 'invert(100%)';
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
        navBar.style.color = '';
        topBarText.style.color = '';
        menu.style.color = '';
        gamesLink.style.color = '';
        contact.style.color = '';
        // Arcade Exclusive
        for (let x = 0; x < games.length; x++) {
            games[x].style.backgroundColor = "";
        }
        for (let x = 0; x < games.length; x++) {
            games[x].style.border = "";
        } for (let x = 0; x < 3; x++) {
            items[x].style.filter = '';
        }
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
        document.body.style.backgroundColor = 'rgb(35, 50, 35)';
        topBar.style.backgroundColor = 'rgb(55, 70, 55)';
        navBar.style.backgroundColor = 'rgb(55, 70, 55)';
        navBar.style.color = 'rgb(198, 230, 204)';
        topBarText.style.color = 'rgb(198, 230, 204)';
        menu.style.color = 'rgb(198, 230, 204)';
        gamesLink.style.color = 'rgb(198, 230, 204)';
        contact.style.color = 'rgb(198, 230, 204)';
        // Arcade Exclusive
        for (let x = 0; x < games.length; x++) {
            games[x].style.backgroundColor = 'hsl(124, 12%, 25%)';
        }
        for (let x = 0; x < games.length; x++) {
            games[x].style.borderColor = 'hsl(104, 12%, 32%)';
        } for (let x = 0; x < 3; x++) {
            items[x].style.filter = 'invert(100%)';
        }
        //
        return;
    }
}
cookieCheck()
