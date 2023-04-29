// var keyword is used to declare a variable.
var song10=new Audio("Exercise/Ah-Ha.mp3"); 
var song11=new Audio("Exercise/Dan.mp3");
var song12=new Audio("Exercise/Back Of The Net.mp3")
var song13=new Audio("Exercise/Bang Out Of Order.mp3")
var song14=new Audio("Exercise/Jurassic Park.mp3")
var song15=new Audio("Exercise/Smell My Cheese.mp3")
var song16=new Audio("Exercise/Goal.mp3")
var song17=new Audio("Exercise/Kiss my Face.mp3")
var song18=new Audio("Exercise/Hello Partridge.mp3")
//import all the audio like above
var ppbutton = document.getElementsByClassName("btn"); ppbutton.addEventListener("click", playPause); 
//event lisetner is used to play and pause the music 
function play10(){     
    if (song10.paused) {         
        song10.play();         
        ppbutton.innerHTML = "Pause";         
    }     
    else  {         
        song10.pause();          
        ppbutton.innerHTML = "Play";         
    } 
}  
function play11(){     
    if (song11.paused) {        
        song11.play();         
        ppbutton.innerHTML = "Pause";         
    }     
    else  {         
        song11.pause();          
        ppbutton.innerHTML = "Play";         
    } 
} 
function play12(){
    if (song12.paused) {
        song12.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        song12.pause();
        ppbutton.innerHTML = "Play";
    }
}
function play13(){
    if (song13.paused) {
        song13.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        song13.pause();
        ppbutton.innerHTML = "Play";
    }
} 
function play14(){
    if (song14.paused) {
        song14.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        song14.pause();
        ppbutton.innerHTML = "Play";
    }
}
function play15(){
    if (song15.paused) {
        song15.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        song15.pause();
        ppbutton.innerHTML = "Play";
    }
}
function play16(){
    if (song16.paused) {
        song16.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        song16.pause();
        ppbutton.innerHTML = "Play";
    }
}
function play17(){
    if (song17.paused) {
        song17.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        song17.pause();
        ppbutton.innerHTML = "Play";
    }
}
function play18(){
    if (song18.paused) {
        song18.play();
        ppbutton.innerHTML = "Pause";
    }
    else {
        song18.pause();
        ppbutton.innerHTML = "Play";
    }
}
