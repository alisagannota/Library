const deg = 6; 

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();
    
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});


let volumeSlider1 = document.getElementById("volume-control1");
let audioKeyboard = document.getElementById("keyboard");

function audioPlay () {
    audioKeyboard.play();
    audioKeyboard.loop = true;
}

volumeSlider1.addEventListener("mousemove", setVolume);

function setVolume(){
    audioKeyboard.volume = volumeSlider1.value / 100;
}