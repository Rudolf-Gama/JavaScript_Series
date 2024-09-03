
const starting=document.getElementById('start');
const stoping=document.getElementById('stop');

function changebg(){
    const coloring="0123456789ABCDEF"
    let randomcolor='#'
    for(let i=0;i<6;i++)
    randomcolor+=coloring[Math.floor(Math.random()*16)];
    return randomcolor;
}

function backgroundnow(){
    document.body.style.background=changebg();
}

let interval;
starting.addEventListener('click',(e)=>{
    if(!interval){
    interval=setInterval(()=>{
        backgroundnow(); 
        console.log('changed background');
    },1000);
}
})

stoping.addEventListener('click',()=>{
    clearInterval(interval);
    console.log('background stopped');
    interval=null
})