const form=document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault();

    var height=parseInt(document.getElementById("height").value);
    var weight=parseInt(document.getElementById("weight").value);
    var result=document.getElementById("results");

    if(height<0 || isNaN(height) || height===''){
        result.innerHTML=`Please enter valid height`
    }
    else if(weight<0 || isNaN(weight) || weight===''){
        result.innerHTML=`Please enter valid weight`
    }
    else{
        var bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`
    }
}
);