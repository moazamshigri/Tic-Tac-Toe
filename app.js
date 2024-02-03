let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turnO = true;
let msgBox = document.querySelector(".meassageBox");
let meassage = document.querySelector("#msg");
let reset2 = document.querySelector(".reset2");
let flag = true;
let count =0;
let count2 = 0;



const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 4, 8],
    [2, 4, 6],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

];

// Functions 
const resetgame = () => {
    turnO = false;
    enableBoxes();
    msgBox.classList.add("hide");
    count =0;
    flag = true;
    
    

}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    meassage.innerText = `Congratulations, Player ${winner} wins`;
    msgBox.classList.remove("hide");
    
};

const checkWinner = () => {
    for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                disableBoxes();
                showWinner(pos1);
                flag = false;
            }
        };
        
    };
};

const checkDraw = () =>{
    if(count === 9 && flag){
     
            meassage.innerText = "No Results";
            msgBox.classList.remove("hide");
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            
            turnO = false;
            box.style.color = "green";
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "red"
        }
        box.disabled = true;
        count++;
        checkWinner();
        checkDraw();
    });
});

reset.addEventListener("click", resetgame);
reset2.addEventListener("click",resetgame);
