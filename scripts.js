/*
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
cookieCheck();
*/

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
  let items = document.querySelectorAll('.cm img');
  // Arcade Exclusive
  let gamesIcon = document.querySelectorAll('.item');
  //

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
      document.cookie = "darkMode=on";
      // Arcade Exclusive
      for (let x = 0; x < gamesIcon.length; x++) {
        gamesIcon[x].style.backgroundColor = 'hsl(124, 12%, 25%)';
    } for (let x = 0; x < gamesIcon.length; x++) {
        gamesIcon[x].style.borderColor = 'hsl(104, 12%, 32%)';
    } for (let x = 0; x < 3; x++) {
        items[x].style.filter = 'invert(100%)';
    }
    //
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
      // Arcade Exclusive
      for (let x = 0; x < gamesIcon.length; x++) {
        gamesIcon[x].style.backgroundColor = '';
    } for (let x = 0; x < gamesIcon.length; x++) {
        gamesIcon[x].style.borderColor = '';
    } for (let x = 0; x < 3; x++) {
        items[x].style.filter = '';
    }
    //
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
      // Arcade Exclusive
      for (let x = 0; x < gamesIcon.length; x++) {
        gamesIcon[x].style.backgroundColor = 'hsl(124, 12%, 25%)';
    } for (let x = 0; x < gamesIcon.length; x++) {
        gamesIcon[x].style.borderColor = 'hsl(104, 12%, 32%)';
    } for (let x = 0; x < 3; x++) {
        items[x].style.filter = 'invert(100%)';
    }
    //
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
      // Arcade Exclusive
      let gamesImg = document.querySelectorAll('.games img');
      for (let x = 0; x < topBarText.length; x++) {
        topBarText[x].style.transition = 'all 1s ease-in-out';
      } // Arcade Exclusive
      for (let x = 0; x < gamesIcon.length; x++) {
          gamesIcon[x].style.transition = 'all 1s ease-in-out';
      } for (let x = 0; x < games.length; x++) {
          gamesIcon[x].style.transition = 'all 1s ease-in-out';
      } for (let x = 0; x < 3; x++) {
          items[x].style.transition = 'all 1s ease-in-out';
      } for (let x = 0; x < gamesImg.length; x++) {
        gamesImg[x].style.transition = 'all 1s ease-in-out'
      }
      //
  }
  setTimeout(transitions, 0);
