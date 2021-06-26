var sound = new Audio('sounds/music.mp3'); // Harry potter theme music

var houses = ["Hufflepuff", "Gryffindor", "Slytherin", "Ravenclaw"];
var randomhouse = Math.floor(Math.random() * 4);

var audio = new Audio('sounds/' + houses[randomhouse] + '.mp3'); // Sorting hat speech for random house

document.querySelector(".house").addEventListener("click", housetext);
function housetext() {

    sound.pause();
    sound.currentTime = 0;      //Harry potter theme music restarts each time the button is clicked
    sound.play();

    audio.pause();
    audio.currentTime = 0;      //Sorting hat speech restarts each time the button is clicked
    audio.play();


    document.querySelector(".house").textContent = "Your house is...";

    audio.onended = function () {    
        document.querySelector(".house").textContent = houses[randomhouse];
    }; //Name of the house shows up once the sorting hat's speech is over

};