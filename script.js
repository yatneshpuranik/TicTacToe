let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rst");
let turnO = true;
let msgContainer = document.querySelector(".msg");
let newBtn = document.querySelector("#nw");
let msg = document.querySelector("#msg");
let count = 0 ;
let drawMatch = document.querySelector(".draw"); 
let turnBlockX = document.querySelector(".X");
let turnBlockO = document.querySelector(".O")
let winPatten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach( (box)=> { 
    box.addEventListener("click",() => {
        count++
        console.log(count);
        if (turnO === true )
        {
            box.innerText = "O";
            turnO = false;
            turnBlockX.classList.remove("hide");
            turnBlockO.classList.add("hide");
            
        }
        else 
        {
            box.innerText= "X";
            turnO = true;
            turnBlockO.classList.remove("hide");
            turnBlockX.classList.add("hide");
            
        }
        box.disabled = true;
        checkwinner();

    });
    

} );
const resetGame = () =>
{
   count = 0 ;
   turnO = true;
   enableBoxes();
   turnBlockO.classList.remove("hide");
   turnBlockX.classList.add("hide");
};

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true ;

    }
};
const enableBoxes = () =>
{
    for(let box of boxes)
    {
            box.disabled = false ;
            box.innerText = "";
            msgContainer.classList.add("hide");
            drawMatch.classList.add("hidden");
            
    }
};

const showWinner = (winner) => 
{
     msg.innerText = `Winner is ${winner}`;  
     msgContainer.classList.remove("hide");
     disableBoxes();

}


const checkwinner = () =>
{
if ( count === 9 )
{
    drawMatch.classList.remove("hidden");
}
else
{

    for( let pattern of winPatten)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if (pos1Val === pos2Val && pos2Val === pos3Val)
            {   
                
                showWinner(pos1Val);
            }
        }
    }
}

}
let restartBtn = document.querySelector("#rs");
restartBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);