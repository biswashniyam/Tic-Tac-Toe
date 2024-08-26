let boxes=document.querySelectorAll(".area");
let resetgame=document.querySelector('#reset');
let newgame=document.querySelector("#new_game");
let msgcontainer=document.querySelector(".msgcont");
let message=document.querySelector("#msg");

let turn0=true;
const winpatterns= [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Left-to-right diagonal
    [2, 4, 6]  // Right-to-left diagonal
];

boxes.forEach((area) => {
    area.addEventListener("click",() =>{
        if(turn0)
        {
            area.innerText="O";
            area.classList.add("o-player");
            turn0=false;
        }
        else{
            area.innerText="X";
            area.classList.add("x-player");
            turn0=true;
        }
        area.disabled=true;
        checkwinner();
        
    })
});

const showwinner=(Winner) =>
{
    message.innerText=`congratulations, winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
const checkwinner=() =>{
    for (let patterns of winpatterns)
    {
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
    let posevalue1=boxes[patterns[0]].innerText
    let posevalue2=boxes[patterns[1]].innerText
    let posevalue3=boxes[patterns[2]].innerText

    if(posevalue1 != "" && posevalue2 != "" && posevalue3 != "" )
    {
        if(posevalue1===posevalue2 && posevalue2==posevalue3)
        {
            showwinner(posevalue1);
        }
    }
    }
}
const disablebox= () =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enablebox= () =>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
            box.classList.remove("o-player", "x-player");
        }
    }
const resetgme=()=>
{
    turn0=true;
    enablebox();
    msgcontainer.classList.add("hide");
}
newgame.addEventListener("click",resetgme);
resetgame.addEventListener("click",resetgme);