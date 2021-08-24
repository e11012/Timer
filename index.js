function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    var number = inputVal;
    var audio = new Audio('audio.m4a');
    document.body.style.backgroundColor = "#696969";
    audio.play();
    var fiveMinutes = 60 * number,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            window.location.reload()
            audio.pause();


        }
    }, 1000);
   
}
function resetTimer(){
    window.location.reload()

}
function pauseTimer(){
    timer = duration;

}
