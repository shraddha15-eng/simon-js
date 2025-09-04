
let gameSeq=[];   //for storing sequence how game flashed itself
let userSeq=[];     //for storing sequence how u clicked and flashed button seq


let btns=["pink","seagreen","orange","skyblue"]

let started = false;
let level = 0;
let h3=document.querySelector('h3')

//on whole document detect if any key pressed
document.addEventListener("keypress", function(){  
    if(started == false){

    console.log("Game Started")
    started == true;
    }
    levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);

}
function levelUp(){
   // userSeq=[];
    level++;
    h3.innerText= `Level ${level}`;
    let randIdx=Math.floor(Math.random()*4)  //
    let randomColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randomColor}`)  //y dot
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randomColor);
    
    gameSeq.push(randomColor);
    console.log(gameSeq)
    gameFlash(randBtn);


    

}


let highScore=0;


function checkAns(idx){
   // console.log("curr level : ", level)

    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
         // console.log("same value");
        }
        
     else{
        if(level>highScore){
            highScore=level;
        }
          h3.innerHTML=`Game Over! Your score is <b> ${level} </b> <br>Press any key to 
          restart<br> Highest score: <b>${highScore}</b>`;
          document.querySelector('body').style.backgroundColor="red";

          setTimeout(function(){
          document.querySelector('body').style.backgroundColor="white";
    },150);
    

    reset();   //important call every function u want to execute after that 
    }
}


function buttonPress(){
    //console.log("btn was pressed")   //track the button with flash
    //console.log(this)
    let button=this;

    userFlash(button);
    userColor=button.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}


function reset(){
    started = false;  //assignment not comparison use = not==
    userSeq = [];
    gameSeq = [];
    level=0;
}

