var sound = new Audio('sounds/music.mp3'); // Harry potter theme music

var houses = ["Hufflepuff", "Gryffindor", "Slytherin", "Ravenclaw"]; //array of all for houses
var randomhouse = Math.floor(Math.random() * 4); //random number b/w 0-3

var audio = new Audio('sounds/' + houses[randomhouse] + 'before.mp3'); // Sorting hat speech for random house

var audioafter = new Audio('sounds/' + houses[randomhouse] + 'after.mp3'); //Audio for name of random house

document.querySelector(".house a").addEventListener("click", housetext);
function housetext() {

    document.querySelector(".house a").remove();

    sound.pause();
    sound.currentTime = 0;
    sound.play();

    audio.pause();
    audio.currentTime = 0; //Sorting hat speech restarts each time the button is clicked
    audio.play();


    document.querySelector(".house").textContent = "Your house is...";

    audio.onended = function () {
        audioafter.play();
        document.querySelector(".house").textContent = houses[randomhouse];
        document.querySelector(".housename").textContent = houses[randomhouse];
    }; //Name and voice of the alloted house shows up once the sorting hat's speech is over

    audioafter.onended = function () {
        setTimeout(function() {
        document.getElementById("eighth").remove();
        document.querySelector("#over").classList.remove("overlay");  
        document.querySelector("#cont").classList.remove("container"); 
        document.querySelector("#over").classList.add("overlayactive");  
        document.querySelector("#cont").classList.add("containeractive");
        }, 1000);
    };
}
/*
const splash = document.querySelector('.splashscreen');
Splash Screen
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add("invisible")
    }, 1800)
});
*/