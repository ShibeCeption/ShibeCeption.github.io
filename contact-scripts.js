
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
  let topBarText = document.querySelector('a');
  let games = document.querySelector('#gamesLink');
  let contact = document.querySelector('#contactLink');
  // Contact Exclusive
  let contactIcon = document.querySelector('.profile-pic');
  let contactInfo = document.querySelector('.contact-info');
  let contactHover = document.querySelectorAll('.profile-pic:hover, .contact-info:hover')

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
      topBarText.style.color = 'rgb(198, 230, 204)';
      menu.style.color = 'rgb(198, 230, 204)';
      games.style.color = 'rgb(198, 230, 204)';
      contact.style.color = 'rgb(198, 230, 204)';
      // Contact Exclusive
      contactIcon.style.borderColor = 'rgb(157, 183, 159)';
      contactInfo.style.borderColor = 'rgb(157, 183, 159)';
      contactInfo.style.color = 'rgb(198, 230, 204)';
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
      // Contact Exclusive
      contactIcon.style.borderColor = '';
      contactInfo.style.borderColor = '';
      contactInfo.style.color = '';
      // Code for glowing contact info
      

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
      // Contact Exclusive
      contactIcon.style.borderColor = 'rgb(157, 183, 159)';
      contactInfo.style.borderColor = 'rgb(157, 183, 159)';
      contactInfo.style.color = 'rgb(198, 230, 204)';
      // Code for glowing contact info
      for (let x = 0; x < contactHover.length; x++) {
        
      }
      return;
    }
  }
  cookieCheck();

  // Theme Toggle Code
  function transitions() {
    document.body.style.transition = 'all 1s ease-in-out';
    contactInfo.style.transition = 'all 1s ease-in-out';
    contactIcon.style.transition = 'all 1s ease-in-out';
    topBar.style.transition = 'all 1s ease-in-out';
    navBar.style.transition = 'all 1s ease-in-out';
      menu.style.transition = 'all 1s ease-in-out';
      games.style.transition = 'all 1s ease-in-out';
      contact.style.transition = 'all 1s ease-in-out';
      topBarText.style.transition = 'all 1s ease-in-out';
  }
  setTimeout(transitions, 0);
