let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let heightestScore=0;
let btns=["red","green","yellow","purple"];


document.addEventListener("keypress" ,function(){
if(started===false){
    levelUp();
    started=true;
}

});


function btnFlash(btn){
    btn.classList.add("white");
    setTimeout(()=>{
        btn.classList.remove("white");
    },250);
}
//funtion

 function levelUp(){
    userSeq=[];
    level++;
    let h2=document.querySelector("h2");
    h2.innerText=`Level ${level}`;
    let randIndx=Math.floor(Math.random()*3)+1;
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);

gameSeq.push(randColor);
console.log(gameSeq);
    btnFlash(randbtn);
 }


 function checkMatch(indx){
if(userSeq[indx]===gameSeq[indx]){
    if(userSeq.length===gameSeq.length){

        setTimeout(levelUp,1000);
    }
}else{
    let body=document.querySelector("body");
    body.classList.add("danger");
    setTimeout(()=>{
body.classList.remove("danger");
    },250);

    let h2=document.querySelector("h2");
    heightestScore=heightestScore+level;
    h2.innerHTML=`Game Over! <br> Your heightest score is ${heightestScore} . <br> <b>Your current score was ${level} <b> <br> Press any key to start the game.`;
    reset();
}
 }


function btnPress(){
    let btn=this;
    let id=btn.getAttribute("id");
    console.log(btn);
    btnFlash(btn);
    userSeq.push(id);
    checkMatch(userSeq.length-1);
}
  

 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
 function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
 }