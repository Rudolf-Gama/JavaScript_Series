const random=parseInt(Math.random()*100+1);

const userInput=document.querySelector("#guessField");
const submit=document.getElementById("subt")
const guessslot=document.querySelector(".guesses")
const remain=document.querySelector(".lastResult")
const Startover=document.querySelector(".resultParas")
const loworHi=document.querySelector(".lowOrHi")

const  p=document.createElement('p')
let prevguess=[]
let numguess=1

let playgame =true

if(playgame){
    submit.addEventListener('click',(e)=>{
      e.preventDefault()
      const guess=parseInt(userInput.value);
      console.log(guess)
      validguess(guess)
    })
}

function validguess(guess){
  if(isNaN(guess)){
    alert("Enter a valid string")
  }
  else if(guess<1){
    alert("Enter a number greater than 1")
  }
  else if(guess>100){
    alert("Enter a number greater than 100")
  }
  else{
    prevguess.push(guess)
    if(numguess>10){
       displaymsg('Attempts Finished. Game Over')
       displayguess(guess)
       endgame()
    }else{
       displayguess(guess)
       checkguess(guess)
    }
  }
}

function checkguess(guess){
   if(guess===random){
    displaymsg("You won")
    endgame()
   }
   else if(guess<random){
    displaymsg('Enter a greater value')
   }
   else {
    displaymsg('Enter a smaller value')
   }
}

function displayguess(guess){
   userInput.value=''
   guessslot.innerHTML+=`${guess} , `
   numguess++;
   remain.innerHTML=`${11-numguess}`;
}

function displaymsg(message){
    loworHi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h3 id="newga"> Start New Game </h3>`
  Startover.appendChild(p)
  playgame=false
  newgame()
}

function newgame(){
  const retry=document.getElementById("newga");
  retry.addEventListener('click',(e)=>{
     e.preventDefault()
     const random=parseInt(Math.random()*100+1);
     prevguess=[]
     numguess=1
     guessslot.innerHTML=''
     remain.innerHTML=`${11-numguess}`;
     userInput.removeAttribute('disabled')
     Startover.removeChild(p)

     playgame=true
  })
}