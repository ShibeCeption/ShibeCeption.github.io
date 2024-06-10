let games = document.querySelector('.games');
let dropdown = document.querySelector('.games-dropdown');
let dropdownA = document.querySelector('.games-dropdown a');
let angle = document.querySelector('.turn-angle');
angle.style.transform = "rotateZ(0deg)";

function gamesEnter() {
    angle.style.transform = "rotateZ(90deg)";
    dropdown.style.filter = "opacity(100%)";
    dropdown.style.transform = "scaleY(100%)"
    dropdownA.style.filter = "opacity(100%)";
    dropdownA.style.transform = "scaleY(100%)";
}

function gamesLeave() {
    angle.style.transform = "rotateZ(0deg)";
    dropdown.style.filter = "opacity(0%)";
    dropdown.style.transform = "scaleY(0%)"
    dropdownA.style.filter = "opacity(0%)";
    dropdownA.style.transform = "scaleY(0%)"
}


dropdown.onmouseenter = gamesEnter;
games.onmouseenter = gamesEnter;
angle.onmouseenter = gamesEnter;
let gamesCopy = document.querySelector('.games');
let dropdownCopy = document.querySelector('.games-dropdown');
let angleCopy = document.querySelector('.turn-angle');
dropdownCopy.onmouseleave = gamesLeave;
gamesCopy.onmouseleave = gamesLeave;
angleCopy.onmouseleave = gamesLeave;



let contact = document.querySelector('.contact');
let dropdownC = document.querySelector('.contact-dropdown');
let dropdownCA = document.querySelector('.contact-dropdown a');
let angle2 = document.querySelector('.turn-angle-2');
let dropdownCA2 = document.querySelector('.contact-dropdown a:last-child');
angle2.style.transform = "rotateZ(0deg)";

function contactEnter() {
    angle2.style.transform = "rotateZ(90deg)";
    dropdownC.style.filter = "opacity(100%)";
    dropdownC.style.transform = "scaleY(100%)"
    dropdownCA.style.filter = "opacity(100%)";
    dropdownCA.style.transform = "scaleY(100%)";
    dropdownCA2.style.filter = "opacity(100%)";
    dropdownCA2.style.transform = "scaleY(100%)";
}

function contactLeave() {
    angle2.style.transform = "rotateZ(0deg)";
    dropdownC.style.filter = "opacity(0%)";
    dropdownC.style.transform = "scaleY(0%)"
    dropdownCA.style.filter = "opacity(0%)";
    dropdownCA.style.transform = "scaleY(0%)";
    dropdownCA2.style.filter = "opacity(0%)";
    dropdownCA2.style.transform = "scaleY(0%)";
}


dropdownC.onmouseenter = contactEnter;
contact.onmouseenter = contactEnter;
angle2.onmouseenter = contactEnter;
let contactCopy = document.querySelector('.contact');
let dropdownCopy2 = document.querySelector('.contact-dropdown');
let angleCopy2 = document.querySelector('.turn-angle-2');
dropdownCopy2.onmouseleave = contactLeave;
contactCopy.onmouseleave = contactLeave;
angleCopy2.onmouseleave = contactLeave;
