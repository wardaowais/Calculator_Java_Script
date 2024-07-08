let string =""
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{

button.addEventListener('click',(e)=>{
     let buttonText = e.target.innerHTML.trim();
    if(  buttonText == '='){
        string = eval(string);
        document.querySelector('input').value = string;


    }
    if(  buttonText == 'C'){
        string = "";
        document.querySelector('input').value = string;


    }
    else{

          
    string = string+ buttonText;
    document.querySelector('input').value = string;
    }
  
})
}) 