let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"]

let started = false;
let level = 0;

let h21 = document.querySelector('h2');

// To start the game 
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started!");
        started = true;
    }
    setTimeout(levelUp, 1000);
});

// flashes given by game itself
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

// flash generated once user presses any colour
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

// most important function
function levelUp() {
    userSeq = []; // user have to fill it from start 
    level++;
    // console.log(`Current level: ${level}`);
    h21.innerText = `Level ${level}`;

    //random button choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];

    gameSeq.push(randColor); //adding the rangom colour to gameseq

    console.log(gameSeq);
    // console.log(`gs = ${gameSeq}`);
    // console.log(`us = [ ${userSeq} ]`);


    let randbtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);

    gameFlash(randbtn);
}

function reseter() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


function checkAns(idx) {
    // console.log("Current  Level: ", level);
    // let idx = level-1;

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        // h21.innerHTML = `Game Over! <style color= "yellow"><b> SCORE : ${level}<b></style <br> Press any key to restart.`;

        h21.innerHTML = `Game Over! <span style="color: yellow;"><b> SCORE : ${level}</b></span> <br> Press any key to restart.`;

        reseter();
    }
}




// if button is pressed this should happen
function btnPress() {
    let btn = this;
    console.log(btn);
    // gameFlash(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id"); // or btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length - 1); // after user give the input it should be evaluated!

}

// user click
let allbtn = document.querySelectorAll('.btn');
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}
