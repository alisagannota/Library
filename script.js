// Clock Set Up
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


// Mute/Unmute button

let volumeButton = document.getElementById("volume");
let audios = document.querySelectorAll(".audio");
// let audios = (audiosKeyboard, audiosSteps, audiosWriting, audiosWhispers, audiosWater);

volumeButton.addEventListener("click", mute);

function mute(){
    if(audios[0].muted){
        // console.log("NOT MUTE")
        audios.forEach(audio => audio.muted = false);
        volumeButton.style.background = "url(images/unmute.png)";
        volumeButton.style.backgroundSize = "cover";
    } else {
        // console.log("MUTE")
        audios.forEach(audio => audio.muted = true);
        volumeButton.style.background = "url(images/mute.png)";
        volumeButton.style.backgroundSize = "cover";
    }
}


// Sound Bars

let volumeSlider1 = document.getElementById("volume-control1");
let volumeSlider2 = document.getElementById("volume-control2");
let volumeSlider3 = document.getElementById("volume-control3");
let volumeSlider4 = document.getElementById("volume-control4");
let volumeSlider5 = document.getElementById("volume-control5");

let audioKeyboard = document.getElementById("keyboard");
let audioSteps = document.getElementById("steps");
let audioWriting = document.getElementById("writing");
let audioWhispers = document.getElementById("whispers");
let audioWater = document.getElementById("water");

function audioPlay1 () {
    audioKeyboard.play();
    audioKeyboard.loop = true;
}

volumeSlider1.addEventListener("mousemove", setVolume1);

function setVolume1(){
    audioKeyboard.volume = volumeSlider1.value / 100;
}

function audioPlay2 () {
    audioSteps.play();
    audioSteps.loop = true;
}

volumeSlider2.addEventListener("mousemove", setVolume2);

function setVolume2(){
    audioSteps.volume = volumeSlider2.value / 100;
}

function audioPlay3 () {
    audioWriting.play();
    audioWriting.loop = true;
}

volumeSlider3.addEventListener("mousemove", setVolume3);

function setVolume3(){
    audioWriting.volume = volumeSlider3.value / 100;
}

function audioPlay4 () {
    audioWhispers.play();
    audioWhispers.loop = true;
}

volumeSlider4.addEventListener("mousemove", setVolume4);

function setVolume4(){
    audioWhispers.volume = volumeSlider4.value / 100;
}



function audioPlay5 () {
    audioWater.play();
    audioWater.loop = true;
}

volumeSlider5.addEventListener("mousemove", setVolume5);

function setVolume5(){
    audioWater.volume = volumeSlider5.value / 100;
}

