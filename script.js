var button = document.querySelector('button');
var footer = document.getElementById('header');

// button.onclick = function changeColor(){
//     footer.style.background = 'lightgreen'
// };  
function changeColor(){
    if(footer.style.background == 'lightgreen'){
        footer.style.background = 'blue';
    }else{
        footer.style.background = 'lightgreen';
    }
}