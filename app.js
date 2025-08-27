let boxes = document.querySelectorAll(".btn");
let player = document.querySelector("#playername");
let turnPlayerX = true;
let reset = document.querySelector(".reset");
let resetscore = document.querySelector(".resetcounter");
let scoreX = document.querySelector("#counterX");
let scoreO = document.querySelector("#counterO");


let scoreXco = 1;
let scoreOco = 1;

let win_pattern = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


let resetfunc = () =>
{
    turnPlayerX = true;
     player.innerText="Player X Turn";
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="";
     }
    }
    
let resetcount = () =>
{
    turnPlayerX = true;
     player.innerText="Player X Turn";
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
        box.style.backgroundColor="";
     }
     scoreOco=1;
        scoreXco=1;
         scoreX.innerHTML = `Player X : `;
    scoreO.innerHTML = `Player O : `;
    }

resetscore.addEventListener("click",resetcount);
reset.addEventListener("click",resetfunc);



boxes.forEach((box) => {

    box.addEventListener("click",() =>{
       if(turnPlayerX)
       {
        turnPlayerX=false;
        player.innerText="Player X Turn";
        box.innerText="X";
        box.style.backgroundColor="#E2A0FF";
      
       }
       else{
        turnPlayerX=true;
        player.innerText="Player O Turn";
        box.innerText="O";
         box.style.backgroundColor="#FFC1CF";
       
       }
        box.disabled = true;

        check_winner();
    });

});



const disable = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const check_winner = () =>
{
    for(let pattern of win_pattern){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" )
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                boxes[pattern[0]].style.backgroundColor="#46db44ff";
                boxes[pattern[1]].style.backgroundColor="#46db44ff";
                boxes[pattern[2]].style.backgroundColor="#46db44ff";
                player.innerText= `Player ${pos1} WINS!`;
                if(pos1 === "X")
                {
                    scoreX.innerHTML = `Player X : ${scoreXco}`;
                    scoreXco++;
                }
                if(pos1 === "O")
                { 
                    scoreO.innerHTML = `Player O : ${scoreOco}`;
                    scoreOco++;
                   
                }
                
                
                disable();
            
            }
        }

    }
};