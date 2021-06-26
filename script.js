var sound = new Audio('sounds/music.mp3'); // Harry potter theme music

var houses = ["Hufflepuff", "Gryffindor", "Slytherin", "Ravenclaw"]; //array of all for houses
var randomhouse = Math.floor(Math.random() * 4);

var audio = new Audio('sounds/' + houses[randomhouse] + 'before.mp3'); // Sorting hat speech for random house

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
        var audioafter = new Audio('sounds/' + houses[randomhouse] + 'after.mp3');
        audioafter.play();
        document.querySelector(".house").textContent = houses[randomhouse];
    }; //Name and voice of the alloted house shows up once the sorting hat's speech is over
    
}