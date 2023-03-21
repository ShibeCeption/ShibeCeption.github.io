
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