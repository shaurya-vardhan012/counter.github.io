let decrease=document.getElementById('btn1');
let reset=document.getElementById('btn2');
let increase=document.getElementById('btn3');
let number=document.getElementById('number');
let add=0;
decrease.addEventListener("click",function(){
    if(add>0)
    {
        number.textContent= --add;
    }
    else
    {
        number.textContent=0;
    }
    
});

reset.addEventListener("click",function()
{
    add=0;
    number.textContent=0;
});

increase.addEventListener("click",function(){
    add++;
    number.textContent=add;
});