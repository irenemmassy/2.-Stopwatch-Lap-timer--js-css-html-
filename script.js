window.onload = function () {
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const tens = document.getElementById("tens");

    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");

    let minutesSet = 00;
    let secondsSet = 00;
    let tensSet = 00;
    let interval;
    // console.log(resetBtn, stopBtn, startBtn)

    startBtn.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        dimEffect()

    }
    // reset button
    resetBtn.onclick = function () {
        clearInterval(interval);
        minutesSet = "00";
        secondsSet = "00";
        tensSet = "00";
        minutes.innerHTML = minutesSet;
        seconds.innerHTML = secondsSet;
        tens.innerHTML = tensSet;
        document.getElementById("laps").innerHTML = "";

    }
    stopBtn.onclick = function () {
        clearInterval(interval);
        const lap = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `lap:<span>${minutes.innerHTML}:${seconds.innerHTML},${tens.innerHTML}</span>`;

        lap.appendChild(li);
        dimEffect();

    }

    // create start timer function
    function startTimer() {
        tensSet++;
        if (tensSet < 9) {
            tens.innerHTML = 0 + tensSet;
        }
        if (tensSet > 9) {
            tens.innerHTML = tensSet;
        }
        if (tensSet > 99) {
            secondsSet++;
            seconds.innerHTML = "0" + 0;
            tensSet = 0;
            tens.innerHTML = "0" + 0;
        }
        if (secondsSet > 9) {
            seconds.innerHTML = secondsSet;
        }
        if (secondsSet == 60) {
            minutesSet++;
            minutes.innerHTML = "0" + minutesSet;
            secondsSet = 0;
        }
        if (minutesSet > 9) {
            minutes.innerHTML = minutesSet;
        }
    }
    function dimEffect() {
        const lapTime = document.querySelector(".lap-time");
        lapTime.classList.toggle("diming-effect");
    }
}