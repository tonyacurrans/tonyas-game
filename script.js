"use script";
// const btn2 = document.getElementById('btn2');

// SHOWS USER ENTERED TEXT
const txt1 = document.getElementById('userText');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('newText');

function message () {
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', message);

const buttonAnswer = [
    'btn2',
    'btn3',
    'btn4',
    'btn5',
    'btn6',
    'btn7'
];

const pattern = [
    "<img src='/tonyas-game/assets/cherry.png' alt='cherry pattern' width='300' height='150'></img>",
    "<img src='/tonyas-game/assets/blueberry.png' alt='blueberry pattern' width='300' height='150'></img>",
    "<img src='/tonyas-game/assets/candy.png' alt='candy pattern' width='300' height='150'></img>",
    "<img src='/tonyas-game/assets/lemon.png' alt='lemon pattern' width='300' height='150'></img>",
    "<img src='/tonyas-game/assets/purple.png' alt='purple pattern' width='300' height='150'></img>",
    "<img src='/tonyas-game/assets/swamp.png' alt='swamp pattern' width='300' height='150'></img>"
];



let turn = 0;

showPic();



function showPic () {
    document.getElementById("showImage").innerHTML = pattern[turn];
    document.getElementById('counter').innerHTML = turn + 1;
}


function nextQuestion () {
    if (turn < 5) {
       turn = turn +1;
       showPic();
    }

}

// CHERRY FUNCTION START
 function cherry() {
     document.querySelector('.box').style.backgroundImage = "url('/tonyas-game/assets/cherry.png')";
     if (document.getElementById('btn2').id === buttonAnswer[turn]) {
        document.getElementById("instructions").innerHTML = "Good Eye!";
        nextQuestion();
        
      } else {
        document.getElementById("instructions").innerHTML = "Better Luck Next Time!";
        nextQuestion();
      }
 }
document.getElementById("btn2").addEventListener('click', cherry );

 

// // BLUEBERRY FUNCTION START
function blueberry() {
    document.querySelector('.box').style.backgroundImage = "url('/tonyas-game/assets/blueberry.png')";
    if (document.getElementById('btn3').id === buttonAnswer[turn]) {
       document.getElementById("instructions").innerHTML = "Good Eye!";
       nextQuestion();
       
     } else {
       document.getElementById("instructions").innerHTML = "Better Luck Next Time!";
       nextQuestion();
     }
}
document.getElementById("btn3").addEventListener('click', blueberry);



// // CANDY FUNCTION START
function candy() {
    document.querySelector('.box').style.backgroundImage = "url('/tonyas-game/assets/candy.png')";
    if (document.getElementById('btn4').id === buttonAnswer[turn]) {
       document.getElementById("instructions").innerHTML = "Good Eye!";
       nextQuestion();
     } else {
       document.getElementById("instructions").innerHTML = "Better Luck Next Time!";
       nextQuestion();
     }
}
btn4.addEventListener('click', candy);

// // LEMON FUNCTION START
function lemon() {
    document.querySelector('.box').style.backgroundImage = "url('/tonyas-game/assets/lemon.png')";
    if (document.getElementById('btn5').id === buttonAnswer[turn]) {
       document.getElementById("instructions").innerHTML = "Good Eye!";
       nextQuestion();
     } else {
       document.getElementById("instructions").innerHTML = "Better Luck Next Time!";
       nextQuestion();
     }
}
btn5.addEventListener('click', lemon);



// // PURPLE FUNCTION START
function purple() {
    document.querySelector('.box').style.backgroundImage = "url('/tonyas-game/assets/purple.png')";
    if (document.getElementById('btn6').id === buttonAnswer[turn]) {
       document.getElementById("instructions").innerHTML = "Good Eye!";
       nextQuestion();
     } else {
       document.getElementById("instructions").innerHTML = "Better Luck Next Time!";
       nextQuestion();
     }
}
btn6.addEventListener('click', purple);

// // SWAMP FUNCTION START
function swamp() {
    document.querySelector('.box').style.backgroundImage = "url('/tonyas-game/assets/swamp.png')";
    if (document.getElementById('btn7').id === buttonAnswer[turn]) {
       document.getElementById("instructions").innerHTML = "Good Eye!";
       nextQuestion();
     } else {
       document.getElementById("instructions").innerHTML = "Better Luck Next Time!";
       nextQuestion();
     }
}
btn7.addEventListener('click', swamp);

