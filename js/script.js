// Changing to another icon when click to icon
let clickMe = document.querySelector('.icon');
let button = document.querySelectorAll('.button');
let clickme= document.getElementById('clickme');
let calculator = document.querySelector('.calculator');
let caltext =  document.querySelector('.calculator-text');
let dis = document.querySelector('.display');

clickMe.addEventListener('click', function(e){
    if(e.target.id !=='clickMe'){
        clickMe.classList.replace('fa-sun', 'fa-moon');
    }
})
clickMe.addEventListener('click', function(){
    clickme.classList.toggle('fa-sun');

})
clickMe.addEventListener('click', function(){
    if(clickme.classList.toggle('fa-moon')){
        calculator.style.cssText = 'background: #fff; box-shadow: 0px 6px 10px rgb(206 196 196), 6px 6px 10px rgb(160 144 144)';
        document.body.style.cssText = "background-color: #ecf0f3";
        caltext.style.cssText = "color:#000";
        dis.style.cssText ="box-shadow: 0px -6px 10px #fff, inset 5px 6px 13px rgb(0 0 0 / 15%); color: #000";
        for(var i = 0; i < button.length; i++){
            button[i].style.cssText = "color: #202124";
        }
    }
    else{
        calculator.style.cssText ="background: #202124; box-shadow: 0px 6px 10px rgb(0 0 0), 6px 6px 10px rgb(0 0 0)";
        document.body.style.cssText = "background-color: #3a4452";
        caltext.style.cssText = "color:#fff";
        dis.style.cssText ="box-shadow:0px -6px 10px #1b1a1a, inset 5px 6px 13px rgb(0 0 0 / 40%); color: #fff";
        for(var i = 0; i < button.length; i++){
            button[i].style.cssText = "color: #e8dede";
        }
        
    }
})

// Now operational begins
let btn = document.querySelectorAll('.btn');
let ope = document.querySelectorAll('.ope');
let string = '';
let display = document.querySelector('input');

Array.from(btn).forEach((btns)=>{
    btns.addEventListener('click', function(){
        string = string + btns.innerHTML;
        display.value = string;
    })
})

Array.from(ope).forEach((opes)=>{
    opes.addEventListener('click', function(){
        string += opes.innerHTML;
        display.value = string;
    })
})

document.querySelector('.ac').addEventListener('click', function(){
    string = ''; // For null or empty value
    display.value = string;
})

document.querySelector('.back').addEventListener('click', function(){
    string = string.slice(0, -1);
    display.value = string;
})

document.querySelector('.equal').addEventListener('click', function(){
    try{
        display.value = eval(string);  
    }
    catch(err){
        display.value = "Enter Valid Input";
    }
})