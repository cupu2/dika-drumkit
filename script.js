const pads = document.querySelectorAll('.drum-pad');

const sounds = {
    bass: new Audio('sounds/bass.mp3'),
    snare: new Audio('sounds/snare.mp3'),
    tom1: new Audio('sounds/tom1.mp3'),
    tom2: new Audio('sounds/tom2.mp3'),
    Floor: new Audio('sounds/Floor.mp3'),
    crash: new Audio('sounds/crash.mp3'),
    Ride: new Audio('sounds/Ride.mp3'),
    hihat: new Audio('sounds/hihat.mp3')
}


pads.forEach(pad => {
    pad.addEventListener('click', () => {
       
        const soundName = pad.dataset.sound;
        
     
        if (sounds[soundName]) {
            sounds[soundName].play();
        } else {
            console.error('Sound not found:', soundName);
        }
    });
});