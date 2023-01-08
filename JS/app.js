var typed = new Typed('.typed', {
    strings: [
        'web developer',
        'smart guy',
        'creative person',
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

AOS.init();

//Preloader script

    window.addEventListener('load', finish );

      function finish() {
          const preloader = document.querySelector('.preloader');
          preloader.classList.add('finish')
      }

// Clock script

    function Clock() {
        var data = new Date()
        var Hours = ('00' + data.getHours()).slice(-2);
        var Minutes = ('00' + data.getMinutes()).slice(-2);
        var Seconds = ('00' + data.getSeconds()).slice(-2);
        document.getElementById('clock').innerHTML = Hours + ':' + Minutes + ':' + Seconds

        setTimeout(Clock, 1000)
    }
    Clock()

//Delay function

function delay() {

// First progress bar counter

    var time = 1;
    var countup = setInterval( () => {
        time++;
        document.querySelector('.num').innerHTML = time + '%';

        if (time > 79) {
            time = 79
        }

    }, 19)

// Second progress bar counter

var time1 = 1;
var countup1 = setInterval( () => {
    time1++;
    document.querySelector('.num-1').innerHTML = time1 + '%';

    if (time1 > 59) {
        time1 = 59 
    }

}, 25)

// Third progress bar counter

var time2 = 1;
var countup2 = setInterval( () => {
    time2++;
    document.querySelector('.num-2').innerHTML = time2 + '%';

    if (time2 > 29) {
        time2 = 29 
    }

}, 48)

// Fourth progress bar counter

var time3 = 1;
var countup3 = setInterval( () => {
    time3++;
    document.querySelector('.num-3').innerHTML = time3 + '%';

    if (time3 > 9) {
        time3 = 9 
    }

}, 160)

// Circular progress first circle script

    var circularprogress = document.querySelector('.circular-progress');
    var number = document.querySelector('.number-progress');

    let progressStartValue = 0,
        progressEndValue = 100,
        speed = 15;

        let progress = setInterval(() => {
            progressStartValue++;

            number.textContent = `${progressStartValue}%`;
            circularprogress.style.background = `conic-gradient(rgba(81,179,226,1) ${progressStartValue * 3.6}deg, rgb(190,190,190) 0deg`;

                if(progressStartValue === progressEndValue) {
                    clearInterval(progress)
                }

        },speed)

// Circular progress second circle script

    var circularprogress1 = document.querySelector('.circular-progress-1');
    var number1 = document.querySelector('.number-progress-1');

    let progressStartValue1 = 0,
        progressEndValue1 = 80,
        speed1 = 20;

        let progress1 = setInterval(() => {
            progressStartValue1++;

            number1.textContent = `${progressStartValue1}%`;
            circularprogress1.style.background = `conic-gradient(rgba(81,179,226,1) ${progressStartValue1 * 3.6}deg, rgb(190,190,190) 0deg`;

                if(progressStartValue1 === progressEndValue1) {
                    clearInterval(progress1)
                }

        },speed1)

//Circular progress third circle script

    var circularprogress2 = document.querySelector('.circular-progress-2');
    var number2 = document.querySelector('.number-progress-2');

    let progressStartValue2 = 0,
        progressEndValue2 = 20,
        speed2 = 80;

        let progress2 = setInterval(() => {
            progressStartValue2++;

            number2.textContent = `${progressStartValue2}%`;
            circularprogress2.style.background = `conic-gradient(rgba(81,179,226,1) ${progressStartValue2 * 3.6}deg, rgb(190,190,190) 0deg`;

                if(progressStartValue2 === progressEndValue2) {
                    clearInterval(progress2)
                }

        },speed2)

}
setTimeout(delay, 700);
    
// Responsive left side script

    const cvbox = document.querySelector('.cv-box');
    const mainleft = document.querySelector('.main-left')
    const circle = document.querySelector('.circle');
    const circle0 = document.querySelector('.circle0');
    const circle1 = document.querySelector('.circle1');

    cvbox.addEventListener('click', () => {
        mainleft.classList.toggle('active');
        circle.classList.toggle('active');
        circle0.classList.toggle('active')
        circle1.classList.toggle('active');
    })
    
// Responsive hamburgermenu script

    const hamburger1 = document.querySelector('.hamburger-1');

    hamburger1.addEventListener('click', () => {
        general.classList.toggle('active');
        hamburger1.classList.toggle('active');
    })

// Hamburgermenu script

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-box');
    const general = document.querySelector('.general-menu');
    const menutext = document.querySelector('.menu');
    const activemenu = document.querySelector('.active-menu a');

    hamburger.addEventListener('click', () => { 
        general.classList.toggle('active');
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    })
