var i = 1;
var p1 = 0;
var p2 = 0;
let active1 = document.querySelector(".activeBar01");
let active2 = document.querySelector(".activeBar02");

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");

let player1 = document.querySelector(".player01");
player1.children[1].innerHTML = `<h4>Win = ${p1}</h4>`;
let player2 = document.querySelector(".player02");
let winner = document.createElement("h1");
winner.innerText = "Winner";
winner.style.color = "yellow";

function check() {
    if (i % 2 != 0) {
        document.body.style.backgroundColor = " rgba(255, 0, 0, 0.397)";
        active1.classList.add("active");
        active2.classList.remove("active");
    }

    else {
        document.body.style.backgroundColor = "#14baba";
        active1.classList.remove("active");
        active2.classList.add("active");
    }

    if (box1.innerText == "1" && box2.innerText == "1" && box3.innerText == "1" || box1.innerText == "1" && box4.innerText == "1" && box7.innerText == "1" || box1.innerText == "1" && box5.innerText == "1" && box9.innerText == "1" || box3.innerText == "1" && box6.innerText == "1" && box9.innerText == "1" || box3.innerText == "1" && box5.innerText == "1" && box7.innerText == "1" || box7.innerText == "1" && box8.innerText == "1" && box9.innerText == "1" || box4.innerText == "1" && box5.innerText == "1" && box6.innerText == "1"|| box2.innerText == "1" && box5.innerText == "1" && box8.innerText == "1") {
        p1++;
        player1.prepend(winner);
        alert("Player 1 win");
        player1.children[1].innerHTML = `<h4>Win = ${p1}</h4>`;

    }
    if (box1.innerText == "2" && box2.innerText == "2" && box3.innerText == "2" || box1.innerText == "2" && box4.innerText == "2" && box7.innerText == "2" || box1.innerText == "2" && box5.innerText == "2" && box9.innerText == "2" || box3.innerText == "2" && box6.innerText == "2" && box9.innerText == "2" || box3.innerText == "2" && box5.innerText == "2" && box7.innerText == "2" || box7.innerText == "2" && box8.innerText == "2" && box9.innerText == "2" || box4.innerText == "2" && box5.innerText == "2" && box6.innerText == "2"|| box2.innerText == "2" && box5.innerText == "2" && box8.innerText == "2"){
        p2++;
        player2.prepend(winner);
        alert("Player 2 win");
        player2.children[1].innerHTML = `<h4>Win = ${p2}</h4>`;
    }



};
player1.children[1].innerHTML = `<h4>Win = ${p1}</h4>`;


check();

box1.onclick = () => {
    if (i % 2 != 0) {
        box1.innerText = "1";
    }
    else {
        box1.innerText = "2";
    }


    i++;
    check();
};



box2.onclick = () => {
    if (i % 2 != 0) {
        box2.innerText = "1";
    }
    else {
        box2.innerText = "2";
    }
    i++;
    check();
};


box3.onclick = () => {
    if (i % 2 != 0) {
        box3.innerText = "1";
    }
    else {
        box3.innerText = "2";
    }
    i++;
    check();
};



box4.onclick = () => {
    if (i % 2 != 0) {
        box4.innerText = "1";
    }
    else {
        box4.innerText = "2";
    }
    i++;
    check();
};


box5.onclick = () => {
    if (i % 2 != 0) {
        box5.innerText = "1";
    }
    else {
        box5.innerText = "2";
    }
    i++;
    check();

};


box6.onclick = () => {
    if (i % 2 != 0) {
        box6.innerText = "1";
    }
    else {
        box6.innerText = "2";
    }
    i++;
    check();
};


box7.onclick = () => {
    if (i % 2 != 0) {
        box7.innerText = "1";
    }
    else {
        box7.innerText = "2";
    }
    i++;
    check();
};


box8.onclick = () => {
    if (i % 2 != 0) {
        box8.innerText = "1";
    }
    else {
        box8.innerText = "2";
    }
    i++;
    check();
};


box9.onclick = () => {
    if (i % 2 != 0) {
        box9.innerText = "1";
    }
    else {
        box9.innerText = "2";
    }
    i++;
    check();
};



let reset = document.querySelector(".reset");
reset.onclick = () => {
    location.reload();
    i++;
}

