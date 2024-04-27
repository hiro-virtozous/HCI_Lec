const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const videoContainer = document.getElementById('video-container');
const audioContainer = document.getElementById('getaud');
const moreinfo = document.getElementById('more-information');
const iklan = document.getElementById('iklan');
const overlay = document.getElementById('overlay');
const logoContainer = document.getElementById('inside-out-logo-container');
const logo = document.getElementById('inside-out-logo');
const body = document.getElementsByName('body');
const trailer = document.getElementById('video-inside');
const customPlay = document.getElementById('custom-play-button');
const customInfo = document.getElementById('custom-info-button');

let checkOpen = false;
let opened = false;
let isPaused = false;

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    if (scrollY > 420) {
        video.pause();
    } else if(scrollY < 420 && opened == true && isPaused == false) {
        video.play();
    }
});

function resetZoom() {
    document.body.style.zoom = "1";
}

window.onload = function() {
    resetZoom();
};

playPauseButton.addEventListener('click', function(){
    if(checkOpen == false){
        video.play(); 
        isPaused = false;
        logoContainer.style.left = '0%';
        logoContainer.style.opacity = '0';
        logo.style.width = '0';
        customPlay.style.top = '80%';
        customInfo.style.top = '80%';
    } else{
        video.pause();
        isPaused = true;
        logoContainer.style.left = '5%';
        logoContainer.style.opacity = '1';
        logo.style.width = '362.21px';
        customPlay.style.top = '68%';
        customInfo.style.top = '68%';
    }
    opened = true;
    checkOpen = !checkOpen;
});

let infoclick = false;

const setTime = () =>{
    trailer.currentTime = (0);
}

moreinfo.addEventListener('click', function(){
    if(infoclick == false){
        setTime();
        document.body.classList.add('no-scroll');
        iklan.style.height = '500px';
        infoclick = true;
        overlay.style.opacity = '100%';
        overlay.style.zIndex = '9';
        trailer.style.width = '100%';
        trailer.play();
    } else{
        iklan.style.height = '0';
        infoclick = false;
        overlay.style.opacity = '0';
        overlay.style.zIndex = '0';
    }
    
});

const closeBtn = document.getElementById('close-information');
closeBtn.addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    iklan.style.height = '0';
    infoclick = false;
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-9';
    trailer.pause();
});


let clicked = false;
trailer.addEventListener('click', function() {
    if(clicked == false){
        trailer.pause();
    } else{
        trailer.play();
    }
    clicked = !clicked;
});

let hovering = 0;

const monkeymore = document.getElementById('monkey-more-poster');
const popupmoreinfo = document.getElementById('monkey-pop-up-more-info');
const popupbox = document.getElementById('monkey-more-pop-up');

monkeymore.addEventListener('mouseenter', function() {
    if(hovering == 0){
        popupbox.style.width = '350px';
        popupbox.style.height = '305px';
        popupbox.style.top = '-65px';
        popupbox.style.zIndex = '10';
        popupbox.style.transition = '0.5s ease-out';
        hovering = 1;
    }
});

popupbox.addEventListener('mouseenter', function() {
    if(hovering == 1){
        popupbox.style.width = '350px';
        popupbox.style.height = '305px';
        popupbox.style.top = '-65px';
        popupbox.style.zIndex = '10';
        popupbox.style.transition = '0.5s ease-out';

    }
});

popupbox.addEventListener('mouseleave', function() {
    popupbox.style.width = '270px';
    popupbox.style.height = '150px';
    popupbox.style.top = '0';
    popupbox.style.zIndex = '0';
    popupbox.style.transition = '0.5s ease-out';
    popupmoreinfo.style.rotate = '0deg';
    hovering = 0;
});

const monkeyman = document.getElementById('monkey-man');
const monkeytrailer = document.getElementById('monkey-man-trailer');

const setMonkeyTime = () =>{
    monkeytrailer.currentTime = (0);
}

popupmoreinfo.addEventListener('click', function() {
    setMonkeyTime();
    popupmoreinfo.style.rotate = '-90deg';
    document.body.classList.add('no-scroll');
    monkeyman.style.height = '500px';
    overlay.style.opacity = '100%';
    overlay.style.zIndex = '9';
    trailer.style.width = '100%';
    monkeytrailer.play();
});

const monkeyCloseBtn = document.getElementById('monkey-close-information');
monkeyCloseBtn.addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    monkeyman.style.height = '0';
    infoclick = false;
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-9';
    monkeytrailer.pause();
});

let monkey_clicked = false;
monkeytrailer.addEventListener('click', function() {
    if(monkey_clicked == false){
        monkeytrailer.pause();
    } else{
        monkeytrailer.play();
    }
    monkey_clicked = !monkey_clicked;
});


const despicablemore = document.getElementById('despicable-more-poster');
const despicablepopupmoreinfo = document.getElementById('despicable-pop-up-more-info');
const despicablepopupbox = document.getElementById('despicable-more-pop-up');

despicablemore.addEventListener('mouseenter', function() {
    if(hovering == 0){
        despicablepopupbox.style.width = '350px';
        despicablepopupbox.style.height = '305px';
        despicablepopupbox.style.top = '-65px';
        despicablepopupbox.style.left = '-40px';
        despicablepopupbox.style.zIndex = '10';
        despicablepopupbox.style.transition = '0.5s ease-out';
        hovering = 1;
    }
});

despicablepopupbox.addEventListener('mouseenter', function() {
    if(hovering == 1) {
        despicablepopupbox.style.width = '350px';
        despicablepopupbox.style.height = '305px';
        despicablepopupbox.style.top = '-65px';
        despicablepopupbox.style.left = '-40px';
        despicablepopupbox.style.zIndex = '10';
        despicablepopupbox.style.transition = '0.5s ease-out';
    }
});

despicablepopupbox.addEventListener('mouseleave', function() {
    despicablepopupbox.style.width = '270px';
    despicablepopupbox.style.height = '150px';
    despicablepopupbox.style.top = '0';
    despicablepopupbox.style.zIndex = '0';
    despicablepopupbox.style.left = '0';
    despicablepopupbox.style.transition = '0.5s ease-out';
    despicablepopupmoreinfo.style.rotate = '0deg';
    hovering = 0;
});

const despicableme = document.getElementById('despicable-me');
const despicabletrailer = document.getElementById('despicable-me-trailer');

const setDespicableTime = () =>{
    despicabletrailer.currentTime = (0);
}

despicablepopupmoreinfo.addEventListener('click', function() {
    setDespicableTime();
    despicablepopupmoreinfo.style.rotate = '-90deg';
    document.body.classList.add('no-scroll');
    despicableme.style.height = '500px';
    overlay.style.opacity = '100%';
    overlay.style.zIndex = '9';
    trailer.style.width = '100%';
    despicabletrailer.play();
});

const despicableCloseBtn = document.getElementById('despicable-close-information');
despicableCloseBtn.addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    despicableme.style.height = '0';
    infoclick = false;
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-9';
    despicabletrailer.pause();
});

let despicable_clicked = false;
despicabletrailer.addEventListener('click', function() {
    if(despicable_clicked == false){
        despicabletrailer.pause();
    } else{
        despicabletrailer.play();
    }
    despicable_clicked = !despicable_clicked;
});



const apesmore = document.getElementById('apes-more-poster');
const apespopupmoreinfo = document.getElementById('apes-pop-up-more-info');
const apespopupbox = document.getElementById('apes-more-pop-up');

apesmore.addEventListener('mouseenter', function() {
    if(hovering == 0){
        apespopupbox.style.width = '350px';
        apespopupbox.style.height = '325px';
        apespopupbox.style.top = '-65px';
        apespopupbox.style.left = '-40px';
        apespopupbox.style.zIndex = '10';
        apespopupbox.style.transition = '0.5s ease-out';
        hovering = 1;
    }
});

apespopupbox.addEventListener('mouseenter', function() {
    if(hovering == 1){
        apespopupbox.style.width = '350px';
        apespopupbox.style.height = '325px';
        apespopupbox.style.top = '-65px';
        apespopupbox.style.left = '-40px';
        apespopupbox.style.zIndex = '10';
        apespopupbox.style.transition = '0.5s ease-out';
    }
});

apespopupbox.addEventListener('mouseleave', function() {
    apespopupbox.style.width = '270px';
    apespopupbox.style.height = '150px';
    apespopupbox.style.top = '0';
    apespopupbox.style.zIndex = '0';
    apespopupbox.style.left = '0';
    apespopupbox.style.transition = '0.5s ease-out';
    apespopupmoreinfo.style.rotate = '0deg';
    hovering = 0;
});

const apes = document.getElementById('apes');
const apestrailer = document.getElementById('apes-trailer');

const setApesTime = () =>{
    apestrailer.currentTime = (0);
}

apespopupmoreinfo.addEventListener('click', function() {
    setApesTime();
    apespopupmoreinfo.style.rotate = '180deg';
    document.body.classList.add('no-scroll');
    apes.style.height = '500px';
    overlay.style.opacity = '100%';
    overlay.style.zIndex = '9';
    trailer.style.width = '100%';
    apestrailer.play();
});

const apesCloseBtn = document.getElementById('apes-close-information');
apesCloseBtn.addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    apes.style.height = '0';
    infoclick = false;
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-9';
    apestrailer.pause();
});

let apes_clicked = false;
apestrailer.addEventListener('click', function() {
    if(apes_clicked == false){
        apestrailer.pause();
    } else{
        apestrailer.play();
    }
    apes_clicked = !apes_clicked;
});



const garfieldmore = document.getElementById('garfield-more-poster');
const garfieldpopupmoreinfo = document.getElementById('garfield-pop-up-more-info');
const garfieldpopupbox = document.getElementById('garfield-more-pop-up');

garfieldmore.addEventListener('mouseenter', function() {
    if(hovering == 0){
        garfieldpopupbox.style.width = '350px';
        garfieldpopupbox.style.height = '305px';
        garfieldpopupbox.style.top = '-65px';
        garfieldpopupbox.style.left = '-40px';
        garfieldpopupbox.style.zIndex = '10';
        garfieldpopupbox.style.transition = '0.5s ease-out';
        hovering = 1;   
    }
});

garfieldpopupbox.addEventListener('mouseenter', function() {
    if(hovering == 1){
        garfieldpopupbox.style.width = '350px';
        garfieldpopupbox.style.height = '305px';
        garfieldpopupbox.style.top = '-65px';
        garfieldpopupbox.style.left = '-40px';
        garfieldpopupbox.style.zIndex = '10';
        garfieldpopupbox.style.transition = '0.5s ease-out';
    }
});

garfieldpopupbox.addEventListener('mouseleave', function() {
    garfieldpopupbox.style.width = '270px';
    garfieldpopupbox.style.height = '150px';
    garfieldpopupbox.style.top = '0';
    garfieldpopupbox.style.zIndex = '0';
    garfieldpopupbox.style.left = '0';
    garfieldpopupbox.style.transition = '0.5s ease-out';
    garfieldpopupmoreinfo.style.rotate = '0deg';
    hovering = 0;
});

const garfield = document.getElementById('garfield');
const garfieldtrailer = document.getElementById('garfield-trailer');

const setGarfieldTime = () =>{
    garfieldtrailer.currentTime = (0);
}

garfieldpopupmoreinfo.addEventListener('click', function() {
    setApesTime();
    garfieldpopupmoreinfo.style.rotate = '90deg';
    document.body.classList.add('no-scroll');
    garfield.style.height = '500px';
    overlay.style.opacity = '100%';
    overlay.style.zIndex = '9';
    trailer.style.width = '100%';
    garfieldtrailer.play();
});

const garfieldCloseBtn = document.getElementById('garfield-close-information');
garfieldCloseBtn.addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    garfield.style.height = '0';
    infoclick = false;
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-9';
    garfieldtrailer.pause();
});

let garfield_clicked = false;
garfieldtrailer.addEventListener('click', function() {
    if(garfield_clicked == false){
        garfieldtrailer.pause();
    } else{
        garfieldtrailer.play();
    }
    garfield_clicked = !garfield_clicked;
});


const sonicmore = document.getElementById('sonic-more-poster');
const sonicpopupmoreinfo = document.getElementById('sonic-pop-up-more-info');
const sonicpopupbox = document.getElementById('sonic-more-pop-up');

sonicmore.addEventListener('mouseenter', function() {
    if(hovering == 0){
        sonicpopupbox.style.width = '350px';
        sonicpopupbox.style.height = '305px';
        sonicpopupbox.style.top = '-65px';
        sonicpopupbox.style.left = '-80px';
        sonicpopupbox.style.zIndex = '10';
        sonicpopupbox.style.transition = '0.5s ease-out';
        hovering = 1;
    }
});

sonicpopupbox.addEventListener('mouseenter', function() {
    if(hovering == 1){
        sonicpopupbox.style.width = '350px';
        sonicpopupbox.style.height = '305px';
        sonicpopupbox.style.top = '-65px';
        sonicpopupbox.style.left = '-80px';
        sonicpopupbox.style.zIndex = '10';
        sonicpopupbox.style.transition = '0.5s ease-out';
    }
});

sonicpopupbox.addEventListener('mouseleave', function() {
    sonicpopupbox.style.width = '270px';
    sonicpopupbox.style.height = '150px';
    sonicpopupbox.style.top = '0';
    sonicpopupbox.style.zIndex = '0';
    sonicpopupbox.style.left = '0';
    sonicpopupbox.style.transition = '0.5s ease-out';
    sonicpopupmoreinfo.style.rotate = '0deg';
    hovering = 0;
});

const sonic = document.getElementById('sonic');
const sonictrailer = document.getElementById('sonic-trailer');

const setSonicTime = () =>{
    sonictrailer.currentTime = (0);
}

sonicpopupmoreinfo.addEventListener('click', function() {
    setSonicTime();
    sonicpopupmoreinfo.style.rotate = '90deg';
    document.body.classList.add('no-scroll');
    sonic.style.height = '500px';
    overlay.style.opacity = '100%';
    overlay.style.zIndex = '9';
    trailer.style.width = '100%';
    sonictrailer.play();
});

const sonicCloseBtn = document.getElementById('sonic-close-information');
sonicCloseBtn.addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    sonic.style.height = '0';
    infoclick = false;
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-9';
    sonictrailer.pause();
});

let sonic_clicked = false;
sonictrailer.addEventListener('click', function() {
    if(sonic_clicked == false){
        sonictrailer.pause();
    } else{
        sonictrailer.play();
    }
    sonic_clicked = !sonic_clicked;
});


const view_more_button = document.getElementById('view-more-new-movie');
const view_more_image = document.getElementById('new-movie');
const showmoreless = document.getElementById('show-more-less');
let view_more_clicked = false;

view_more_button.addEventListener('click', function(){
    var scrollY = window.scrollY;
    if(view_more_clicked == false){
        view_more_image.style.height = "1200px";
        showmoreless.innerHTML = "SHOW LESS";
        setTimeout(() => {
            window.scrollTo({ top: 970, behavior: 'smooth' }); // Scroll to position 750 smoothly after 0.5s delay
        }, 300); // Delay for 0.5 seconds (500 milliseconds)
    } else{
        view_more_image.style.height = "0";
        showmoreless.innerHTML = "RECOMMENDED MOVIES";setTimeout(() => {
            window.scrollTo({ top: 350, behavior: 'smooth' }); // Scroll to position 750 smoothly after 0.5s delay
        }, 0); // Delay for 0.5 seconds (500 milliseconds)
    }
    view_more_clicked = !view_more_clicked;
});
