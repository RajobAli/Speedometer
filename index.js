
var speed = 0;
var prevSpeed = 0;
var currentScale = 1;

function increaseSpeed(){
    if(speed < 180){
        speed = speed + 10;
        addClass();
        currentScale = currentScale + 1;

    }
 
    
}

function decreaseSpeed(){
    if(speed >0){
        speed = speed -10;
        addClass();
        currentScale = currentScale - 1;
        changeAvtive();
        changeText();

    }


}

function addClass(){
    let newClass = "speed-" + speed;
    let prevClass = "speed-"+ prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if(el.classList.contains(prevClass)){
        el.classList.remove(prevClass);
        el.classList.add(newClass);
        changeAvtive();
        changeText();
    }
    prevSpeed = speed;


}

function changeAvtive(){
    let tempClass = "speedometer-scale-" + currentScale;
    let el = document.getElementsByClassName(tempClass)[0];
    el.classList.toggle("active");
}

function changeText(){
    let el = document.getElementsByClassName("km")[0];
    el.innerText = speed;
}

