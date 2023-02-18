// Changing to another icon when click to icon
let clickMe = document.querySelector('.icon');
let calculator = document.querySelector('.calculator');
let button = document.querySelectorAll('.button');
let clickme= document.getElementById('clickme');

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
        calculator.style.background = '#fff';
        document.querySelector('.display').style.cssText = "color:#000";
        for(var i = 0; i < button.length; i++){
            button[i].style.cssText = "color: #202124";
        }
    }
    else{
        calculator.style.cssText ="background: #202124";
        document.querySelector('.display').style.cssText = "color: #fff";
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
    if(string = eval(string)){
    display.value = string;
}
// 
else if(display.value == ''){
    display.value = "Empty"
}else if(display.value = String){
    display.value = "Its not a number";
} 
})