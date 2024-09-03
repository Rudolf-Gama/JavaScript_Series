var clock=document.getElementById('clock')

setInterval(()=>{
    let date=new Date()
    const t=date.toLocaleTimeString();
    //clock.innerHTML=`${t}`
    clock.innerText=`${t}`
    
},1000);