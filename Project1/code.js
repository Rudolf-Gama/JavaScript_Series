const btn=document.querySelectorAll('.button');
const body=document.querySelector('body');

btn.forEach((button)=>{
  button.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=== 'grey'){
            body.style.backgroundColor='grey';
           // button.appendChild(document.createTextNode('grey'))
        }
        else if(e.target.id=== 'white'){
            body.style.backgroundColor='white';
        }
        else if(e.target.id=== 'blue'){
            body.style.backgroundColor='blue';
        }
        else if(e.target.id=== 'yellow'){
            body.style.backgroundColor='yellow';
        }
  })
})
